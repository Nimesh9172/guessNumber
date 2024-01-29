import color from "constants/colors"
import { View, Text , StyleSheet} from "react-native"


const GuessLogItem = ({roundNumber, guess}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText} ># {roundNumber}</Text>
      <Text style={styles.itemText} >Opponent's Guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem:{
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: 50,
    padding:12,
    marginVertical: 8,
    backgroundColor: "#fff",
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%",
    elevation:4,
    shadowColor:"black",
    shadowOffset:{width:0, height: 8},
    shadowOpacity: 0.25,
    shadowRadius:3,
  },
  itemText: {
    fontFamily: 'open-sans'
  }
})

export default GuessLogItem