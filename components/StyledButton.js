import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const StyledButton = props => {
    var color = props.color != null ? props.color : '#007aff';
    return(
        <TouchableOpacity onPress={props.onPress} >
            <View style={ [styles.styledButton, { backgroundColor: color}] }>
                <Text style={ styles.buttonText }>
                    { props.children }
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default StyledButton;

const styles = StyleSheet.create({
    styledButton: {
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
    },
});