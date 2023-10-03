import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const options = ["TaskTime", "Short break", "Long break"];

export default function Header({ setTime, currentTime, setCurrentTime }) {
    //*Esta funcion va a ayudarnos a poner el currentTime dependiendo el item que presione el usuario
    function handlePress(index) {
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index);
        setTime(newTime * 60);
    }

    return (
        <View style={styles.headerContainer}>
            {options.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => handlePress(index)}
                    style={[
                        styles.itemStyle,
                        currentTime !== index && { borderColor: "transparent" },
                    ]}
                >
                    <Text style={styles.Textitem}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}


const styles = StyleSheet.create({
 
    headerContainer: {
        flexDirection: "row",
    },
    itemStyle: {
        width: "33%",
        borderWidth: 3,
        padding: 5,
        borderColor: "white",
        marginVertical: 20, 
        alignItems: "center",
        borderRadius: 10,
    },
    Textitem: {
        fontWeight: "bold",
    }
})