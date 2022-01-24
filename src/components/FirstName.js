import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {normalize, vh, vw} from '../../Dimensions';

const FirstName = (props) => {
  const [text, onChangeText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.nameText}>tell us your first{'\n'}name</Text>
      <Text style={styles.score}>
        this is necessary to calculate your{'\n'}eligibility score
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="First name"
        value={text}
      />
      <TouchableOpacity
        style={styles.continue}
         onPress={() => props.navigation.navigate('LastName')}
        >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
      <View
        style={{borderTopWidth: 1, borderColor: '#565656', marginTop: vh(120)}}>
        <Text style={styles.TandC}>
          by clicking on continue,you are{'\n'}indicating that you have read and
          {'\n'}agree to our terms of use & privacy{'\n'}policy
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2F3230',
    width: '100%',
    height: '100%',
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
  TandC:{
      color:'#ffffff',
      fontSize:normalize(16),
      padding:vw(20)
  },
});

export default FirstName;
