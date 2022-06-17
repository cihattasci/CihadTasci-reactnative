import {Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

export default function ActionButton({navigation}: any) {
  return (
    <TouchableOpacity
      style={styles.actionButtonContainer}
      onPress={() => navigation.navigate('Create')}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  actionButtonContainer: {
    width: width * 0.12,
    height: width * 0.12,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: width * 0.06,
    right: 30,
    bottom: 30,
    position: 'absolute',
    zIndex: 999,
  },
  text: {
    fontSize: 35,
    color: '#000',
    textAlign: 'center',
  },
});
