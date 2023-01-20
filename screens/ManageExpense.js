import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import { GlobalStyles } from '../constants/styles';
import Input from '../components/ManageExpense/Input';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { useLayoutEffect } from 'react';


export default function ManageExpense({route, navigation}) {
  const editedExpense = route.params?.expenseId;
  const isEditing = !!editedExpense

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ExpenseForm submitButtonLabel={isEditing ? 'Update' : 'Add'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
});
