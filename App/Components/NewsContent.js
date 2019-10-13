import React from 'react';
import {View, Text} from 'react-native';
import {Styles} from '../styles';
import NewsContentStyle from '../Styles/NewsContent';
import { material } from 'react-native-typography'


export function NewsContent({news}) {
    return (
        <View style={Styles.newsContentContainer}>
            <Text style={material.title}>{news.title}</Text>
            <Text style={material.body1}>{news.snippet}</Text>
            <Text style={NewsContentStyle.author}>{news.byline}</Text>
            <Text style={material.caption}>{news.date}</Text>
        </View>
    )
}