import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default DrawerNav = ({ navigation }) => {    
    return (
        <View style={styles.container}>
            <View style={styles.imgProfile}>
                <Image
                    style={styles.img}
                    source={require('../../assets/image/man.jpeg')}
                />
                <View style={styles.userNameProfile}>
                    <Text style={[styles.nameProfile, { color: 'red' }]}>Победитель любейшЕГО хакатона</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                        <Text style={[styles.nameProfile, { marginRight: 10, color: 'green'}]}>Показати профіль</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.settingRate}>
                <TouchableOpacity onPress={() => navigation.navigate('setting')}>
                    <Text style={[styles.titleBtn, { marginTop: 15, color: 'green'}]}>Налаштування</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text style={[styles.titleBtn, { marginTop: -10, color: 'green' }]}>Логін</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
    },
    imgProfile: {
        width: '100%',
        height: 160,
        backgroundColor: 'rgba(46, 134, 222,0.40)',
    },
    img: {
        width: 80,
        height: 80,
        marginTop: 25,
        marginLeft: 30,
        borderRadius: 40,
    },
    userNameProfile: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    nameProfile: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    navScreen: {
        width: '100%',
        height: 280,
        backgroundColor: 'rgba(46, 134, 222,0.30)',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    btnNav: {},
    titleBtn: {
        marginLeft: 28,
        marginBottom: 30,
        fontStyle: 'italic',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    settingRate: {
        width: '100%',
        height: 175,
        backgroundColor: 'rgba(46, 134, 222,0.30)',
    },
});
