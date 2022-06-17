import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

export default function ProductItem(props: any) {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('Detail', {
          product: props.product,
        })
      }>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: props.product?.avatar}}
            style={styles.image}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.text}>{props.product?.name}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.text}>${props.product?.price}</Text>
            <Image
              source={require('../assets/pencil.png')}
              style={styles.penImage}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: height * 0.25,
    width: width * 0.38,
    borderRadius: 15,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    margin: 13,
  },
  imageContainer: {
    flex: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  image: {
    height: height * 0.21,
    width: width * 0.21,
  },
  penImage: {
    height: height * 0.015,
    width: width * 0.04,
    marginBottom: 5,
  },
  bottomContainer: {
    flex: 1.5,
    backgroundColor: '#000',
    borderRadius: 15,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: -15,
    },
  },
  text: {
    color: '#fff',
    fontSize: 11,
  },
  nameContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  descriptionContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
