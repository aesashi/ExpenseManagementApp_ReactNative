import {Text, View, StyleSheet} from 'react-native'
import { GlobalStyles } from '../constants/styles'

export default function AllExpenses() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.sumContainer}>
        <Text>Total</Text>
        <Text>$141.97</Text>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.itemContainer}>
          <Text>Title</Text>
          <Text>2022-01-01</Text>
        </View>
        <View>
          <Text>13.00</Text>
        </View>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  rootContainer: {
    backgroundColor: GlobalStyles.colors.primary700,
  },
  sumContainer: {

  },
  listContainer: {

  },
  itemContainer: {

  }

})
