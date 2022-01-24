import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {normalize, vh, vw} from '../../Dimensions';

const OTP = (props) => {
    const [OTP, onChangeOTP] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Login')}
        style={styles.backBorder}>
        <Image source={require('../assests/left.png')} style={styles.back} />
      </TouchableOpacity>
      <Text style={styles.otpText}>we have sent you{'\n'}an OTP</Text>
      <Text style={styles.digit}>enter the 4 digit OTP sent on{'\n'}number to proceed</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeOTP}
        value={OTP}
        placeholder="OTP"
        keyboardType="numeric"
        maxLength = {4}
      />
      <TouchableOpacity style={styles.continue}
       onPress={()=>props.navigation.navigate('FirstName')}
      >
        <Text style={styles.continueText}>Continue</Text>
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
  back: {
    width: vw(25),
    height: vh(25),
    margin: vw(10),
    padding: vw(10),
  },
  backBorder: {
    borderColor: '#2F3230',
    borderWidth: 1,
    borderRadius: vw(50),
    width: vw(50),
    height: vh(50),
    margin: vw(20),
    backgroundColor: '#2F3230',
    shadowColor: '#ffffff',
    shadowOpacity: 0.2,
    elevation: 3,
    shadowRadius: 20,
    shadowOffset: {width: 1, height: 1},
  },
  otpText:{
      fontSize:normalize(23),
      fontWeight:'bold',
      padding:vw(25),
      color:'#ffffff'
  },
  digit:{
      color:'#ffffff',
      fontSize:normalize(17),
      paddingLeft:vw(25)
  },
  input: {
    color: '#ffffff',
    fontSize: normalize(40),
    padding: vw(20),
    fontWeight:'bold'
  },
  continue: {
    borderColor: '#585858',
    backgroundColor: '#2F3230',
    borderWidth: vw(4),
    borderRadius: vw(25),
    width: '60%',
    height: vh(45),
    marginHorizontal: vw(25),
    marginVertical: vh(50),
    shadowColor: '#ffffff',
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 20,
    shadowOffset: {width: 1, height: 1},
  },
  continueText: {
    alignSelf: 'center',
    color: '#deb887',
    fontSize: normalize(20),
    padding: 5,
    fontWeight: 'bold',
  },
});

export default OTP;
