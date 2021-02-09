import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function Categories({ navigation, route }) {

  const [categories, setCategories] = useState([
    {
      title: 'UX/UI',
      img: 'https://cdn0.iconfinder.com/data/icons/elpis/144/Web_Design-512.png'
    },
    {
      title: 'Frontend',
      img: 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/02/119.png'
    },
    {
      title: 'Backend',
      img: 'https://cdn1.iconfinder.com/data/icons/data-science-flat-1/64/programming-developer-backend-laptop-algorithm-256.png'
    },
    {
      title: 'Infraestrutura',
      img: 'https://cdn2.iconfinder.com/data/icons/whcompare-isometric-web-hosting-servers/50/connected-globe-256.png'
    },
    {
      title: 'Games',
      img: 'https://image.flaticon.com/icons/png/512/361/361993.png'
    },
    {
      title: 'Data Science',
      img: 'https://cdn.iconscout.com/icon/free/png-512/data-science-46-1170621.png'
    },
    {
      title: 'Mobile',
      img: 'https://lithiosapps.com/wp-content/uploads/2019/01/icon-mobile.png'
    },
    {
      title: 'Gestão Digital',
      img: 'https://alanmorgangroup.com/wp-content/uploads/2019/02/home-banner-top.png'
    }
  ])

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
            onPress={() => navigation.navigate('Home')}
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
            <Feather name="settings" size={26} color="#fff" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={categories}
          keyExtractor={item => item.title}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('CoursePage', {
                  categoryName: item.title,
                  categoryImage: item.img
                })}
                style={{
                  backgroundColor: '#fff2f2',
                  height: 200,
                  width: 150,
                  marginTop: 10,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 10,
                  flexGrow: 20
                }}
              >
                <Image
                  source={{ uri: item.img }}
                  style={{
                    height: 40,
                    width: 40,
                  }}
                />
                <Text
                  style={{
                    color: '#345c74',
                    fontSize: 20,
                    fontFamily: 'Bold',
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

      <View style={{ height: 5 }} />
    </ImageBackground>
  )
};

