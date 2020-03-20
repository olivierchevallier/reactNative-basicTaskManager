import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import Title from './components/Title';
import StyledButton from './components/StyledButton';



export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    getNextKey();
    setGoals(currentGoals => [...currentGoals, {key: getNextKey().toString(), value: goalTitle}]);
    setIsAddMode(false);
  }

  const deleteGoalHandler = (goalKey) => {
    console.log("Deleting goal with key " + goalKey);
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    })
  }

  const getNextKey = () => {
    if (goals.length < 1) {
      return 0
    } else {
      var lastItemKey = parseInt(goals[goals.length - 1].key);
      return lastItemKey + 1;
    }
  }

  return (
    <View style={ styles.masterView }>
      <View style={ styles.topSection } >
        <Title>
          Mes objectifs
        </Title>
        <StyledButton onPress={ () => setIsAddMode(true) }>
          +
        </StyledButton>
      </View>
      <GoalInput onAddGoal={ addGoalHandler } onCancel={ () => setIsAddMode(false) } visible={ isAddMode }/>
      <FlatList style={ styles.goalsContainer } data={ goals } renderItem={ itemData => (
        <GoalItem 
          item={ itemData.item.value }
          onDelete={ deleteGoalHandler.bind(this, itemData.item.key) }
        />
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  masterView: {
    paddingTop: 50,
    paddingBottom: 25,
    paddingHorizontal:12,
    flex: 1,
  },

  titleView: { 
    marginBottom: 10,
  },

  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },

  topSection: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },

  addButton: {
    marginVertical: 10,
  }, 

  goalsContainer: {
    flex: 1,
    //maxHeight: '100%',
  },
});
