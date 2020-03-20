import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = props => {
    return (
        <View style={ styles.titleView }>
            <Text style={ styles.title }>
                { props.children }
            </Text>
        </View>
    );
}

export default Title;

const styles = StyleSheet.create({
    titleView: { 
        marginBottom: 10,
    },

    title: {
        fontSize: 35,
        fontWeight: 'bold',
    },
});