import React from 'react';
import {SafeAreaView, View, Text, ScrollView, StyleSheet} from 'react-native';
import {normalize, vw} from '../../Dimensions';

const CheckWhy = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.mainText}>
            we couldn't locate a{'\n'}
            <Text style={{color: '#ff8c00'}}>credit report</Text> against{'\n'}
            the details you{'\n'}
            provided.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2F3230',
    width: '100%',
    height: '100%',
  },
  mainText: {
    color: '#ffffff',
    margin: vw(25),
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
});

export default CheckWhy;
