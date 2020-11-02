import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity } from 'react-native';

export default Profile = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <View style={styles.bgImageContent}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/image/man.jpeg')}
                    />
                </View>
                <View style={styles.text}>
                    <Text style={[styles.name, { color: 'red' }]}>Победитель любейшЕГО хакатона</Text>
                    <Text style={styles.address}>Front-end developer</Text>
                    <Text style={styles.address}>Прогрес проходження курсів:</Text>
                    <View style={styles.card}>
                        <View style={styles.childCard}>
                            <Image
                                style={styles.viewImg}
                                source={require('../../assets/image/Vue.png')}
                            />
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ color: '#3b6978', fontWeight: 'bold' }}>Курс з Vue.js</Text>
                                <Text style={{ color: '#3b6978' }}>Процент пройденого матеріалу - 10%</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ color: '#3b6978', fontWeight: 'bold' }}>Intro to Vue.js</Text>
                            <Text style={{ color: '#3b6978' }}>1) Vue Instance from Vue Mastery</Text>
                            <Text style={{ color: '#3b6978' }}>2) Attribute Binding from Vue Mastery</Text>

                            <Text style={{ color: '#3b6978', fontWeight: 'bold' }}>Real Wordld Vue</Text>
                            <Text style={{ color: '#3b6978' }}>1) Vue in >Real Wordld</Text>
                            <Text style={{ color: '#3b6978' }}>2) test</Text>

                            <Text style={{ color: '#3b6978', fontWeight: 'bold' }}>Mastering Vuex</Text>
                            <Text style={{ color: '#3b6978' }}>1) Vue Instance from Vuex Mastery</Text>


                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.childCard}>
                            <Image
                                style={styles.viewImg}
                                source={require('../../assets/image/React.png')}
                            />
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ color: '#3b6978', fontWeight: 'bold' }}>Курс з ReactJS</Text>
                                <Text style={{ color: '#3b6978' }}>Процент пройденого матеріалу - 0%</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ color: '#3b6978', fontWeight: 'bold' }}>Intro to ReactJS</Text>
                            <Text style={{ color: '#3b6978' }}>1) Курси по Реактку</Text>

                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => { navigation.navigate('thanks') }} style={[styles.header, { justifyContent: 'center', }]}>
                <Text style={[styles.title, { color: 'green' }]}>  Спасибі, потім тієї кнопки не буде     </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    bgImageContent: {
        width: '100%',
        height: 170,
        backgroundColor: 'rgba(46, 134, 222,0.40)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: '100%',
        height: 45,
        backgroundColor: 'rgba(46, 134, 222,0.5)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 15,

    },
    img: {
        width: 90,
        height: 90,
        borderRadius: 100,
        backgroundColor: '#ddd',
        marginTop: 135,
    },
    text: {
        marginTop: 35,
        alignItems: 'center',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    address: {
        color: '#84a9ac',
    },
    card: {
        width: 325,
        height: 325,
        backgroundColor: 'rgba(46, 134, 222,0.10)',
        marginTop: 25,
    },
    childCard: {
        width: 325,
        height: 75,
        backgroundColor: 'rgba(46, 134, 222,0.20)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewImg: {
        width: 50,
        height: 50,
        // backgroundColor: 'rgba(46, 134, 222,0.5)',
        backgroundColor: '#fff',
        borderRadius: 30,
        marginLeft: 15,
    },

});