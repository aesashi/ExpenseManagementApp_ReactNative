import { Text, View, StyleSheet, Pressable, } from 'react-native'
import { GlobalStyles } from '../../constants/styles'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

export default function ExpensesOutput({expensesPeriod, expenses}) {
  return (
    <View style={styles.rootContainer}>
      <ExpensesSummary expensesPeriod={expensesPeriod} expenses={expenses} />
      <ExpensesList />
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

})
