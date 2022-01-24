import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import {vh, vw, normalize} from '../../Dimensions';

const PAN = (props) => {
  const [PAN, onChangePAN] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.PANText}>finishing up,give us your PAN</Text>
      <Text style={styles.report}>
        additional information helps us{'\n'}fetch accurate credit reports
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize={"characters"}
        onChangeText={onChangePAN}
        placeholder="enter here"
        value={PAN}
      />
      <TouchableOpacity
        style={styles.proceed}
         onPress={() => props.navigation.navigate('Waitlisted')}
        >
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2F3230',
    width: '100%',
    height: '100%',
  },
  PANText: {
    color: '#ffffff',
    fontSize: normalize(22),
    fontWeight: 'bold',
    paddingHorizontal: vw(25),
    paddingTop: vh(50),
  },
  report: {
    color: '#585858',
    fontSize: normalize(16),
    paddingTop: vh(10),
    paddingHorizontal: vw(25),
  },
  input: {
    color: '#ffffff',
    fontSize: normalize(40),
    padding: vw(20),
    fontWeight: 'bold',
  },
  proceed: {
    borderColor: '#585858',
    backgroundColor: '#2F3230',
    borderWidth: vw(4),
    borderRadius: vw(25),
    width: '50%',
    height: vh(45),
    marginHorizontal: vw(25),
    marginVertical: vh(50),
    shadowColor: '#ffffff',
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 20,
    shadowOffset: {width: 1, height: 1},
  },
  proceedText: {
    alignSelf: 'center',
    color: '#deb887',
    fontSize: normalize(20),
    padding: 5,
    fontWeight: 'bold',
  },
});

export default PAN;
