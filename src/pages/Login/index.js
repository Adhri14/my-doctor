import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { fonts } from '../../utils'
import { colors } from '../../utils/colors'

const Login = ({ navigation }) => {
    return (
        <>
            <View style={styles.page}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Gap height={40} />
                    <ILLogo />
                    <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
                    <Input label="Email Address"
                    />
                    <Gap height={24} />
                    <Input label="Password"
                        secureTextEntry
                    />
                    <Gap height={10} />
                    <Link title="Forgot My Password" size={12} />
                    <Gap height={40} />
                    <Button title="Sign In" />
                    <Gap height={30} />
                    <Link title="Create New Account" size={16} align="center" onPress={() => navigation.navigate('Register')} />
                </ScrollView>

            </View>
            {/* {loading && <Loading />} */}
        </>
    )
}

export default Login;

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: 40,
        backgroundColor: colors.white,
        flex: 1
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 154,
    }
})
