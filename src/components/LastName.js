import React from 'react'
import { SafeAreaView,View, Text,StyleSheet,TouchableOpacity,Image,TextInput} from 'react-native'
import { vw,vh,normalize } from '../../Dimensions'

const LastName = (props) => {
    const [text, onChangeText] = React.useState('');
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
        onPress={() => props.navigation.navigate('FirstName')}
        style={styles.backBorder}>
        <Image source={require('../assests/left.png')} style={styles.back} />
      </TouchableOpacity>
      <Text style={styles.nameText}>great! tell us your last{'\n'}name</Text>
      <Text style={styles.score}>
        this is necessary to calculate your{'\n'}eligibility score
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Last name"
        value={text}
      />
      <TouchableOpacity
        style={styles.continue}
         onPress={() => props.navigation.navigate('Email')}
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
    )
}

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
})

export default LastName;