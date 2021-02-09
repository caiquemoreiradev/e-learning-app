import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { Entypo } from '@expo/vector-icons';

export default class Courses extends React.Component {
  render() {

    const { img, title, onPress, percent, horas, licoes } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff2f2',
          padding: 20,
          marginHorizontal: 20,
          borderRadius: 20,
          alignItems: 'center',
          marginTop: 10
        }}
      >
        <Image
          style={{
            width: 40,
            height: 40
          }}
          source={{ uri: img }}
        />

        <View>
          <Text
            style={{
              color: '#345c74',
              fontFamily: 'Bold',
              fontSize: 13,
              paddingHorizontal: 20,
              width: 170,
            }}
            numberOfLines={3}
          >
            {title}
          </Text>

          <Text
            style={{
              color: '#5494b4',
              fontFamily: 'Medium',
              fontSize: 12,
              paddingHorizontal: 20,
            }}
          >
            {horas} horas, {licoes} lições
          </Text>
        </View>

        <Text
          style={{
            color: '#345c74',
            fontFamily: 'Medium',
            fontSize: 13,
            paddingLeft: 10,
            paddingRight: 10
          }}
        >
          {percent}%
        </Text>

        <ProgressCircle
          percent={percent}
          radius={17}
          borderWidth={1.5}
          color='#5ba3cb'
          shadowColor='#fff'
          bgColor='#fff'
        >
          <Entypo name="controller-play" size={24} color="#5ba3cb" />
        </ProgressCircle>
      </TouchableOpacity>
    )
  };
}
