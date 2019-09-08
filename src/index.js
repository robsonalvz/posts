import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Post from './components/Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Robson Alves',
        descricao:
          'is simply dummy text of the printing and typesetting industry',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Robson Alves',
        descricao:
          'is simply dummy text of the printing and typesetting industry',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Robson Alves',
        descricao:
          'is simply dummy text of the printing and typesetting industry',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Robson Alves',
        descricao:
          'is simply dummy text of the printing and typesetting industry',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Robson Alves',
        descricao:
          'is simply dummy text of the printing and typesetting industry',
      },
    ],
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: 'red',
  },
});
