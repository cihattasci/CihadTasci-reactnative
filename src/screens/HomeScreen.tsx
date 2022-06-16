import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import ActionButton from '../components/ActionButton';
import ProductItem from '../components/ProductItem';

import {fetchCategory} from '../store/actions/categoryTypes';
import {fetchProducts} from '../store/actions/productActions';

import {useDispatch, useSelector} from 'react-redux';

import {Category, Product} from '../data/interfaces';

export default function HomeScreen({navigation}: any) {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state?.categoryReducer);
  const products = useSelector((state: any) => state?.getProductReducer);

  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchCategory(dispatch);
    fetchProducts(dispatch);
  }, []);

  const setCategory = (category: Category) => {
    if (+category?.id !== selectedCategory) {
      const filteredProducts = products?.filter(
        (product: Product) => product?.category === category?.name,
      );
      setSelectedProducts(filteredProducts);
      setSelectedCategory(+category?.id);
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.tabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories?.map((category: Category) => {
            return (
              <TouchableOpacity
                key={`category_item_${category?.id}`}
                onPress={() => setCategory(category)}>
                <View
                  style={[
                    styles.tabElementContainer,
                    {
                      backgroundColor:
                        selectedCategory === +category?.id ? '#fff' : '#000',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.tabText,
                      {
                        color:
                          selectedCategory !== +category?.id ? '#fff' : '#000',
                        padding: selectedCategory !== +category?.id ? 12 : 15,
                        fontSize: selectedCategory !== +category?.id ? 13 : 15,
                      },
                    ]}>
                    {category.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.listContainer}>
        {selectedProducts?.map((product: Product) => {
          // return <ProductItem product={product} />;
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Detail', {
                  product: product,
                })
              }
              key={`product_item_${product?.id}`}>
              <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{uri: product?.avatar}}
                    style={styles.image}
                    resizeMode={'contain'}
                  />
                </View>
                <View style={styles.bottomContainer}>
                  <View style={styles.nameContainer}>
                    <Text style={styles.text}>{product?.name}</Text>
                  </View>
                  <View style={styles.descriptionContainer}>
                    <Text style={styles.text}>${product?.price}</Text>
                    <Text style={styles.text}>{product?.id}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <ActionButton navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#C8C8C8',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingLeft: 12,
    paddingVertical: 12,
  },
  tabElementContainer: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginRight: 12,
  },
  tabText: {
    color: 'red',
    fontWeight: 'bold',
  },
  listContainer: {
    flexWrap: 'wrap',
    padding: 20,
  },

  itemContainer: {
    height: 250,
    width: 150,
    borderRadius: 15,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    margin: 13,
  },
  imageContainer: {
    flex: 5,
    alignSelf: 'center',
  },
  image: {
    width: 130,
    height: 200,
  },
  bottomContainer: {
    flex: 1.3,
    backgroundColor: '#000',
    borderRadius: 15,
    justifyContent: 'space-between',
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
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
