import React from 'react';
import { View, Text, ImageBackground, ScrollView, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
import CoursesList from '../../components/CoursesList';


export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={require('../../images/cat.png')}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <ScrollView>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingTop: 15
          }}
        >
          <TouchableOpacity>
            <Image
              source={{ uri: 'https://avatars0.githubusercontent.com/u/56305107?s=460&u=2240a7b9b5e8499f64fb1607b42c00f0af10096a&v=4' }}
              style={{ height: 40, width: 40, borderRadius: 20 }}
            />
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 8,
              paddingVertical: 10,
              borderRadius: 10,
              marginTop: 30,
            }}
          >
            <TouchableOpacity>
              <Feather name="menu" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            paddingHorizontal: 20,
            fontSize: 35,
            paddingTop: 40,
            fontFamily: 'Bold',
            color: '#fff'
          }}
        >
          Bem vindo de volta Caique
          </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 12,
            marginHorizontal: 20,
            marginTop: 20
          }}
        >
          <TextInput
            placeholder='Pesquisar uma nova habilidade...'
            placeholderTextColor='#345c74'
            style={{
              fontFamily: 'Bold',
              fontSize: 12,
              width: 280,
              paddingHorizontal: 12
            }}
          />
          <Feather name="search" size={24} color="#345c74" />
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff2f2',
            marginTop: 15,
            marginHorizontal: 20,
            borderRadius: 20,
            paddingVertical: 30,
            paddingLeft: 30
          }}
        >
          <View>
            <Text
              style={{
                color: '#345c74',
                fontSize: 18,
                fontFamily: 'Bold',
                paddingRight: 100
              }}
            >
              Comece a aprender agora mesmo
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Categories')}
              style={{
                flexDirection: 'row',
                backgroundColor: '#5ba3cb',
                alignItems: 'center',
                marginTop: 20,
                width: 150,
                paddingVertical: 10,
                borderRadius: 14,
                paddingHorizontal: 10,
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Bold',
                  fontSize: 12
                }}
              >
                Categorias
              </Text>
              <Feather name="arrow-right" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <Image
            source={require('../../images/tech-woman.png')}
            style={{ marginLeft: -130, marginTop: -5, width: 130, height: 130 }}
          />
        </View>

        <Text
          style={{
            color: '#fff',
            fontFamily: 'Bold',
            fontSize: 20,
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom: 10
          }}
        >
          Cursos em progresso
          </Text>

        <CoursesList />
      </ScrollView>
    </ImageBackground>
  )
};

