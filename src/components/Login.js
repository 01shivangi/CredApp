import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {normalize, vh, vw} from '../../Dimensions';

const Login = props => {
  const [number, onChangeNumber] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.NumText}>give us your{'\n'}mobile number</Text>
      <Text style={styles.text}>
        to apply , we need your mobile{'\n'}number linked to your credit cards
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="9999999999"
        keyboardType="numeric"
        maxLength= {10}
      />
      <View style={styles.CheckBox}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          boxType="square"
          onCheckColor="#FFFFFF"
          onTintColor="#FFFFFF"
        />
      </View>
      <Text style={styles.CRED}>
        you agree to allow CRED to check your credit</Text>
        <View style={styles.view}>
        <Text style={styles.infoText}>information with....</Text>
        <TouchableOpacity style={{borderBottomWidth:1,borderColor:'#585858'}}
        onPress={()=>props.navigation.navigate('TandC')}>
        <Text 
          style={{textDecorationLine: 'underline'},styles.infoText}>
          RBI approved credit bureaus.
        </Text>
        </TouchableOpacity>
        </View>
      <Text style={styles.card}>
        we need to check if you are a credit card holder {'\n'} and are above
        our accepted credit score {'\n'} threshold. It will not impact your
        credit score.
      </Text>
      <TouchableOpacity style={styles.agree}
      disabled={number.length<10}
       onPress={()=>props.navigation.navigate('DenyPermission')}
      >
        <Text style={styles.agreeText}>Agree & continue</Text>
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
  NumText: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: vh(30),
    paddingLeft: 15,
  },
  text: {
    fontSize: normalize(15),
    color: '#ffffff',
    padding: 15,
  },
  input: {
    color: '#ffffff',
    fontSize: normalize(25),
    padding: vw(15),
    fontWeight:'bold'
  },
  CheckBox: {
    padding: 25,
    marginTop: vh(120),
  },
  view:{
      flexDirection:'row',
      paddingLeft:vw(25),
      paddingBottom:vh(25),
      padding:2
  },
  infoText:{
      color:'#ffffff',
  },
  CRED: {
    color: '#ffffff',
    paddingTop: vh(25),
    paddingLeft:vw(25),
    fontSize: normalize(14),
  },
  card: {
    color: '#ffffff',
    paddingLeft: vw(25),
    fontSize: normalize(14),
  },
  agree: {
    borderColor: '#585858',
    backgroundColor: '#2F3230',
    borderWidth: vw(4),
    borderRadius: vw(25),
    width: '50%',
    height: vh(45),
    margin:vw(25),
    shadowColor: '#ffffff',
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 20 ,
    shadowOffset : { width: 1, height: 1},
  },
  agreeText: {
    alignSelf: 'center',
    color: '#deb887',
    fontSize: normalize(20),
    padding: 5,
    fontWeight:'bold'
  },
});

export default Login;
