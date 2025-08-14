import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.phoneFrame}>
        {/* Title */}
        <Text style={styles.title}>Attendance</Text>

        <View style={styles.container}>
          {/* Input Fields */}
          <View style={styles.inputColumn}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>First Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter first name"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Last Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter last name"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Section:</Text>
              <TextInput
                style={styles.input}
                placeholder="Section"
              />
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Present"
                onPress={() => {}}
                color="#388E3C"
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Absent"
                onPress={() => {}}
                color="#D32F2F"
              />
            </View>
          </View>

          {/* Underline (divider) */}
          <View style={styles.underline} />

          {/* Below underline section */}
          <View style={styles.belowUnderlineContainer}>
            <Text style={styles.belowUnderlineText}>
              Track attendance easily and stay organized!
            </Text>
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
    width: 340,
    height: 600,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#222',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  inputColumn: {
    width: '100%',
    marginBottom: 10,
  },
  inputGroup: {
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
    textAlign: 'left',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    backgroundColor: '#f9f9f9',
    textAlign: 'left',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 10,
  },
  button: {
    width: 100,
    marginHorizontal: 5,
  },
  underline: {
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    marginVertical: 20,
    width: '100%',
  },
  belowUnderlineContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
  },
  belowUnderlineText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
