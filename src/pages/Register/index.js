import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Gap, Header, Input, Loading } from "../../components";
import { colors, storeData, useForm } from "../../utils";
import auth from "@react-native-firebase/auth";
import { showMessage } from "react-native-flash-message";
import validator from "../../utils/validator";
import { firebase } from "@react-native-firebase/database";

const initError = {
    fullname: null,
    occupation: null,
    email: null,
    password: null,
};
const Register = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const inputs = ["fullname", "occupation", "email", "password"];
    const [form, setForm] = useForm({
        fullname: "",
        occupation: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState(initError);

    const setStateError = (key, value) => {
        setError({
            ...error,
            [key]: value,
        });
    };

    const onSubmit = () => {
        setIsLoading(true);
        let valid = true;
        let data;
        let newErrorState = {};
        for (const input of inputs) {
            const fieldError = validator(input, form[input]);
            if (fieldError) {
                valid = false;
                newErrorState[input] = fieldError;
            } else {
                valid = true;
                setError(initError);
            }
        }

        if (!valid) {
            setError(newErrorState);
            setIsLoading(false);
            console.log("nggk masuk");
            return true;
        }

        auth()
            .createUserWithEmailAndPassword(form.email, form.password)
            .then(async res => {
                delete form.password;
                data = {
                    ...form,
                    uid: res.user.uid,
                    profileUser: "default",
                };
                firebase
                    .app()
                    .database(
                        "https://my-doctor-app-8cc35-default-rtdb.asia-southeast1.firebasedatabase.app/",
                    )
                    .ref("/users/" + res.user.uid + "/")
                    .once("value", dataSnapshot => {
                        firebase
                            .app()
                            .database(
                                "https://my-doctor-app-8cc35-default-rtdb.asia-southeast1.firebasedatabase.app/",
                            )
                            .ref("/users/" + res.user.uid + "/")
                            .set(data)
                            .then(() => {
                                setIsLoading(false);
                                storeData("user_profile", data);
                                navigation.navigate("UploadPhoto", data);
                                setForm("reset");
                            });
                    });
            })
            .catch(err => {
                setIsLoading(false);
                const codeError = err.code;
                if (codeError === "auth/email-already-in-use") {
                    showMessage({
                        message:
                            "The email address is already in use another account",
                        type: "danger",
                    });
                    return;
                }
                if (codeError === "auth/weak-password") {
                    showMessage({
                        message: "The given email and password is invalid",
                        type: "danger",
                    });
                    return;
                }
            });
    };

    const isValueError = name => {
        const fieldError = validator(name, form[name]);
        setStateError(name, fieldError);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.page}>
                <Header
                    onPress={() => navigation.goBack()}
                    title="Daftar Akun"
                />
                <View style={styles.content}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}>
                        <Input
                            label="Full Name"
                            value={form.fullname}
                            onChangeText={val => setForm("fullname", val)}
                            onBlur={() => isValueError("fullname")}
                            isError={error.fullname ? true : false}
                            messageError={error.fullname}
                        />
                        <Gap height={24} />
                        <Input
                            label="Pekerjaan"
                            value={form.occupation}
                            onChangeText={val => setForm("occupation", val)}
                            onBlur={() => isValueError("occupation")}
                            isError={error.occupation ? true : false}
                            messageError={error.occupation}
                        />
                        <Gap height={24} />
                        <Input
                            label="Email"
                            value={form.email}
                            onChangeText={val => setForm("email", val)}
                            // onBlur={() => isValueError("email")}
                            onBlur={() => null}
                            isError={error.email ? true : false}
                            messageError={error.email}
                            keyboardType="email-address"
                        />
                        <Gap height={24} />
                        <Input
                            label="Password"
                            value={form.password}
                            onChangeText={val => setForm("password", val)}
                            onBlur={() => isValueError("password")}
                            isError={error.password ? true : false}
                            messageError={error.password}
                            secureTextEntry
                        />
                        <Gap height={40} />
                        <Button title="Continue" onPress={onSubmit} />
                    </ScrollView>
                </View>
            </View>
            {isLoading && <Loading />}
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
        paddingTop: Platform.OS === "ios" && 40,
    },
    content: {
        flex: 1,
        padding: 40,
        paddingTop: 0,
    },
});
