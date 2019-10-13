/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking } from 'react-native'
import { material } from 'react-native-typography' //consider using this!
import { Metrics, Colors } from '../Themes'
import {NewsContent} from "./NewsContent";

export default class News extends Component {
  static defaultProps = { articles: [] }

  static propTypes = {
    articles: PropTypes.array
  };

  constructor() {
    super();
    this.getArticles = this.getArticles.bind(this);
  }

  //you can change the props above to whatever you want/need.

  getArticles() {
    return this.props.articles;
  }

  render () {
    // const {articles} = this.props;

    return (
        <View style={styles.container}>
          <FlatList data={this.getArticles()}
                    renderItem={({item}) => <NewsContent news={item}/>}
                    keyExtractor={item => item.date + item.byline}/>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    // borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
