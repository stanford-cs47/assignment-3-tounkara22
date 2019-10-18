/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React from 'react';
import { StyleSheet, View, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import {Styles} from './App/styles';
import APIRequest from './App/Config/APIRequest';

import News from './App/Components/News'
import Search from './App/Components/Search'
import colors from "./App/Themes/Colors";

let self = '';

export default class App extends React.Component {

  state = {
    loading: true,
    articles : [],
    searchText: '',
    category: ''
  };

  componentDidMount() {
    self = this;
    this.loadArticles();
  }

  async loadArticles(searchTerm = '', category = '') {
    this.setState({articles:[], loading: true});
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    this.setState({loading: false, articles: resultArticles})
  }

  filterArticles(searchString) {
    self.loadArticles(searchString);
  }

  render() {
    const {articles, loading} = this.state;

    return (
        <SafeAreaView style={styles.container}>
          <View style={Styles.logoContainer}>
            <Image style={Styles.logo} source={require('./App/Images/nyt.png')} resizeMode={'center'}/>
          </View>
          <Search filterSearch={this.filterArticles}/>
          { loading ? <ActivityIndicator style={{flex: 1}} size={'large'} color={colors.fire}/> : <News articles={articles}/>}
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: '5%',
    marginRight: '5%',
  }
});
