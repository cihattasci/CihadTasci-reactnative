import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

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
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 25,
    right: 30,
    bottom: 30,
    position: 'absolute',
    zIndex: 999,
  },
  text: {
    fontSize: 40,
    color: '#000',
    textAlign: 'center',
  },
});
