import React, { useState } from "react";
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Button, Gap, Header, Link, Loading } from "../../components";
import { colors, fonts, storeData } from "../../utils";
import {
    DummyUser,
    ILNullPhoto,
    IconAddPhoto,
    IconRemovePhoto,
} from "../../assets";
import { launchImageLibrary } from "react-native-image-picker";
import { showMessage } from "react-native-flash-message";
import { firebase } from "@react-native-firebase/database";

const UploadPhoto = ({ navigation, route }) => {
    const data = route.params;
    const [photo, setPhoto] = useState("");
    const [hasPhoto, setHasPhoto] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getImage = () => {
        launchImageLibrary({
            mediaType: "photo",
            includeBase64: true,
            maxWidth: 1000,
            maxHeight: 1000,
            quality: 0.4,
        }).then(res => {
            if (res.didCancel || res.errorMessage) {
                showMessage({
                    message: "Anda membatalkan upload foto",
                    type: "danger",
                });
                return;
            }
            setPhoto(
                `data:${res.assets[0].type};base64,${res.assets[0].base64}`,
            );
            setHasPhoto(true);
        });
    };

    const onSubmit = () => {
        const newData = {
            ...data,
            profileUser: photo,
        };
        setIsLoading(true);
        firebase
            .app()
            .database(
                "https://my-doctor-app-8cc35-default-rtdb.asia-southeast1.firebasedatabase.app/",
            )
            .ref("/users/" + data.uid + "/")
            .update(newData)
            .then(() => {
                setIsLoading(false);
                storeData("user_profile", newData);
                navigation.navigate("MainApp");
            });
    };

    return (
        <>
            <View style={styles.page}>
                <Header
                    title="Upload Photo"
                    onPress={() => navigation.goBack()}
                />
                <View style={styles.content}>
                    <View style={styles.profile}>
                        <TouchableOpacity
                            style={styles.avatarWrapper}
                            onPress={getImage}>
                            <Image
                                source={photo ? { uri: photo } : ILNullPhoto}
                                style={styles.avatar}
                            />
                            {hasPhoto && (
                                <IconRemovePhoto style={styles.addPhoto} />
                            )}
                            {!hasPhoto && (
                                <IconAddPhoto style={styles.addPhoto} />
                            )}
                        </TouchableOpacity>
                        <Text style={styles.name}>{data.fullname}</Text>
                        <Text style={styles.profession}>{data.occupation}</Text>
                    </View>
                    <View>
                        <Button
                            disable={!hasPhoto}
                            title="Upload and Continue"
                            onPress={onSubmit}
                        />
                        <Gap height={30} />
                        <Link
                            title="Skip for this"
                            align="center"
                            size={16}
                            onPress={() => navigation.replace("MainApp")}
                        />
                    </View>
                </View>
            </View>
            {isLoading && <Loading />}
        </>
    );
};

export default UploadPhoto;

const styles = StyleSheet.create({
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
    },

    profile: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },

    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: "center",
        justifyContent: "center",
    },

    page: {
        backgroundColor: colors.white,
        flex: 1,
        paddingTop: Platform.OS === "ios" && 40,
    },

    addPhoto: {
        position: "absolute",
        bottom: 8,
        right: 6,
    },

    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: "center",
    },

    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: "center",
        color: colors.text.secondary,
        marginTop: 4,
    },

    content: {
        paddingHorizontal: 40,
        flex: 1,
        paddingBottom: 64,
        justifyContent: "space-between",
    },
});
