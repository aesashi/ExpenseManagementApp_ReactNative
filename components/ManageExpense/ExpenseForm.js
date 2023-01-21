import {Text, View, StyleSheet, TextInput} from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Input from './Input';
import CustomButton from '../UI/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { getFormattedDate } from '../../utils/date';

export default function ExpenseForm({submitButtonLabel, onCancel, onSubmit, defaultValues}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true,
    },
  });
  const navigation = useNavigation();

  function submissionHandler(){
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert('Invalid input', 'Please check your input values');
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  return (
    <View style={styles.rootContainer}>
        <Text style={styles.titleText}>Your Expense</Text>
        <View style={styles.rows}>
        <Input
          label={'Amount'}
          style={styles.inputBox}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputs.amount.value,
          }}
        />
        <Input
          label={'Date'}
          style={styles.inputBox}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputs.date.value,
          }}
        />
        </View>
        <Input
          label={'Description'}
          textInputConfig={{
            multiline: true,
            onChangeText: inputChangedHandler.bind(this, 'description'),
            value: inputs.description.value,
          }}
        />
        <View style={styles.buttons}>
          <CustomButton
            style={styles.button}
            onPress={onCancel}
            children="Cencel"
          />
          <CustomButton
            style={styles.button}
            onPress={submissionHandler}
            children={submitButtonLabel}
          />
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
  rootContainer: {
    marginTop: 40,
  },

  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },

  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  inputBox: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    },
  button: {
    flex: 1,
    minWidth: 120,
    marginHorizontal: 8,
  },

})
