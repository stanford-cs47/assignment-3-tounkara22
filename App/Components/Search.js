/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react';
// import PropTypes from 'prop-types'; //consider using this!
import { View, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes';
import {Styles} from '../styles';


export default class Search extends Component {

  constructor() {
    super();
    this.state = {text: ''};
    this.searchNews = this.searchNews.bind(this);
  }

  searchNews() {
      Keyboard.dismiss();
      this.props.filterSearch(this.state.text);
  }

  render () {
    return (
        <View style={Styles.searchContainer}>
          <TextInput placeholder={'Search for News'}
                     onChangeText={text => this.setState({text})}
                     value={this.state.text}
                     style={Styles.searchField}/>
          <FontAwesome name={'search'} size={30} style={Styles.searchIcon} onPress={this.searchNews}/>
        </View>
    );
  }
}

