import React from 'react';
import {View, Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import {vh, vw, normalize} from '../../Dimensions';

const DOB = (props) => {
  const [DOB, onChangeDOB] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.DOBText}>give us your DOB</Text>
      <Text style={styles.score}>
        additional information helps us{'\n'}fetch accurate credit reports
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeDOB}
        placeholder="dd/mm/yyyy"
        value={DOB}
        keyboardType = "numeric"
      />
      <TouchableOpacity
        style={styles.proceed}
         onPress={() => props.navigation.navigate('PAN')}
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
  DOBText: {
    color: '#ffffff',
    fontSize: normalize(20),
    fontWeight: 'bold',
    paddingHorizontal: vw(25),
    paddingTop: vh(50),
  },
  score: {
    color: '#585858',
    fontSize: normalize(14),
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

export default DOB;
