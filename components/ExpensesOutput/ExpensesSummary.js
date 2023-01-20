import {Text, View, StyleSheet} from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export default function ExpensesSummary({expensesPeriod, expenses}) {
  return (
    <View style={styles.sumContainer}>
      <Text>{expensesPeriod}</Text>
      <Text style={styles.priceText}>{expenses}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  sumContainer: {
    backgroundColor: GlobalStyles.colors.primary50,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    padding: 12,
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'space-between',
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 4,
    shadowOpacity: 0.6,
  },
  priceText: {
    color: GlobalStyles.colors.primary400,
    fontWeight: 'bold',
  },

})
