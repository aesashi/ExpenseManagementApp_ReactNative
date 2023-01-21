import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import { GlobalStyles } from '../constants/styles';
import Input from '../components/ManageExpense/Input';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { useContext, useLayoutEffect } from 'react';
import { ExpensesContext } from '../store/expenses-context';


export default function ManageExpense({route, navigation}) {
  const editedExpense = route.params?.expenseId;
  const isEditing = !!editedExpense
  const expensesCtx = useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation]);

  // async function confirmHandler(expenseData){
  //   if (isEditing){
  //     expensesCtx.update
  //   }
  // }

  function cancelHandler(){
    navigation.goBack();
  }


  return (
    <View style={styles.container}>
      <ExpenseForm onCancel={cancelHandler} submitButtonLabel={isEditing ? 'Update' : 'Add'} />
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
