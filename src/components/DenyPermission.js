import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator
} from 'react-native';
import {normalize, vh, vw} from '../../Dimensions';

const DenyPermission = (props) => {
    const [load,setLoad] = useState(false)
    console.log('load',load);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.DenyPermissionHeader}>
        <Text style={styles.DenyPermission}>Deny permissions</Text>
      </TouchableOpacity>
      <Text style={styles.permissions}>
        {' '}
        we take the {'\n'} following permissions
      </Text>
      <View
        style={{
          borderBottomWidth: 1,
          paddingBottom: 40,
          borderColor: '#585858',
        }}>
        <View style={styles.row}>
          <Image
            source={require('../assests/smartphone.png')}
            style={styles.smartphone}
          />
          <Text style={styles.phone}>phone state permission</Text>
          <View style={styles.mandatoryBorder}>
            <Text style={styles.mandatory}>mandatory</Text>
          </View>
        </View>
        <Text style={styles.permissionText}>
          we need this permission to ensure the{'\n'}SIM card in your phone and
          your{'\n'}
          registered phone number match
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          paddingBottom: 40,
          borderColor: '#585858',
        }}>
        <View style={styles.row}>
          <Image
            source={require('../assests/sms.png')}
            style={styles.smartphone}
          />
          <Text style={styles.phone}>phone state permission</Text>
          <View style={styles.mandatoryBorder}>
            <Text style={styles.mandatory}>mandatory</Text>
          </View>
        </View>
        <Text style={styles.permissionText}>
          we need this permission to ensure the{'\n'}SIM card in your phone and
          your{'\n'}
          registered phone number match
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          paddingBottom: 40,
          borderColor: '#585858',
        }}>
        <View style={styles.row}>
          <Image
            source={require('../assests/location.png')}
            style={styles.smartphone}
          />
          <Text style={styles.phone}>phone state permission</Text>
        </View>
        <Text style={styles.permissionText}>
          we need this permission to ensure the{'\n'}SIM card in your phone and
          your{'\n'}
          registered phone number match
        </Text>
      </View>
      <TouchableOpacity
        style={styles.grant}
        onPress={() => { setLoad(true)
            setTimeout(()=>{
                props.navigation.navigate('OTP')},4000)}}
            >
        <Text style={styles.grantText}>Grant permission</Text>
      </TouchableOpacity>
      {
          load && 
          <View style={{width:'100%',height:'120%',alignItems:'center',justifyContent:'center',backgroundColor:'black',position:'absolute'}}>
          <Image
          source={require('../assests/loader.gif')}
          style={{width:vw(50),height:vh(50)}}
          />
          </View>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2F3230',
    flex:1
  },
  DenyPermissionHeader: {
    borderWidth: 0.3,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderColor: '#FFFFFF',
    width: '40%',
    height: vh(20),
    alignSelf: 'flex-end',
    margin: vw(20),
  },
  DenyPermission: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  permissions: {
    color: '#FFFFFF',
    paddingLeft: vw(25),
    paddingBottom: vh(40),
    fontWeight: 'bold',
    fontSize: normalize(18),
  },
  row: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  smartphone: {
    width: vw(30),
    height: vh(30),
    marginLeft: vw(20),
  },
  phone: {
    color: '#FFFFFF',
    fontSize: normalize(16),
    fontWeight: 'bold',
    padding: vw(10),
  },
  mandatoryBorder: {
    borderWidth: vw(1),
    borderColor: '#585858',
    backgroundColor: '#585858',
    borderRadius: vw(30),
    width: vw(70),
    height: vh(30),
    padding: 5,
    margin: 5,
  },
  mandatory: {
    color: '#FFFFFF',
    fontSize: normalize(12),
  },
  permissionText: {
    color: '#585858',
    marginLeft: vw(60),
  },
  grant: {
    borderColor: '#585858',
    backgroundColor: '#2F3230',
    borderWidth: vw(4),
    borderRadius: vw(25),
    width: '60%',
    height: vh(45),
    marginHorizontal: vw(25),
    marginVertical: vh(50),
    shadowColor: '#ffffff',
    shadowOpacity: 0.4,
    elevation: 3,
    shadowRadius: 20,
    shadowOffset: {width: 1, height: 1},
  },
  grantText: {
    alignSelf: 'center',
    color: '#deb887',
    fontSize: normalize(20),
    padding: 5,
    fontWeight: 'bold',
  },
});
export default DenyPermission;
