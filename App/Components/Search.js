/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {Styles} from '../styles';
import Metrics from '../Themes/Metrics';


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
          <TouchableOpacity onPress={this.searchNews}>
              <FontAwesome name={'search'} size={Metrics.icons.medium} style={Styles.searchIcon}/>
          </TouchableOpacity>
        </View>
    );
  }
}

