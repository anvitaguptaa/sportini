import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the Home Screen!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF4',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  },
  text: {
    fontSize: 18,
    color: '#333',
    padding: 20,
    marginTop: 20,
  },
});

export default Home;
