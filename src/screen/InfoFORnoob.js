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

export default InfoFORnoob = ({ navigation }) => {
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

                        <Text style={styles.title}>Довідкова інформація для чайників</Text>
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
                            <Text style={styles.titleTask}>ІТ це:</Text>
                            <Text style={styles.taskBody}>      Це все, що пов’язано з обробкою, зберіганням і передачею даних. І сьогодні вони оточують нас у всіх сферах життя: записна книжка в вашому телефоні – це база даних, улюблений новинний сайт – це зверстаний програмний код, бортовий комп’ютер автомобіля – спеціальна обчислювальна система. Хочемо ми того чи ні, ІТ стали невід’ємною частиною сучасного життя і займуть значне місце в суспільстві майбутнього.</Text>
                            <Text style={styles.titleTask}>Розподіли ІТ розробки: </Text>
                            <Text style={styles.taskBody}>   <Text style={styles.bodyBody}> Front-End розробка </Text>-   Це розробка інтерфейсу взаємодії між користувачем і основною програмно-апаратною частиною веб-додатку.</Text>
                            {/* <Text style={styles.taskBody1}>Мова розмітки HyperText або HTML — це ключовий структурний компонент усіх веб-сайтів в Інтернеті. Без цього веб-сторінки не можуть існувати. Кожен сайт, який відвідуєте, побудований за допомогою HTML, ця мова визначає всю структуру та зміст сторінки. Щоби Ви уявили собі краще — це скелет сайту, кісточки. HTML5 — поточна ітерація HTML в Інтернеті, хоча сайти, побудовані за допомогою старих версій, все ще працюють у сучасних браузерах.</Text>
                            <Text style={styles.taskBody1}> CSS (каскадні таблиці стилів) керує тим, як HTML виглядає на сторінці. CSS встановлює кольори, шрифти, фонові зображення та навіть спосіб розгортання сторінки (Ви можете використовувати CSS для власного упорядкування елементів HTML на сторінці, навіть якщо воно відрізняється від порядку, за яким ці елементи розташовані в HTML файлі). CSS3 — це остання версія, що надає безліч функцій (можливість додавати інтерактивні елементи та анімації).</Text>
                            <Text style={styles.taskBody1}>Простий веб-сайт можна створити лише засобами HTML та CSS. Для чого ж потрібен  JavaScript?

                            На  базовому рівні JS дозволяє додавати на Ваш веб-сайт багато інтерактивних елементів. Використовуйте його для створення таких об’єктів, як карти, які оновлюються в режимі реального часу, інтерактивні анімації чи онлайн-ігри, таймери, шляхом підвантаженням API тощо. Різноманітні візуальні ефекти, випадаючі вікна, перевірка форм, обробка багатьох дій користувача, управління стилями і багато іншого — все це  JavaScript.

                            Наприклад, всі ми знаємо сайти типу Pinterest чи соціальних мереж, де дані, які Ви вводите в пошукову строку або новини у Вашій стрічці, оновлюються динамічно, без перезавантаження сторінки. Все це можливо завдяки окремій технології AJAX, що являє собою ніщо інше як асинхронний JavaScript. І саме він зробив JavaScript настільки популярною.

                            Наскільки популярною? JavaScript найпоширеніша мова програмування у світі! Тому незалежно від Ваших планів розвитку кар’єри у айті, будь-де де бажаєте (Codeacademy, codeshcool, CodeCamp чи ін. навчальних он-лайн сервісах) базовий курс просто необхідно пройти!

                            Згадуючи про  JS в контексті фронтенду не можна оминути найпопулярнішу бібліотеку — jQuery. Вона дозволяє набагато простіше переміщатися HTML елементами, управляти анімацією, обробляти події, працювати з Ajax запитами і т.д.

                            Варто також знати, що фронтенд частина працює на клієнті, тобто локальному комп’ютері користувача, а саме в його веб-браузері.

Нещодавно лише кілька років тому, JS вийшов на рівень серверної мови програмування у якості Node.js. Зростання популярності у цьому напрямі теж відбулося МЕГА стрімко.</Text> */}
                            <Text style={styles.taskBody}>   <Text style={styles.bodyBody}>Бекенд</Text> — це те, що відбувається “за лаштунками”, тобто на серверній стороні веб-додатку. Фронтенд і бекенд можна уявити… як величезний айсберг. Все, що бачить користувач — лише його верхівка, зовнішня оболонка сайту, тобто  фронтент. Натомість найважливіший і наймасивніший елемент цього айсбергу, а саме бекенд, кінцевому користувачеві зорово недоступний, але при цьому він забезпечує функціонування усього сайту.

                            Бекенд працює на сервері, тому часто його ще називають серверною частиною/стороною.

На відміну від фронт-розробки (яка в першу чергу використовує HTML, CSS і JavaScript), у бекенді може використовуватися більш широкий спектр мов та інструментів.</Text>
                            <Text style={styles.taskBody}>Однак, щоб великі веб-сайти та веб-додатки працювали, необхідно десь зберігати усю інформацію, що ними використується. Для вирішення цього завдання слугують —  <Text style={styles.bodyBody}>бази даних.</Text></Text>
                            <Text style={styles.taskBody}>  <Text style={styles.bodyBody}>Мобільний додаток</Text> - це програма, спеціально розроблена під конкретну мобільну платформу (iOS, Android, Windows Phone). Додатки можуть створюватися для внутрішніх потреб компанії або ж для маркетингу, брендингу та збільшення продажів.</Text>
                            <Text style={styles.taskBody}>  <Text style={styles.bodyBody}>Мобільна версія сайту</Text> - це варіант сайту, спеціально розроблений для перегляду з мобільних пристроїв (смартфонів та планшетів). Мобільна версія сайту вміщує лише найсуттєвіші розділи та надає користувачу найважливіші можливості. Вона є таким собі скороченим варіантом звичайного сайту і не містить нічого зайвого</Text>
                            <Text style={styles.taskBody}> Программа для настільного комп’ютера призначена для використання на вашому робочому столі або як <Text style={styles.bodyBody}>Десктоп-програма.</Text> Десктоп-програми зручні для користувачів настільних комп’ютерів, такі програми зазвичай інтегровані з різними офісним та іншими настільним ПЗ.</Text>
                            <Text style={styles.taskBody}> і ще безліч направлень в ІТ сфері</Text>
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
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={() => { navigation.navigate('wantToTQ') }} style={styles.buttonContainer}>
                    <Text style={[styles.title, { color: 'green' }]}>  Далі     </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        backgroundColor: 'rgba(46, 134, 222,0.5)',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: '100%',
        height: 45,
        backgroundColor: 'rgba(46, 134, 222,0.5)',
        flexDirection: 'row',
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
