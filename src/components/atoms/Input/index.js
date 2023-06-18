import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../../../utils/colors";
import { fonts } from "../../../utils";

const Input = ({
    label,
    value,
    onChangeText,
    secureTextEntry,
    disable,
    onBlur,
    isError = false,
    messageError,
    ...props
}) => {
    const [border, setBorder] = useState(colors.border);
    const onFocusForm = () => {
        setBorder(colors.tertiary);
    };
    const onBlurForm = () => {
        setBorder(colors.border);
        onBlur();
    };

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                onFocus={onFocusForm}
                onBlur={onBlurForm}
                style={styles.input(border, isError)}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                autoCapitalize="none"
                spellCheck={false}
                //disable dibawah ini bersifat true karena true pada props di deklarasikan sebagai disable
                //agar lebih mudah pada penggunaannya
                //true=disable false=!disable (ini hanya case yg dibuat programmer)
                editable={!disable}
                selectTextOnFocus={!disable}
                {...props}
            />
            {isError && <Text style={styles.textError}>{messageError}</Text>}
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    input: (border, isError) => ({
        borderWidth: 1,
        borderColor: isError ? colors.error : border,
        borderRadius: 10,
        padding: 12,
    }),
    label: {
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 6,
        fontFamily: fonts.primary[400],
    },
    textError: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.error,
        marginTop: 5,
    },
});
