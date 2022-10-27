import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Title = ({ title }) => {
  return (
    <Text style={styles.text}>{title}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 20,
  }
})

export default Title
