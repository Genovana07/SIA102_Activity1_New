import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("Press a button below.");

  const handleIncrease = () => {
    setCounter(prev => prev + 1);
    setMessage("Counter increased!");
  };

  const handleReset = () => {
    setCounter(0);
    setMessage("Counter reset.");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.phoneFrame}>
        <Text style={styles.appTitle}>📱 Counter App</Text>

        <View style={styles.container}>
          <Text style={styles.label}>Counter Value:</Text>
          <Text style={styles.counter}>{counter}</Text>
          <Text style={styles.message}>{message}</Text>

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Increase" onPress={handleIncrease} />
            </View>
            <View style={styles.button}>
              <Button title="Reset" onPress={handleReset} color="#D32F2F" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#202124',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneFrame: {
    width: 320,
    height: 580,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  appTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1a73e8',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 40,
    color: '#666',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    width: 100,
    marginHorizontal: 5,
  },
});
