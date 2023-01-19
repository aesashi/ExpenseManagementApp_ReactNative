import {Text, View, StyleSheet} from 'react-native'
import { GlobalStyles } from '../constants/styles'

export default function RecentExpenses() {
  return (
    <View style={styles.container}>
      <Text>Recent Expense Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
  }
})
