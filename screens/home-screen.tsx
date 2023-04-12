import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hey</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 50,
    backgroundColor: 'red',
  },
});

export default HomeScreen;
