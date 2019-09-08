import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Post = ({data}) => (
  <View style={styles.post}>
    <Text style={styles.titulo}>{data.titulo}</Text>
    <Text style={styles.autor}>{data.autor}</Text>
    <Text style={styles.descricao}>{data.descricao}</Text>
  </View>
);

export default Post;

const styles = StyleSheet.create({
  post: {
    backgroundColor: 'white',
    padding: 30,
    margin: 10,
    borderRadius: 10,
  },
  titulo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  autor: {
    fontSize: 10,
    color: 'grey',
  },
  descricao: {
    paddingTop: 20,
  },
});
