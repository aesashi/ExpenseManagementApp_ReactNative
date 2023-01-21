import { Text, View, StyleSheet, Pressable, } from 'react-native'
import { GlobalStyles } from '../../constants/styles'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

export default function ExpensesOutput({expensesPeriod, expenses, fallbackText}) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.rootContainer}>
      <ExpensesSummary expensesPeriod={expensesPeriod} expenses={expenses} />
      {content}
    </View>
  )
}

const styles=StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  listRootContainer:{
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },

})
