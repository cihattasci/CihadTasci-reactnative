import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

export default function Spinner() {
  return (
    <View style={styles.main}>
      <ActivityIndicator color={'#000'} size={'large'} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
