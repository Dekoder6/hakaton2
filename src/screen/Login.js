import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Увійти в додаток</Text>
                <TouchableOpacity>
                    <Image
                        style={styles.iconHeader}
                        source={require('../../assets/icons/menu.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.contentInput}>
                <TextInput
                    placeholder="Логін чи еmail"
                    style={styles.input}
                    underlineColorAndroid="#ddd"
                />
                <TextInput
                    placeholder="Пароль"
                    secureTextEntry={true}
                    style={styles.input}
                    underlineColorAndroid="#ddd"
                />
                <TouchableOpacity>
                    <View style={styles.btnLogin}>
                        <Text style={styles.titleBtn}>ЛОГІН</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.contentOr}>
                <View style={styles.lineOr}></View>
                <Text style={styles.titleUnderLine}>чи</Text>
                <View style={styles.lineOr}></View>
            </View>
            <View style={{ marginTop: 25, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <View style={[styles.btnGoTo, { backgroundColor: '#1b6ca8' }]}>
                        <Image
                            source={require('../../assets/icons/facebook.png')}
                            style={styles.iconSo}
                        />
                        <Text style={styles.titleGoTo}>УВІЙТИ ЧЕРЕЗ FACEBOOK</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <View style={[styles.btnGoTo, { backgroundColor: '#0097e6' }]}>
                        <Image
                            source={require('../../assets/icons/twitter.png')}
                            style={styles.iconSo}
                        />
                        <Text style={styles.titleGoTo}>УВІЙТИ ЧЕРЕЗ TWITTER</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <View style={[styles.btnGoTo, { backgroundColor: '#ff6b6b' }]}>
                        <Image
                            source={require('../../assets/icons/google.png')}
                            style={styles.iconSo}
                        />
                        <Text style={styles.titleGoTo}>УВІЙТИ ЧЕРЕЗ GOOGLE</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(46, 134, 222,0.5)',
        flexDirection: 'row',
        justifyContent: 'space-between',

        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 15,
        fontSize: 16,
    },
    iconHeader: {
        width: 20,
        height: 20,
        marginRight: 15,
    },
    contentInput: {
        marginTop: 25,
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        width: 330,
        height: 45,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,

        fontSize: 17,
        padding: 5,
    },
    btnLogin: {
        backgroundColor: 'rgba(46, 134, 222,0.5)',
        width: 330,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    titleBtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    contentOr: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
    },
    lineOr: {
        height: 13,
        borderBottomWidth: 2,
        borderColor: '#ddd',
        width: 152,
    },
    titleUnderLine: {
        fontWeight: 'bold',
        marginHorizontal: 3,
        fontSize: 17,
    },
    btnGoTo: {
        backgroundColor: '#487eb0',
        width: 330,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 15,
    },
    titleGoTo: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        marginRight: 50,
        alignItems: 'center',
    },
    iconSo: {
        width: 23,
        height: 23,
        marginLeft: -10,
    },
});

export default LoginScreen;