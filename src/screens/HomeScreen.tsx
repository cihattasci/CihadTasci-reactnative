import {View, Text} from 'react-native';
import React from 'react';
import ActionButton from '../components/ActionButton';

export default function HomeScreen({navigation}: any) {
  return (
    <View style={{flex: 1}}>
      <Text>HomeScreen</Text>
      <ActionButton navigation={navigation} />
    </View>
  );
}
