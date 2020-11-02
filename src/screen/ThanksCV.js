import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import { sHeight, sWidth } from '../helpers/screenSize';

export default ThanksCV = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                {/* **************************HEADER************************************** */}
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image
                                source={require('../../assets/icons/menuHome.png')}
                                style={styles.iconHeader}
                            />
                        </TouchableOpacity>
                        <Text style={styles.title}></Text>
                    </View>
                </View>
                {/* **************************END HEADER************************************** */}
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.content}>
                        <View style={styles.contentDetails}>
                            <Text style={styles.taskBody}><Text style={styles.bodyBody}>ДЯКУЄМО </Text></Text>
                            <Text style={styles.titleTask}>Ми  раді, що Ви вибрали нашу компанію</Text>
                            <Text style={styles.titleTask}>Представник нашої компанії зв'яжеться з Вами</Text>
                        </View>
                    </View>


                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 45,
        backgroundColor: 'rgba(46, 134, 222,0.5)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconHeader: {
        width: 22,
        height: 22,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 15,

    },
    container: {
        backgroundColor: '#fff',
    },

    content: {
        width: sWidth - 20,
        backgroundColor: '#c5e9fa',
        marginTop: 10,
        borderRadius: 2,
        elevation: 2,
    },
    contentDetails: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 10,
    },
    titleTask: {
        marginTop: 10,
        fontSize: 19,
        textAlign: 'center'
    },
    task: {
        color: '#636e72',
        fontSize: 16,
        marginTop: 8,
        justifyContent: 'center',
    },
    taskBody: {
        color: '#636e72',
        fontSize: 16,
        marginTop: 18,
        textAlign: 'center',
        justifyContent: 'center',
    },
    taskBody1: {
        color: '#636e72',
        fontSize: 16,
        marginTop: 18,
        marginLeft: 10,
    },
    bodyBody: {
        fontWeight: 'bold',
    },
    titleDetailsSetting: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    horizontalCard: {
        width: 120,
        height: 120,

        marginHorizontal: 3,
        borderRadius: 3,
    },
    imgCard: {
        width: 120,
        height: 130,
        borderRadius: 3,
    },
    footer: {
        width: '100%',
        height: 62,
        backgroundColor: 'rgba(46, 134, 222,0.5)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 35,
    },
    titleFooter: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        width: '100%',
        height: 59,
        color: '#fff',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(46, 134, 222,0.5)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
