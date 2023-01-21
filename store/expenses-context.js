import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({descriptionm, amount, date}) => {},
  deleteExpense: (id) => {},
  uodateExpense: (id, {description, amount, date}) => {},
});

function expensesReducer(state, action){
  switch(action,type) {
    case 'ADD':
      return [{...action.payload}, ...state]
    case 'UPDATE':
      const updatablexpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
        );
      const updatableExpense = state[updatablexpenseIndex];
      const updatedItem = { ...updatableExpense,  ...action.payload.data };
      const updatedExpenses = [...state]
      updatedExpenses[updatablexpenseIndex] = updatedItem;
      return updatedExpenses;

    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload)
    default:
      return state;
  }
}

export default function ExpensesConxtextProvider({children}) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData){
    dispatch({type: 'ADD', payload: expenseData});
  }

  function deleteExpense(id){
    dispatch({type: 'DELETE', payload: id})
  }

  function updateExpense(id, expenseData){
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}})
  }


  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>
}




