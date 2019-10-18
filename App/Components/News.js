/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types' //consider using this!;
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, TouchableOpacity } from 'react-native';
import {NewsContent} from "./NewsContent";

import { SwipeListView } from 'react-native-swipe-list-view';


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
    return (
        <View style={styles.container}>
          <FlatList data={this.getArticles()}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => {
                          Linking.canOpenURL(item.url).then(supported => {
                            if (supported) {
                              Linking.openURL(item.url);
                            } else {
                              alert('could not open link: ' + item.url + ', with the browser');
                            }
                          })
                        }}>
                          <NewsContent news={item} />
                        </TouchableOpacity>
                    )}
                    style={{padding: 5}}
                    keyExtractor={item => item.date + item.byline}/>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
