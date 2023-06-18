import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Gap, Header, List } from '../../components'
import { colors } from '../../utils'

const UserProfile = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title="Profile" onPress={() => navigation.goBack()} />
            <Gap height={10} />
            {/* {profile.fullName.length > 0 &&<Profile 
            name={profile.fullName} 
            desc={profile.profession} 
            photo={profile.photo}
            /> } */}
            <Gap height={14} />
            <List
                name="Edit profile"
                desc="Last Update Yesterday"
                type="next"
                icon="edit-profile"
                onPress={() => navigation.navigate('UpdateProfile')} />
            <List
                name="Language"
                desc="Last Update Yesterday"
                type="next"
                icon="language" />
            <List
                name="Give Us Rate"
                desc="Last Update Yesterday"
                type="next"
                icon="rate" />
            <List
                name="Sign Out"
                desc="Out fromthis account"
                type="next"
                icon="help"
                onPress={() => navigation.replace('Login')}
            // onPrress={signOut}
            />
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platform.OS === 'ios' && 40
    },
})
