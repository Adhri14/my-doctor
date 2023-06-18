import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ILNullPhoto } from "../../../assets";
import { colors, fonts, getData } from "../../../utils";

const HomeProfile = ({ onPress }) => {
    const [profile, setProfile] = useState({
        fullname: "",
        occupation: "",
        profileUser: "",
    });
    useEffect(() => {
        getData("user_profile").then(res => {
            console.log("data user: ", res);
            setProfile(res);
        });
    }, []);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image
                source={
                    profile.photo === "default"
                        ? ILNullPhoto
                        : { uri: profile.profileUser }
                }
                style={styles.avatar}
            />
            <View>
                <Text style={styles.name}>{profile.fullname}</Text>
                <Text style={styles.profession}>{profile.occupation}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default HomeProfile;

const styles = StyleSheet.create({
    container: { flexDirection: "row" },

    avatar: {
        height: 46,
        width: 46,
        borderRadius: 46 / 2,
        marginRight: 12,
        resizeMode: "cover",
        borderWidth: 1,
        borderColor: colors.cardLight,
    },

    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        textTransform: "capitalize",
    },

    profession: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        textTransform: "capitalize",
    },
});
