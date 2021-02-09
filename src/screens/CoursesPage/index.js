import React, { useState } from 'react';
import { View, ImageBackground, ScrollView, Text, TouchableOpacity, Image } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import Courses from '../Courses';

export default function CoursesPage({ navigation, route }) {

    const [courses, setCourses] = useState([
        {
            title: 'Sketch: Design visual de um site mobile',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/850px-Sketch_Logo.svg.png',
            percent: 15,
            hours: 10,
            lessons: 25
        },
        {
            title: 'React: Entendendo como a biblioteca funciona',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
            percent: 20,
            hours: 5,
            lessons: 10
        },
        {
            title: 'JavaScript: primeiros passos com a linguagem',
            img: 'https://pcodinomebzero.neocities.org/Imagens/javascript1.png',
            percent: 50,
            hours: 40,
            lessons: 60
        },
        {
            title: 'Godot: Crie um jogo de RPG em 2D',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Godot_icon.svg/1024px-Godot_icon.svg.png',
            percent: 30,
            hours: 10,
            lessons: 20
        },
    ]);

    const { categoryName, categoryImage } = route.params;

    return (
        <ImageBackground
            source={require('../../images/cat.png')}
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    paddingHorizontal: 20,
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Categories')}
                    style={{
                        paddingHorizontal: 10,
                        paddingVertical: 13,
                        borderRadius: 10,
                        marginTop: 30,
                    }}
                >
                    <Feather name="arrow-left" size={26} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        paddingHorizontal: 10,
                        paddingVertical: 13,
                        borderRadius: 10,
                        marginTop: 30,
                    }}
                >
                    <Feather name="menu" size={26} color="#fff" />
                </TouchableOpacity>
            </View>

            <View
            style={{
                flexDirection: 'row'
            }}
            >
                <Image
                source={{ uri: categoryImage }}
                style={{ width: 200, height: 200, opacity: 0.3 }}
                />
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 35,
                        fontFamily: 'Bold',
                        width: 270,
                        alignSelf: 'center',
                        textAlign: 'center',
                        marginTop: 34,
                        marginLeft: -120
                    }}
                >
                    {categoryName}
                </Text>
            </View>


            <Modalize
                handleStyle={{
                    marginTop: 30,
                    backgroundColor: '#e9e9e9',
                    width: 80
                }}
                modalStyle={{
                    borderTopLeftRadius: 60,
                    borderTopRightRadius: 60
                }}
                alwaysOpen={500}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
            >
                {courses.map(course => (
                    <Courses
                        key={course.title}
                        title={course.title}
                        img={course.img}
                        percent={course.percent}
                        horas={course.hours}
                        licoes={course.lessons}
                    />
                ))}
            </Modalize>
        </ImageBackground>
    )
};