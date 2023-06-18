import React, { useEffect, useState } from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { Button, Gap, Header, Input, Profile } from "../../components";
import { colors, getData } from "../../utils";
import { ILNullPhoto } from "../../assets";
import { launchImageLibrary } from "react-native-image-picker";
import auth from "@react-native-firebase/auth";
import { firebase } from "@react-native-firebase/database";

const UpdateProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullname: "",
        occupation: "",
        email: "",
        profileUser: "",
        password: "",
    });

    useEffect(() => {
        getData("user_profile").then(res => {
            setProfile(res);
        });
    }, []);

    const onChangeText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value,
        });
    };

    const getImage = () => {
        launchImageLibrary({
            includeBase64: true,
            quality: 0.5,
            maxWidth: 1000,
            maxHeight: 1000,
            mediaType: "photo",
        }).then(res => {
            if (res.didCancel || res.errorMessage) {
                showMessage({
                    message: "Anda membatalkan upload foto",
                    type: "danger",
                });
                return;
            }
            onChangeText(
                "profileUser",
                `data:${res.assets[0].type};base64,${res.assets[0].base64}`,
            );
        });
    };

    const onSubmit = () => {
        if (profile.password) {
            auth()
                .sendPasswordResetEmail(profile.email)
                .then(res => {
                    console.log(res);
                });
            // firebase
            //     .app()
            //     .database(
            //         "https://my-doctor-app-8cc35-default-rtdb.asia-southeast1.firebasedatabase.app/",
            //     )
            //     .ref("/users/" + data.uid + "/")
            //     .update(newData)
            //     .then(() => {
            //         setIsLoading(false);
            //         storeData("user_profile", newData);
            //         navigation.navigate("MainApp");
            //     });
        }
    };

    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile
                        photo={
                            !profile.profileUser ||
                            profile.profileUser === "default"
                                ? ILNullPhoto
                                : { uri: profile.profileUser }
                        }
                        isRemove
                        onPress={getImage}
                    />
                    <Gap height={26} />
                    <Input
                        label="Full Name"
                        value={profile.fullname}
                        onChangeText={val => onChangeText("fullname", val)}
                    />
                    <Gap height={24} />
                    <Input
                        label="Pekerjaan"
                        value={profile.occupation}
                        onChangeText={val => onChangeText("occupation", val)}
                    />
                    <Gap height={24} />
                    <Input
                        label="Email"
                        value={profile.email}
                        onChangeText={val => onChangeText("email", val)}
                        disable
                    />
                    <Gap height={24} />
                    <Input
                        label="Password"
                        value={profile.password}
                        onChangeText={val => onChangeText("password", val)}
                        secureTextEntry
                    />
                    <Gap height={40} />
                    <Button title="Save Profile" onPress={onSubmit} />
                </View>
            </ScrollView>
        </View>
    );
};
//kasus disable pada email adalah contoh penggunaan lebih mudahnya
//pada input.js, mengubah true=disable

export default UpdateProfile;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
        paddingTop: Platform.OS === "ios" && 40,
    },

    content: {
        padding: 40,
        paddingTop: 0,
    },
});
