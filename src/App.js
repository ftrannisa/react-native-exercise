//==================== FIRST TODO RN ========================

// import React, {useState} from 'react';
// import {StyleSheet, View, Button, FlatList} from 'react-native';

// import GoalItem from './components/GoalItem';
// import GoalInput from './components/GoalInput';

// export default function App() {
//   const [courseGoals, setCourseGoals] = useState([]);
//   const [isAddMode, setIsAddMode] = useState(false);

//   const addGoalHandler = (goalTitle) => {
//     setCourseGoals((currentGoals) => [
//       ...currentGoals,
//       {id: Math.random().toString(), value: goalTitle},
//     ]);
//     setIsAddMode(false);
//   };

//   const removeGoalHandler = (goalId) => {
//     setCourseGoals((currentGoals) => {
//       return currentGoals.filter((goal) => goal.id !== goalId);
//     });
//   };

//   const cancelGoalAdditionHandler = () => {
//     setIsAddMode(false);
//   };

//   return (
//     <View style={styles.screen}>
//       <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
//       <GoalInput
//         visible={isAddMode}
//         onAddGoal={addGoalHandler}
//         onCancel={cancelGoalAdditionHandler}
//       />
//       <FlatList
//         keyExtractor={(item, index) => item.id}
//         data={courseGoals}
//         renderItem={(itemData) => (
//           <GoalItem
//             id={itemData.item.id}
//             onDelete={removeGoalHandler}
//             title={itemData.item.value}
//           />
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     padding: 50,
//   },
// });

//==================== CODE CHALLENGE =======================
// import React from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {LoginScreen} from './CodeChallenge/LoginScreen';
// import {HomeScreen} from './CodeChallenge/HomeScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// ========================= Tugas Navigation ===================

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './router/Stack';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
