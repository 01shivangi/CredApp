import React from 'react'
import { SafeAreaView,View, Text, StyleSheet,Image } from 'react-native'
import { normalize, vw ,vh} from '../../Dimensions';
import Pulse from 'react-native-pulse'

const Score = (props) => {
  setTimeout (()=>props.navigation.navigate('DOB'),5000)
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.score}>fetching your{'\n'}credit score</Text>
            <Text style={styles.eligibility}>hang on,while we check{'\n'}your eligibility</Text>
            <View style={{position:'absolute',alignSelf:'center',top:vh(380)}}>
         <Pulse color='#585858' numPulses={3} diameter={400} speed={20} duration={2000} 
         />
         </View>
      <Image
        source={require('../assests/credit-card.png')}
        style={styles.credit}
      />
      <View style={styles.scoreHeader}>
          <Text style={styles.members}>7 million members pay their bill on{'\n'}CRED</Text>
          <Image
          source={require('../assests/medal.png')}
          style={styles.medal}
          />
      </View>
      <View style={{borderTopWidth:1,borderColor:'#585858',margin:vw(10)}}>
          <Text style={styles.creditBureau}>contacting RBI approved credit bureau</Text>
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
      score:{
          color:'#ffffff',
          fontSize:normalize(25),
          fontWeight:'bold',
          textAlign:'center',
          marginTop:vw(30)
      },
      eligibility:{
        color:'#ffffff',
        fontSize:normalize(17),
        textAlign:'center',
        margin:vw(20),
        color:'#585858'
      },
      credit: {
        width: vw(130),
        height: vh(130),
        alignSelf: 'center',
        marginTop: vh(90),
      },
      members:{
          margin:vw(10),
          color:'#FFFFFF',
          fontSize:normalize(15),
          paddingHorizontal:vw(10)
      },
      scoreHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'#585858',
        backgroundColor:'#585858',
        borderRadius:vw(10),
        margin:vw(20),
        marginTop:vh(130),
      },
      medal:{
          width:vw(25),
          height:vh(25),
          margin:vw(10),
      },
      creditBureau:{
          color:'#585858',
          marginTop:vw(35),
          marginLeft:vh(10),
          fontSize:normalize(20)
      },
})

export default Score;