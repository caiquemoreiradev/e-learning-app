import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import Courses from '../screens/Courses';
import XdPage from '../screens/XdPage';
import VideoPage from '../screens/VideoPage';
import Categories from '../screens/Categories';
import CoursesPage from '../screens/CoursesPage';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false
  }

const HomeStackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName='Home' screenOptions={screenOptionStyle}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Courses' component={Courses} />
        <Stack.Screen name='Categories' component={Categories} />
        <Stack.Screen name='XdPage' component={XdPage} />
        <Stack.Screen name='VideoPage' component={VideoPage} />
        <Stack.Screen name='CoursePage' component={CoursesPage} />
      </Stack.Navigator>
    )
  }

export default HomeStackNavigator;