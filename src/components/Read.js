import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {vh, vw, normalize} from '../../Dimensions';

const Read = props => {
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Waitlisted')}
          style={styles.backBorder}>
          <Image source={require('../assests/left.png')} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.faq}>Frequently Asked Questions</Text>
        <View style={styles.search}>
          <Image
            source={require('../assests/search.png')}
            style={{
              width: vw(20),
              height: vh(20),
              marginLeft: 25,
              marginTop: vh(10),
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="search your question"
          />
        </View>
        <Text style={styles.questiontxt}>Why have I been waitlisted?</Text>
        <Text style={styles.answerTxt}>
          CRED receives credit score from 2 credit bureaus:{'\n'}Experian and
          CRIF.CRED welcomes customers{'\n'}with a credit score of 750 and above
          on Experian,{'\n'}or 570 and above on CRIF.You will be waitlisted if
          {'\n'}CRED did not receive a credit report or if the{'\n'}scores are
          below the cut-off.
        </Text>
        <Text style={styles.questiontxt}>
          How long am I going to be waitlisted?
        </Text>
        <Text style={styles.answerTxt}>
          The waitlisted list is where all customers who don't{'\n'}meet our
          credit score threshold are queued.You{'\n'}will be a CRED member when
          you move out of the{'\n'}Waitlist.Being a CRED member gives access to
          credit card bill payments and rewards.You can{'\n'}refresh your score
          every 30 days and become a{'\n'}CRED member if your Experian score is
          750 and{'\n'}above,or if your CRIF score is 570 and above
        </Text>
        <Text style={styles.questiontxt}>What is credit score?</Text>
        <Text style={styles.answerTxt}>
          A credit score is a measure of an individual's{'\n'}ability to pay
          back the borrowed amount.It is{'\n'}only generated if you have taken a
          loan or a{'\n'}credit card ever.A credit score is a 3-digit{'\n'}
          number that falls in a range of 300-900,900{'\n'}being the
          highest.Credit scores are calculated by{'\n'}consideration several
          factors like the length of{'\n'}your credit history,repayment
          records,credit{'\n'}inquiries,among others.
        </Text>
        <Text style={styles.questiontxt}>My credit score is not updated</Text>
        <Text style={styles.answerTxt}>
          You can refresh your credit score on CRED every{'\n'}30 days by
          clicking Refresh Score.
        </Text>
        <Text style={styles.questiontxt}>
          I have a credit score more than 750 and I{'\n'}am still waitlisted on
          CRED
        </Text>
        <Text style={styles.answerTxt}>
          Sometimes,we may receive incomplete{'\n'}information on your scores
          from our credit{'\n'}bureaus(Experian and CRIF),which prevent our
          {'\n'}systems to validate your credentials.This is{'\n'}extremely rare
          though,as we take each{'\n'}application through multiple checks.
        </Text>
        <TouchableOpacity
          style={{
            borderTopWidth: 1,
            borderColor: '#585858',
            marginVertical: vh(30),
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assests/question.png')}
            style={{width: vw(25), height: vh(25), margin: vw(25)}}
          />
          <Text
            style={{
              marginTop: vw(25),
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: normalize(20),
            }}>
            couldn't find an answer?
          </Text>
        </TouchableOpacity>
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
  faq: {
    color: '#ffffff',
    margin: vw(25),
    fontSize: normalize(18),
    fontWeight: 'bold',
  },
  search: {
    borderTopWidth: 1,
    borderColor: '#585858',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: vw(15),
    paddingVertical: vh(10),
  },
  input: {
    color: '#FFFFFF',
    fontSize: normalize(20),
    paddingVertical: vw(10),
    fontWeight: 'bold',
    marginLeft: vw(20),
  },
  questiontxt: {
    color: '#FFFFFF',
    marginHorizontal: vw(25),
    marginVertical: vh(25),
  },
  answerTxt: {
    color: '#FFFFFF',
    marginHorizontal: vw(25),
  },
});

export default Read;
