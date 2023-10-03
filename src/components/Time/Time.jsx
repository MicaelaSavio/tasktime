import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Time = ({time}) => {
    const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;
    
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  )
}

export default Time

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F2F2F2",
        flex: 0.2,
        padding: 15,
        justifyContent: "center",
        borderRadius: 15,
    },
    time: {
        fontSize: 80, 
        fontWeight: "bold",
        textAlign: "center",
    }
})