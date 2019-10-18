import React from 'react';
import {View, Text} from 'react-native';
import {Styles} from '../styles';
import { material } from 'react-native-typography';

// extra modules
import moment from 'moment'; // used moment to format date to be nicer.


export function NewsContent({news}) {
    return (
        <View style={Styles.newsContentContainer}>
            <Text style={material.title}>{news.title}</Text>
            <Text style={material.body1}>{news.snippet}</Text>
            <Text style={Styles.author}>{news.byline ? (news.byline).toUpperCase() : 'UNKNOWN'}</Text>
            <Text style={material.caption}>{moment(news.date).format('LLL')}</Text>
        </View>
    )
}