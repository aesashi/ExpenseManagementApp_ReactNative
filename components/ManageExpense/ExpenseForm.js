import {Text, View, StyleSheet, TextInput} from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Input from './Input';
import CustomButton from '../UI/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function ExpenseForm({submitButtonLabel, onCancel, onPress}) {
  const navigation = useNavigation();

  return (
    <View style={styles.rootContainer}>
        <Text style={styles.titleText}>Your Expense</Text>
        <View style={styles.rows}>
        <Input
          label={'Amount'}
          style={styles.inputBox}
          textInputConfig={{
            keyboardType: 'decimal-pad',
          }}
        />
        <Input
          label={'Date'}
          style={styles.inputBox}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
          }}
        />
        </View>
        <Input
          label={'Description'}
          textInputConfig={{
            multiline: true,
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
            onPress={()=>{}}
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
