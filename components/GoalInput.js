import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';
import Title from './Title';
import StyledButton from './StyledButton';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    const cancelHandler = () => {
        props.onCancel();
    };

    return (
        <Modal visible={ props.visible } animationType="slide">
            <View style={ styles.modalAddView }>
                <View style={ styles.topSection } >
                    <Title>Nouvel objectif</Title>
                    <StyledButton onPress={ cancelHandler } color="#ff3b30">
                        X
                    </StyledButton>
                </View>
                <View style={ styles.addView }>
                    <TextInput 
                        placeholder="Objectifs du cours"
                        style={ styles.addInput }
                        onChangeText={ goalInputHandler }
                        value={ enteredGoal }
                        autoFocus={ true }
                        onEndEditing={ addHandler }
                        returnKeyType="done"
                    />
                    <View style={ styles.buttonsArea }>
                        <Button 
                            title="Annuler"
                            color="red"
                            onPress={ cancelHandler }
                        />
                        <Button 
                            title="Ajouter"
                            onPress={ addHandler }
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    modalAddView: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal:10,
    },

    addView: { 
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    
    addInput: { 
        borderColor: '#555',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: "100%",
        color: "black",
    },

    buttonsArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
    },

    topSection: {
      flexDirection: 'row',
      justifyContent: "space-between",
    },
});