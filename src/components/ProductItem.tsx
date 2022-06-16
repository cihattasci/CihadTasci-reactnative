import {View, Text} from 'react-native';
import React from 'react';

import {Product} from '../data/interfaces';

export default function ProductItem(product: Product) {
  return (
    <View key={`product_item_${product?.id}`}>
      <Text>{product?.name}</Text>
    </View>
  );
}
