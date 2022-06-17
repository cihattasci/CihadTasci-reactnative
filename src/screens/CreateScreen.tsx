import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import React, {useState, useEffect} from 'react';
import CustomInput from '../components/CustomInput';

import {fetchCategory} from '../store/actions/categoryTypes';
import {uploadProduct} from '../store/actions/productActions';

import {useDispatch, useSelector} from 'react-redux';

import {Category, Product} from '../data/interfaces';
import Spinner from '../components/Spinner';

const {width} = Dimensions.get('window');

export default function CreateScreen() {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state?.categoryReducer);
  const loading = useSelector((state: any) => state?.pendingReducer);

  const initialState = {
    id: '',
    name: '',
    price: '',
    category: '',
    description: '',
    avatar: '',
    developerEmail: '',
    createdAt: '',
  };

  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [link, setLink] = useState<string>('');

  const [selectedCategory, setSelectedCategory] =
    useState<Category>(initialState);

  useEffect(() => {
    fetchCategory(dispatch);
  }, []);

  const setCategory = (category: Category) => {
    if (category?.id !== selectedCategory?.id) {
      setSelectedCategory(category);
    }
  };

  let uploadProductData = {
    id: '324324',
    name: title,
    price: price,
    category: selectedCategory?.name,
    description,
    avatar: link,
    developerEmail: 'cihattasci@upayment.com',
    createdAt: '1655405804',
  };

  const addProduct = (product: Product) => {
    if (!title || !price || !selectedCategory?.name || !link) {
      return Alert.alert('Error', 'Please fill all blanks correctly');
    } else {
      uploadProduct(dispatch, product);
      setTitle('');
      setPrice(0);
      setDescription('');
      setLink('');
      Alert.alert('Success', 'Uploaded the product successfully :)');
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <View style={styles.main}>
      <View style={styles.textContainer}>
        <CustomInput
          size={'small'}
          placeholder={'Product Title'}
          value={title}
          onChange={setTitle}
        />
        <CustomInput
          size={'large'}
          placeholder={'Price'}
          value={price}
          onChange={setPrice}
        />
        <CustomInput
          size={'small'}
          placeholder={'Description'}
          value={description}
          onChange={setDescription}
        />
        <CustomInput
          size={'small'}
          placeholder={'Image Link'}
          value={link}
          onChange={setLink}
        />
      </View>
      <Text style={styles.selectedText}>
        Selected Category: {selectedCategory?.name}
      </Text>
      <ScrollView
        style={styles.selectedText}
        horizontal
        showsHorizontalScrollIndicator={false}>
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
                        selectedCategory?.id !== category?.id ? '#fff' : '#000',
                    },
                  ]}>
                  {category.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => addProduct(uploadProductData)}>
          <View style={styles.buttonContainer}>
            <Text style={styles.text}>Add Product</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 2,
    justifyContent: 'space-evenly',
  },
  main: {
    flex: 1,
  },
  selectedText: {
    margin: width * 0.025,
  },
  tabElementContainer: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 16,
    marginRight: 12,
  },
  tabText: {
    color: 'red',
    fontWeight: 'bold',
    padding: 12,
    fontSize: 13,
  },
  bottomContainer: {
    flex: 1,
    bottom: 30,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    padding: 15,
  },
});
