import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = props => {
    return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        //Shadow props -> iOS only
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.3,
        //Android only to make a drop shadow
        elevation: 8,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10
    }
});

export default Card;