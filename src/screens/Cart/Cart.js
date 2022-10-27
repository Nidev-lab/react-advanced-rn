import React from 'react'
import { ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { Card } from '../../components/Card';

const Cart = () => {
  const { products } = useSelector((state) => state)
  const navigation = useNavigation();

  return (
    <ScrollView>
      { products.map(product => <Card {...product} key={product.id} /> ) }
      <Button onPress={() => navigation.goBack()}>Volver al home</Button>
    </ScrollView>
  )
};

export default Cart;
