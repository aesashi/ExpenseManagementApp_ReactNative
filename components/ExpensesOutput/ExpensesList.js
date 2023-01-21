import {FlatList, } from 'react-native';
import ExpensesItem from './ExpensesItem';

function renderExpenseItem(itemData) {
  console.log(itemData.item)
  return <ExpensesItem {...itemData.item} />;

}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

