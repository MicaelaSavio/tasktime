
import { StyleSheet, Platform, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './src/components/Header/Header';
import Time from './src/components/Time/Time';
import { Audio } from "expo-av";


const colors = ["cyan", "yellow", "green"]


export default function App() {

  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK")
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
      let interval = null;

      if (isActive) {
        //run timer 
        interval = setInterval( ()=> {
          setTime(time-1);
        }, 10)
      }else{
        //clear interval
        clearInterval(interval);
      }

      if (time ===0){
        setIsActive(false);
        setIsWorking((prev) => !prev);
        setTime(isWorking ? 300 : 1500);

      }

      return () => clearInterval(interval);
  }, [isActive, time])

  function handleStartStop() {
    playSound();
    setIsActive(!isActive);
  }

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/click.mp3")
    );
    await sound.playAsync();
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View style={styles.view}>
        <Text style={styles.text}>TaskTime</Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
        />
        <Time time={time} />
        <TouchableOpacity style={styles.button} onPress={handleStartStop}>
          <Text style={styles.textButton}> {isActive ? "STOP" : "STAR"} </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold"
  },
  view: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Platform.OS === "android" && 30,
  },
  button: {
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  }
});
