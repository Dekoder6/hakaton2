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

export default Home = ({ navigation }) => {
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

                        <Text style={[styles.title, { color: 'red' }]}>Победители любейшЕГО хакатона</Text>
                    </View>
                    {/* <Image
                        source={require('../../assets/icons/serach.png')}
                        style={[styles.iconHeader, { marginRight: 15 }]}
                    /> */}
                </View>
                {/* **************************END HEADER************************************** */}
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.content}>
                        <View style={styles.contentDetails}>
                            <Text style={styles.titleTask}>Головна сторінка:</Text>
                            <Text style={styles.taskBody}><Text style={styles.bodyBody}>Славутич </Text> — одне з наймолодших міст в Україні. Рішення про його будівництво, як нового міста для постійного проживання працівників Чорнобильської АЕС і членів їхніх родин, було прийнято 2 жовтня 1986 року директивними органами СРСР, вже після аварії на ЧАЕС. І у вересні — грудні того ж року було здійснене проектування міста, а в грудні почалося будівництво міста.</Text>
                            <Text style={styles.titleTask}>IT компанії міста:</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('infoFORnoob')}>
                                <Text style={styles.taskBody}><Text style={[styles.bodyBody, { color: 'green' }]}>Taurus Quadra:</Text></Text>
                                <Text style={styles.taskBody}>про компанію:</Text>
                                <Text style={styles.taskBody1}>Taurus Quadra - компанія з розробки програмного забезпечення, орієнтована на планування, розробку, впровадження та міграцію SharePoint/Microsoft365. Маючи понад 25 проектів на основі SharePoint в США, Європі та Україні, Taurus Quadra має досвід, досвід та можливості інтеграції для побудови, розширення, інтеграції або впровадження корпоративних порталів, бізнес-додатків та розробки мобільних додатків (Android, IOS, Windows)</Text>
                            </TouchableOpacity>
                            <Text style={styles.taskBody}><Text style={styles.bodyBody}>DDPro:</Text></Text>
                            <Text style={styles.taskBody}>про компанію:</Text>
                            <Text style={styles.taskBody1}>DDPro - команда розробників та вчених, об'єднаних єдиною метою на протязі більше ніж 5 років, а саме вирішенням задач, що виникають в різних областях IT. </Text>
                            {/* <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                            <Text style={styles.titleDetailsSetting}>details</Text>
                            <Text style={[styles.titleDetailsSetting, { marginLeft: 20 }]}>  setting     </Text>
                        </View> */}
                        </View>
                    </View>
                    {/* <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 20 }}>
                    <View style={styles.horizontalCard}>
                        <Image
                            source={require('../../assets/image/img1.jpg')}
                            style={styles.imgCard}
                        />
                    </View>
                    <View style={styles.horizontalCard}>
                        <Image
                            source={require('../../assets/image/img2.png')}
                            style={styles.imgCard}
                        />
                    </View>
                    <View style={styles.horizontalCard}>
                        <Image
                            source={require('../../assets/image/img3.jpg')}
                            style={styles.imgCard}
                        />
                    </View>
                    <View style={styles.horizontalCard}>
                        <Image
                            source={require('../../assets/image/img4.jpg')}
                            style={styles.imgCard}
                        />
                    </View>
                </ScrollView> */}

                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => { navigation.navigate('infoFORnoob') }} style={[styles.header, { justifyContent: 'center', }]}>
                <Text style={[styles.title, { color: 'green' }]}>  Далі     </Text>
            </TouchableOpacity>
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
        marginTop: 8,
    },
    taskBody1: {
        color: '#636e72',
        fontSize: 16,
        marginTop: 8,
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
