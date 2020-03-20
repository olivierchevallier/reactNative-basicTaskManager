import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={ props.onDelete }>
            <View style={ styles.listItem }>
                <Text>{ props.item }</Text>
            </View>
        </TouchableOpacity>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
});