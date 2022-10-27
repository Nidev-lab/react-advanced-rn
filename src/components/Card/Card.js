import React from 'react';
import { StyleSheet } from 'react-native'; 
import { Button, Card, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../app/productSlice';

const RNCard = ({ title, image, id, species, price, description }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation()

  const onGointTo = () => {
    dispatch(addProduct({title, image, id, species, price, description}))
		// navigation.navigate('Cart')
	};

  return (
    <Card style={styles.card}>
      <Card.Title title={title} subtitle={description} />
      <Card.Cover source={{ uri: image }} />
      <Card.Content>
        <Paragraph style={styles.price}>Precio: ${price}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={onGointTo}>Agregar al carrito</Button>
        <Button onPress={() => navigation.navigate('Product detail')}>Comprar</Button>
      </Card.Actions>
    </Card>
  )
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 25,
  },
  price: {
    marginTop: 15
  }
})

export default RNCard;
