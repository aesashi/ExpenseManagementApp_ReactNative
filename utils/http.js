import ExpensesList from "../components/ExpensesOutput/ExpensesList";
import axios from axios;

const BACKEND_URL = 'https://expenseapp-rn-default-rtdb.firebaseio.com';


function storeExpense(expenseData) {
  const reaponse = axios.post(BACKEND_URL + '/expense.json', expenseData);
}


export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + '/expenses.json');

  const expenses = [];

  for (const key in response.data){
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description
    };
    expenses.push(expenseObj);
  }

  return expenses;
}
