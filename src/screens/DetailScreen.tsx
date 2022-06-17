import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

export default function DetailScreen({route}: any) {
  return (
    <View style={styles.main}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: route.params.product.avatar}}
          style={styles.image}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.middle} />
      <View style={styles.bottomContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{route.params.product.name}</Text>
          <Text style={styles.price}>${route.params.product.price}</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.description}>
            {route.params.product.description}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 4,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C8C8C8',
  },
  image: {
    width,
    height: height * 0.3,
  },
  middle: {
    flex: 1,
  },
  bottomContainer: {
    flex: 4,
    width,
    backgroundColor: '#000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 23,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: -25,
    },
  },
  titleContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    paddingHorizontal: 20,
    color: '#fff',
    fontWeight: '300',
  },
});
