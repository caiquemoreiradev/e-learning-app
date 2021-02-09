import React, { useState } from 'react';
import Courses from '../../screens/Courses';
import { View } from 'react-native';

export default function CoursesList() {

        const [ courses, setCourses ] = useState([
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
        
        return (
            <>
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

                <View style={{ height: 10}} />
            </>
        )
    }
