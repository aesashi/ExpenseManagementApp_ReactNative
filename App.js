import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RecentExpenses from './screens/RecentExpenses';
import ManageExpense from './screens/ManageExpense';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ExpenseTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor: GlobalStyles.colors.accent500
    }}
    >
      <Tab.Screen
        name="RecentExpesenses"
        component={RecentExpenses}
        options= {{
          title: 'Recenet Expense',
          tabBarLabel: 'Recent',
          tabBarLabelStyle: {fontSize: 13},
        }}
      />
      <Tab.Screen
        name="AllExpense"
        component={AllExpenses}
        options= {{
          title: 'All Expense',
          tabBarLabel: 'All',
          tabBarLabelStyle: {fontSize: 13},
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor:  GlobalStyles.colors.primary500},
          headerShown: false
        }}
      >
        <Stack.Screen
          name="ExpenseOverview"
          component={ExpenseTabs}

        />
        <Stack.Screen name="ManageExpense" component={ManageExpense}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
