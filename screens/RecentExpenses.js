import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

export default function RecentExpenses({title, }) {
  return (
    <ExpensesOutput expensesPeriod={'Last 7 Days ...'} expenses={'$140.99'}/>
  )
}

