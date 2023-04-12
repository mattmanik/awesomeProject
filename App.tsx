import React, {useState} from 'react';
import Navigator from './screens/home-screen';
 import {
//   Text,
   StyleSheet,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   View,
 } from 'react-native';

const YourApp = () => {
const [text, setText] = useState('');
  // const [showList, setShowList] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  // const data = [
  //   {key: 'Devin'},
  //   {key: 'Dan'},
  //   {key: 'Dominic'},
  //   {key: 'Jackson'},
  //   {key: 'James'},
  //   {key: 'Joel'},
  //   {key: 'John'},
  //   {key: 'Jillian'},
  //   {key: 'Jimmy'},
  //   {key: 'Julie'},
  // ];

  return (
    <Navigator />
    // <View
    //   style={[styles.container, {backgroundColor: darkMode ? '#000' : '#fff'}]}>
    //   <TouchableOpacity style={styles.button}>
    //     <Text style={styles.buttonText} onPress={() => setDarkMode(!darkMode)}>
    //       Toggle mode
    //     </Text>
    //   </TouchableOpacity>
    //   <Text style={styles.text}>Hey try editing me! 🎉</Text>
    //   <Image
    //     style={styles.imgStyle}
    //     source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
    //   />
    //   <TextInput
    //     onChangeText={newText => setText(newText)}
    //     placeholder="type here"
    //     style={styles.inputBox}
    //   />
    //   <Text style={styles.currentText}>
    //     {text.split(' ').map(x => x && '🎉')}
    //   </Text>
    //   <TouchableOpacity style={styles.button}>
    //     <Text style={styles.buttonText} onPress={() => setShowList(!showList)}>
    //       Press Me
    //     </Text>
    //   </TouchableOpacity>
    //   {showList ? (
    //     <View style={styles.containert}>
    //       <FlatList
    //         data={data}
    //         renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
    //       />
    //     </View>
    //   ) : (
    //     <View />
    //   )}
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  imgStyle: {
    width: 100,
    height: 100,
  },
  inputBox: {
    borderColor: 'red',
    borderWidth: 1,
    width: 200,
    height: 30,
    color: '#fff',
  },
  currentText: {
    color: '#fff',
    margin: 4,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containert: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default YourApp;
