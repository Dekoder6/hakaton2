import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Picker
} from 'react-native';

import { sHeight, sWidth } from '../helpers/screenSize';





export default WantToTQ = ({ navigation }) => {
    const [office, setOffice] = useState("1");
    const [vokansii, setVokansii] = useState("Front-end");
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

                        <Text style={styles.title}>Хочеш до нас?</Text>
                    </View>
                </View>
                {/* **************************END HEADER************************************** */}
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.content}>
                        <View style={styles.contentDetails}>
                            <Text style={styles.titleTask}>Хочеш до нас?</Text>
                            <Text style={styles.taskBody}>Вибір компанії:</Text>
                            <View style={styles.container1}>
                                <Picker
                                    selectedValue={office}
                                    onValueChange={(itemValue, itemIndex) => setOffice(itemValue)}
                                    style={styles.pickerbox}
                                    mode="dropdown"
                                >
                                    <Picker.Item label="Taurus Quadra" value="1" />
                                    <Picker.Item label="DDRPro" value="2" />
                                </Picker>
                            </View>
                            <Text style={styles.taskBody}>Вакансії:</Text>
                            <View style={styles.container1}>
                                <Picker
                                    selectedValue={vokansii}
                                    onValueChange={(itemValue, itemIndex) => setVokansii(itemValue)}
                                    style={styles.pickerbox}
                                    mode="dropdown"
                                >
                                    <Picker.Item label="SEO" value="SEO" />
                                    <Picker.Item label="QA" value="QA" />
                                    <Picker.Item label="Design" value="Design" />
                                    <Picker.Item label="Front-end" value="Front-end" />
                                    <Picker.Item label="Back-end" value="Back-end" />
                                    <Picker.Item label="GameDev" value="GameDev" />
                                    <Picker.Item label="MobileDev" value="MobileDev" />
                                    <Picker.Item label="SysOps" value="SysOps" />
                                    <Picker.Item label="DevOps" value="DevOps" />
                                </Picker>
                            </View>

                            <Text style={styles.taskBody}>Стек технологій:</Text>
                            <View style={styles.container1}>
                                {vokansii == 'SEO' ?
                                    <Text style={styles.taskBody}>CRM та бажання продавати </Text>
                                    : vokansii == 'QA' ?
                                        <Text style={styles.taskBody}>JMETR or щось для тестування</Text>
                                        : vokansii == 'Design' ?
                                            <Text style={styles.taskBody}>
                                                Вузькоспеціалізовані фахівці: графічний дизайн, ілюстрація, відео, Моушн-дизайн, анімація, іконографіка, типографіка, 3D.
                                                Документація дизайну.
                                                Системи масштабування проектів, керівництво правил по використанню UI елементів.
                                            </Text>
                                            : vokansii == 'Front-end' ?
                                                <Text style={styles.taskBody}>
                                                    Розробляємо SPA, використовуючи бібліотеки React, Vue, Angular. Взаємодіємо з сервером через класичний REST API або GrahpQL.
                                                    Верстаємо макети з використанням технологій HTML, CSS, JS, TS:
                                                    принципи БЕМ і поділ інтерфейсу на компоненти;
                                                    css анімації і js інтерактив;
                                                    адаптивність;
                                                    кроссбраузерность;
                                                    семантика і валідність html розмітки;
                                                    доступність для людей з обмеженими можливостями;
                                                    використання мікро-розмітки opengraph і schema.org;
                                                    ui kits для швидкої розробки прототипів.
                                                    Налаштовуємо збірку frontend:
                                                    автоматизація завдань з Gulp;
                                                    використання пре / пост-процесорів LESS, SASS, PostCSS;
                                                    настройка гнучкого, модульного JavaScript з Webpack, з можливістю писати на сучасному ES за допомогою Babel;
                                                    автоматична оптимізація графіки з побудовою системи іконок на PNG спрайт або SVG;
                                                    автоматична перевірка стилю коду інструментами Stylelint і ESLint.
                                                    Оптимізуємо продуктивність проектів:
                                                    скорочення кількості запитів до сервера, шляхом правильного складання залежностей;
                                                    поступова завантаження не критичних компонентів сторінки;
                                                    управління відображенням вмісту в процесі завантаження сторінки;
                                                    правильне використання різних форматів графіки і її оптимізація.
                                                    Стандартизуючи процеси frontend розробки:
                                                    написання методологій розробки;
                                                    розробка бібліотеки використовуваних компонентів;
                                                    розробка стайлгайда для проекту.
                                                </Text>
                                                : vokansii == 'Back-end' ?
                                                    <Text style={styles.taskBody}>
                                                        Керуємося різними принципами розробки (KISS, DRY, SOLID, GRASP і інші базводри).
                                                        Мови PHP і Go (для високонавантажених проектів) із застосуванням патернів проектування.
                                                        Symfony, Laravel, Zend Framework для розробки і розвитку нових проектів.
                                                        Yii і Kohana для розвитку готових сторонніх і власних проектів.
                                                        Як реляційної бази даних використовуємо MySQL:
                                                        застосовується нормалізація, денормализация даних в залежності від вимог;
                                                        реплікації;
                                                        застосування індексів;
                                                        транзакції із зазначенням рівня ізоляції, блокування;
                                                        побудова складних запитів.
                                                        Як документарній бази даних використовуємо MongoDB. Застосовується в вузькоспеціалізованих випадках, наприклад для зберігання «потоку даних».
                                                        Системи контролю версій:
                                                        Основний інструмент - Git з моделлю розгалуження master, stable, develop, task.
                                                        GitLab, GitHub, Bitbucket.
                                                        Організація релевантного морфологічного пошуку:
                                                        Sphinx, Elasticsearch.
                                                        «Рідна» підтримка повнотекстового пошуку для MySQL, з частковим використанням алгоритму «Стеммер Портера».
                                                        Zend Search Lucene - для реалізації повнотекстового пошуку засобами PHP.
                                                        Інші технології:
                                                        менеджер пакетів і залежностей Composer;
                                                        для тестів використовується PHPUnit, Codeception;
                                                        CI Server - Jenkins, Gitlab;
                                                        аналізатори коду phpcpd, phpmd, а також phploc для фіксування метрик;
                                                        застосовується перевірка стандартів написання коду за допомогою phpcs;
                                                        Redis, Beanstalk - кешування і сервер черг;
                                                        Docker - розробка, розгортання на серверах.
                                                    </Text>
                                                    : vokansii == 'GameDev' ?
                                                        <Text style={styles.taskBody}>Unity, Git, C#</Text>
                                                        : vokansii == 'MobileDev' ?
                                                            <Text style={styles.taskBody}>JS, ReactJS, React-native, firebase, Kotlin, Swift</Text>
                                                            : vokansii == 'SysOps' ?
                                                                <Text style={styles.taskBody}>модель OSI, DNS, 1C</Text>

                                                                : vokansii == 'DevOps' ?
                                                                    <Text style={styles.taskBody}>O365. powershell, SP</Text>
                                                                    : null
                                }
                            </View>

                        </View>
                    </View>


                </View>
            </ScrollView>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.contentDetails}>
                    {console.log("vokansii ==>", vokansii)}
                    <Text style={styles.titleTask}>Знаєш такі стеки?</Text>
                </View>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={() => { navigation.navigate('profile') }} style={styles.buttonContainer}>
                    <Text style={[styles.title, { color: 'green', width: '50%' }]}>  Ні   </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => { navigation.navigate('questions', { vokansii: vokansii }) }}>
                    <Text style={[styles.title, { color: 'green', width: '50%' }]}> Да  </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container1: {
        borderColor: "gray",
        borderBottomWidth: 2,
        // borderStyle: "dashed",
        // borderRadius: 1,
    },
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
