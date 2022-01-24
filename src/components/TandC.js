import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {normalize, vh, vw} from '../../Dimensions';

const TandC = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}
          style={{borderBottomWidth: 1, borderColor: '#585858'}}>
          <Image source={require('../assests/left.png')} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.Text}>Experian</Text>
        <Text style={styles.baseText}>
          You here by consent to CRED being appointed as {'\n'} your authorised
          representatives to receive your {'\n'} credit information on your
          behalf from Experian {'\n'} for a period of 36 consecutive months for
          the {'\n'} purpose of evaluting your creditworthiness and {'\n'}{' '}
          curate personalized offers to you.
        </Text>
        <Text style={styles.baseText}>
          BY EXECUTING THIS AGREEMENT/CONSENT {'\n'} FORM , YOU ARE EXPRESSLY
          AGREEING TO ACCESS THE EXPERIAN CREDIT INFORMATION REPORT AND {'\n'}{' '}
          CREDIT SCORE , AGGREGATE SCORES , {'\n'} INFERENCES , REFERENCES AND
          DETAILS(AS {'\n'} DEFINED BELOW) (TOGETHER REFERRED AS {'\n'} "CREDIT
          INFORMATION").YOU HEREBY ALSO {'\n'} IRREVOCABLY AND UNCONDITIONALLY
          CONSENT {'\n'} TO SUCH CREDIT INFORMATION BEING PROVIDED {'\n'} BY
          EXPERIAN TO CRED BY USING EXPERIAN TOOLS, {'\n'} ALGORITHM AND DEVICES
          AND YOU HEREBY AGREE,ACKNOWLEDGE AND ACCEPT THE TERMS AND CONDITIONS
          SET FORTH HEREIN.
        </Text>
        <Text style={styles.headText}>Terms and Conditions</Text>
        <Text style={styles.baseText}>
          Information Collection , use, confidentially,No- {'\n'} Disclosure and
          Data Purging
        </Text>
        <Text style={styles.baseText}>
          CRED shall access your credit information as your {'\n'} authorized
          representative and CRED sgall use the {'\n'} Credit information for
          limited End Use purpose {'\n'} consisting of and in relation of the
          services {'\n'} proposed to be avail by you from CRED
        </Text>
        <Text style={styles.baseText}>
          The parties agree to protect and keep {'\n'} confidential the credit
          information both onlin {'\n'} and offline.
        </Text>
        <Text style={styles.baseText}>
          The Credit Information shared by you,or received {'\n'} on by us on
          your behalf shall be destroyed, {'\n'} purged,erased promptly within
          1(one) buisness {'\n'} day of upon the completion of the transaction/{' '}
          {'\n'} End Use Purpose for which the Credit Information {'\n'} report
          was procured.
        </Text>
        <Text style={styles.headText}>Governing Law and Jurisdiction</Text>
        <Text style={styles.baseText}>
          The relationship between you and cred shall be {'\n'} governed by laws
          and all claims or {'\n'} disputes arising there from shall be subject
          to the {'\n'} exclusion jurisdiction of the courts of Mumbai.
        </Text>
        <Text style={styles.headText}>Use and Protection of Intellectual Property Rights</Text>
        <Text style={styles.baseText}>
          CRED App, CRED Website, CRED logos and {'\n'} the CRED Services are
          protected by copyright, {'\n'} trademarks, patents, trade secret
          and/or other {'\n'} intellectual property laws. No information,
          content or {'\n'} material from the CRED App including, without
          limitation, {'\n'} all of the page headers, images, illustrations,{' '}
          {'\n'} graphics, audio clips, video clips or text, reports generated,{' '}
          {'\n'} trademarks, tradenames may be copied, reproduced, republished,{' '}
          {'\n'} uploaded, posted, transmitted or distributed in any way {'\n'}{' '}
          without Our express written permission. {'\n'} You are hereby given a
          limited licence to use {'\n'} the CRED App and the CRED Platforms,
          subject to your agreement {'\n'} of these Terms of Use.
        </Text>
        <Text style={styles.headText}> Governing Law and Jurisdiction</Text>
        <Text style={styles.baseText}>
          The CRED App, the CRED Services, all your {'\n'} transactions with the
          CRED App, and our relationship {'\n'} shall be governed by the laws of
          India, {'\n'} without regard to conflict of law principles. {'\n'} You
          agree that subject to the Disputes & Arbitration {'\n'} Clause above,
          all claims, differences and disputes which {'\n'} we may have shall be
          subject to the exclusive {'\n'} jurisdiction of the competent courts
          located in Bengaluru,{'\n'} Karnataka, India.
        </Text>
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
  back: {
    width: vw(25),
    height: vh(25),
    padding: 20,
    margin: 20,
  },
  Text: {
    fontSize: normalize(20),
    color: '#ffffff',
    fontWeight: 'bold',
    padding: vw(15),
  },
  headText: {
    fontSize: normalize(16),
    color: '#ffffff',
    fontWeight: 'bold',
    padding: vw(15),
  },
  baseText: {
    fontSize: normalize(14),
    color: '#ffffff',
    padding: vw(15),
  },
});

export default TandC;
