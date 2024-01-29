import { View, StyleSheet } from "react-native"

import color from "constants/colors"

const Card = ({children}) => {
  return (
    <View style={styles.card}>{children}</View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    padding: 16,
    backgroundColor: color.primary,
    elevation: 10,
    alignItems: "center",
    rowGap:10,
    //ios shadow
    shadowColor: color.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
})


export default Card