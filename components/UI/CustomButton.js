import {View, Text, Button, Pressable, StyleSheet} from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export default function CustomButton({children, style, onPress, mode}) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode==='flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode==='flat' && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 8,
    borderRadius: 4,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  }
})
