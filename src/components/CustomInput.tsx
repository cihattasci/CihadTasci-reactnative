import {View, StyleSheet, TextInput, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

export default function CustomInput(props: any) {
  return (
    <View style={styles.main}>
      <TextInput
        placeholder={props?.placeholder}
        style={[
          styles.input,
          {height: props?.size === 'small' ? height * 0.05 : height * 0.1},
        ]}
        autoCorrect={false}
        value={props?.value}
        onChangeText={props?.onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  input: {
    width: width * 0.95,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingLeft: 5,
    marginTop: 15,
  },
});
