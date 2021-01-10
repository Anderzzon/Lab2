import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(0)

  return (
    <View style={styles.container}>
      <Header/>
      <Text style= {styles.titles}>Rooms</Text>
      <Images></Images>
      <Text style= {styles.titles}>Devices</Text>
      <Device setCounter={setCounter} value = {'Living Room Lamp'} />
      <Device setCounter={setCounter} value = {'Heater'} />
      <Device setCounter={setCounter} value = {'TV'} />
      <Text style= {styles.totalDevices}>Total Devices On: {counter}</Text>



      <StatusBar style="auto" />
    </View>
  );
}

const Header = () => {
  return (
    <View style= {styles.header}>
      <Image style = {{width: 60, height: 60}}
        source = {require('./assets/house-2.png')}
      />
      <Text style = {{fontSize: 18, fontWeight: 'bold', color: '#417b7a', paddingLeft: 20}}>Smart Home</Text>
    </View>
  );
};

const Box = ({ value, image }) => {
  return (
    <View style = {styles.boxes}>
      <Image style = {{width: 100, height: 100, margin: 5}}
        source = {image} 
      />
      <Text style={{ textAlign: 'center' }}>{value}</Text>
    </View>
  );
};

const Images = () => {
  return (
  <View style = {styles.imageBlock}>
    <Box value={'Living Room'} image={require('./assets/living-room.png')}/>
    <Box value={'Bedroom'} image={require('./assets/bed.png')}/>
    <Box value={'Kitchen'} image={require('./assets/kitchen.png')}/>
  </View>
  )
}

const Device = ({setCounter, value }) => {

  const [color, setColor] = useState('red');

  const updateColor = (newColor) => {
    console.log('new value: ', newColor)
    setColor(newColor)
  }

  return (
    <View style = {styles.device}>
      <View style = {{ flexDirection: 'row', alignItems: 'center' }}>
        <View style = {{ width: 15, height: 15, backgroundColor: color }}/>
        <Text style = {{ fontSize: 18 }}> {value} </Text>
      </View>
      <Toggle setCounter = {setCounter} updateColor = {updateColor}/>

      
    </View>
  )
}

const Toggle = ({setCounter, updateColor}) => {
  
  return (
    <View style = {styles.toggle}>
      <Button style = {{fontSize: 15, padding: 5 }}
      title="On"
      onPress = {() => {
        setCounter((prev) => prev + 1)
        updateColor('green')
      }
      }
      />
      <Button style = {{ fontSize: 18, padding: 5 }}
      title="Off"
      onPress = {() => {
        updateColor('red')
        setCounter((prev) => prev - 1)
      }
      }
      />
    </View>
  )
}



const styles = StyleSheet.create({
  //Background
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    margin: 20,
    marginTop: 40
  },

  //header
  header: {
    //flex: 0.1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },

  //titles:
  titles: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
    marginBottom: 10,
  },

  //imageBoxes:
    boxes: {
      padding: 5,
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 5,
      backgroundColor: '#64b8b8',
      flex: 1
    },

    // row block of iamges:
    imageBlock: {
      flexDirection: 'row',
      flex: 0,
      justifyContent: 'space-between',
      marginLeft: -5,
      marginRight: -5
    },

    //block with device:
    device: {
      backgroundColor: '#fef5af',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      width: '100%',
      alignItems: 'center',
      marginBottom: 15
    },

    //button toggle:
    toggle: {
      backgroundColor: 'white',
      alignItems: 'flex-end'
    },

    totalDevices: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      fontWeight: 'bold'
    }


});
