import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {vw, vh, normalize} from '../../Dimensions';
import CheckBox from '@react-native-community/checkbox';

const Email = props => {
  const [text, onChangeText] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('FirstName')}
        style={styles.backBorder}>
        <Image source={require('../assests/left.png')} style={styles.back} />
      </TouchableOpacity>
      <Text style={styles.nameText}>give us your{'\n'}email</Text>
      <Text style={styles.score}>
        your credit report will be sent to this{'\n'}email ID
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="abc@xyz.com"
        value={text}
      />
      <View
        style={{
          borderTopWidth: 1,
          borderColor: '#565656',
          marginTop: vh(120),
          flexDirection: 'row',
          justifyContent:'space-between'
        }}>
        <View>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          boxType="square"
          onCheckColor="#FFFFFF"
          onTintColor="#FFFFFF"
          style={styles.CheckBox}
        />
        <Text style={styles.alert}>i agree to enable{'\n'}WhatsApp alerts</Text>
        <Text style={styles.update}>receive reminders,updates on{'\n'}bank charges and rewards</Text>
        </View>
        <Image 
        source={require('../assests/study.png')}
        style={styles.study}
        />
         <Image 
        source={require('../assests/whatsapp.png')}
        style={styles.whatsapp}
        />
      </View>
      <TouchableOpacity
        style={styles.continue}
         onPress={() => props.navigation.navigate('Score')}
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
  CheckBox: {
    margin: vw(20),
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
  nameText: {
    color: '#ffffff',
    fontSize: normalize(20),
    fontWeight: 'bold',
    paddingHorizontal: vw(25),
    paddingTop: vh(50),
  },
  score: {
    color: '#ffffff',
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
  study:{
      width:vw(120),
      height:vh(120),
  },
  alert:{
      fontSize:normalize(16),
      marginLeft:vw(15),
      color:'#FFFFFF',
  },
  update:{
    fontSize:normalize(16),
    marginLeft:vw(15),
    color:'#FFFFFF',
    marginTop:vh(15)
  },
  whatsapp:{
      position:'relative',
      width:vw(40),
      height:vh(40),
      top:vh(80),
      right:vw(110)
  },
  continue: {
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
  continueText: {
    alignSelf: 'center',
    color: '#deb887',
    fontSize: normalize(20),
    padding: 5,
    fontWeight: 'bold',
  },
});
export default Email;
