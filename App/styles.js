import {StyleSheet} from 'react-native';
import colors from './Themes/Colors';

export const Styles = StyleSheet.create({
    logoContainer: {
        width: '100%',
        padding: 15,
    },
    logo: {
        width: '100%',
        height: 40
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: '#f4f4f4',
        width: '100%',
        height: 50,
        borderRadius: 15,
    },
    searchField: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    searchIcon: {
        // backgroundColor: '#f4f4f4',
        color: colors.fire,
        alignSelf: 'center',
        margin: 10,
    },
    newsContentContainer: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10
    },
});
