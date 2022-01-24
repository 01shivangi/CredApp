import React from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native';
import {vw, vh, normalize} from '../../Dimensions';
import Pulse from 'react-native-pulse'

const Home = (props) => {
  return (
    <View style={styles.container}>
        <View style={{position:'absolute',alignSelf:'center',top:vh(210)}}>
         <Pulse color='#585858' numPulses={3} diameter={400} speed={20} duration={2000} 
         />
         </View>
      <Image
        source={require('../assests/credit-card.png')}
        style={styles.credit}
      />
      <Text style={styles.text}>pay your credit card {'\n   '} bills.win rewards.</Text>
      <TouchableOpacity style={styles.continueborder} 
        onPress={()=>props.navigation.navigate('Login')}
    >
          <Text style={styles.continue}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2F3230',
    width: '100%',
    height: '100%',
  },
  credit: {
    width: vw(130),
    height: vh(130),
    alignSelf: 'center',
    marginTop: vh(140),
  },
  text:{
    marginVertical:vw(75),
    padding:10,
    alignSelf:'center',
    color:'#ffffff',
    fontSize:normalize(25),
    fontWeight:'bold'
  },
  continueborder:{
      borderColor:'#585858',
      backgroundColor:'#1e90ff',
      borderWidth:4,
      borderRadius:vw(25),
      width:'90%',
      height:vh(45),
      alignSelf:'center',
    shadowColor: '#ffffff',
    shadowOpacity: 0.3,
    elevation: 5,
    shadowRadius: 20 ,
    shadowOffset : { width: 1, height: -5},
  },
  continue:{
    alignSelf:'center',
    color:'#FFFFFF',
    fontSize:normalize(20),
    fontWeight:'bold',
    padding:5
},
});

export default Home;