import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colors from '../assets/constants/colors'

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 80,
        paddingTop: 30,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText:{
        color: 'white',
        fontSize: 18,
        
    }
});

export default Header;
