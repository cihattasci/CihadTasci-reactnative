import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import ActionButton from '../components/ActionButton';
import ProductItem from '../components/ProductItem';

import {fetchCategory} from '../store/actions/categoryTypes';
import {fetchProducts} from '../store/actions/productActions';

import {useDispatch, useSelector} from 'react-redux';

import {Category, Product} from '../data/interfaces';
import Spinner from '../components/Spinner';

export default function HomeScreen({navigation}: any) {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state?.categoryReducer);
  const products = useSelector((state: any) => state?.getProductReducer);
  const loading = useSelector((state: any) => state?.pendingReducer);

  const initialState = {
    id: '1',
    name: 'Electronic',
    price: '',
    category: '',
    description: '',
    avatar: '',
    developerEmail: '',
    createdAt: '',
  };

  const [selectedCategory, setSelectedCategory] =
    useState<Category>(initialState);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchCategory(dispatch);
    fetchProducts(dispatch);
  }, []);

  useEffect(() => {
    const filteredProducts = products?.filter(
      (product: Product) => product?.category === selectedCategory?.name,
    );
    setSelectedProducts(filteredProducts);
  }, [products]);

  const setCategory = (category: Category) => {
    if (category?.id !== selectedCategory?.id) {
      const filteredProducts = products?.filter(
        (product: Product) => product?.category === category?.name,
      );
      setSelectedProducts(filteredProducts);
      setSelectedCategory(category);
    }
  };

  if (loading) {
    return <Spinner />;
  }

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
                        selectedCategory?.id === category?.id ? '#fff' : '#000',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.tabText,
                      {
                        color:
                          selectedCategory?.id !== category?.id
                            ? '#fff'
                            : '#000',
                        padding:
                          selectedCategory?.id !== category?.id ? 12 : 15,
                        fontSize:
                          selectedCategory?.id !== category?.id ? 13 : 15,
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listContainer}>
          {selectedProducts?.map((product: Product) => {
            return (
              <View key={`product_item_${product?.id}`}>
                <ProductItem product={product} navigation={navigation} />
              </View>
            );
          })}
        </View>
      </ScrollView>

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
    padding: 19,
    flexDirection: 'row',
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
