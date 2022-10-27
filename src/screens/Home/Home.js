import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../../components/Card';
import { Title } from '../../components/Title';

const Home = () => {
	const [products, setProducts] = useState([])

  const getProduct = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()

    setProducts(data);
  };

  useEffect(() => {
    getProduct()
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Title title="React Avanzado" />
      { products.map(product => <Card {...product} key={product.id} /> ) }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  }
});

export default Home;
