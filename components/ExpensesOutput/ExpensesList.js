import { useNavigation } from '@react-navigation/native';
import {Text, View, StyleSheet, Pressable, } from 'react-native';
import { GlobalStyles } from '../../constants/styles'

export default function ExpensesList() {
  const navigation = useNavigation();

  function pressedHandler(){
    navigation.navigate('ManageExpense', {
      expenseId: 'id', //temporary in string but will replace on actual item unique id
    })
  }
  return (
    <View>
    <Pressable
      style={ ({ pressed }) => pressed && styles.pressed}
      onPress={pressedHandler}
    >
      <View style={styles.listContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.titleText}>Title</Text>
          <Text style={styles.dateText}>2022-01-01</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>13.00</Text>
        </View>
      </View>
    </Pressable>
  </View>
  )
}
const styles=StyleSheet.create({
  listContainer: {
    backgroundColor: GlobalStyles.colors.primary400,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 4,
    shadowOpacity: 0.6,
  },
  itemContainer: {

  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dateText: {
    color: 'white',
  },
  priceContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  priceText: {
    color: GlobalStyles.colors.primary400,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  },

})
