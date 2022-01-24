import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {vh, vw, normalize} from '../../Dimensions';
import ActionSheet from './ActionSheet';

const DATA = [
  {
    id: '1',
    title: 'win rewards with\nevery bill payment.',
    imagePath: require('../assests/rewards.png'),
    imageback: require('../assests/pink.webp'),
  },
  {
    id: '2',
    title: 'never miss\na due date.',
    imagePath: require('../assests/protect.png'),
    imageback: require('../assests/green.jpeg'),
  },
  {
    id: '3',
    title: 'access to\ncurated products.',
    imagePath: require('../assests/curated.png'),
    imageback: require('../assests/blue.jpeg'),
  },
  {
    id: '4',
    title: 'more cash\nin your pockets.',
    imagePath: require('../assests/morecash.jpeg'),
    imageback: require('../assests/purple.jpeg'),
  },
];

const Waitlisted = props => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.flatlistView}>
        <Text style={styles.flatlistText}>{item.title}</Text>
        <Image source={item.imagePath} style={styles.img} />
        <Image source={item.imageback} style={styles.backimg} />
      </View>
    );
  };
  const actionItems = [
    {
      id: 1,
      label: 'change details',
      onPress: () => {},
    },
    {
      id: 2,
      label: 'support',
      onPress: () => {},
    },
    {
      id: 3,
      label: 'terms & condition',
      onPress: () => {},
    },
    {
      id: 4,
      label: 'privacy policy',
      onPress: () => {},
    },
    {
      id: 4,
      label: 'security',
      onPress: () => {},
    },
    {
      id: 4,
      label: 'logout',
      onPress: () => {
        props.navigation.navigate('Login');
      },
    },
  ];
  const [actionSheet, setActionSheet] = useState(false);
  const closeActionSheet = () => setActionSheet(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.help}
          activeOpacity={0.7}
          onPress={() => setActionSheet(true)}>
          <Text style={styles.helpText}>Help</Text>
        </TouchableOpacity>
        <Modal
          isVisible={actionSheet}
          style={{
            margin: 0,
            justifyContent: 'flex-end',
          }}>
          <ActionSheet actionItems={actionItems} onCancel={closeActionSheet} />
        </Modal>
        <Image
          source={require('../assests/credit.png')}
          style={styles.backgroundImage}
        />
        <Text style={styles.GoodText}>
          hey,{'\n'}good things{'\n'}are worth{'\n'}the wait.
        </Text>
        <Text style={styles.currently}>you are currently waitlisted.</Text>
        <TouchableOpacity
          style={styles.checkWhy}
          onPress={() => props.navigation.navigate('CheckWhy')}
        >
          <Text style={styles.checkText}>Check why?</Text>
        </TouchableOpacity>
        <Text style={styles.waitlisted}>
          Check your credit score in{' '}
          <Text style={{color: '#66cdaa'}}>5 days.</Text>
        </Text>
        <View style={styles.deserve}>
          <Image
            source={require('../assests/parachute.png')}
            style={styles.parachuteImage}
          />
          <Text
            style={[styles.GoodText, {fontSize: normalize(22), paddingTop: 5}]}>
            get what{'\n'}you deserve{'\n'}and more.
          </Text>
          <Text style={[styles.waitlisted, {color: '#ffffff'}]}>
            the most rewarding credit card{'\n'}experience awaits you.
          </Text>
        </View>
        <View style={{marginHorizontal: vw(25)}}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.members}>
            5.9 million + members{'\n'}pay on CRED every month.
          </Text>
          <Text style={styles.transactions}>100% secure transactions.</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assests/amarican.jpeg')}
              style={{width: vw(40), height: vh(30), margin: 15}}
            />
            <Image
              source={require('../assests/mastercard.png')}
              style={{width: vw(50), height: vh(30), marginTop: 15}}
            />
            <Image
              source={require('../assests/visa.png')}
              style={{width: vw(50), height: vh(30), margin: 15}}
            />
            <Image
              source={require('../assests/rupay.png')}
              style={{width: vw(100), height: vh(30), marginTop: 15}}
            />
          </View>
        </View>
        <Text style={styles.GoodText}>got questions?</Text>
        <Text style={styles.waitlisted}>
          being curious is a valuable{'\n'}skill.you will find your{'\n'}answers
          here.
        </Text>
        <TouchableOpacity
          style={styles.read}
          onPress={() => props.navigation.navigate('Read')}>
          <Text style={styles.readText}>Read FAQs</Text>
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
  GoodText: {
    color: '#ffffff',
    fontSize: normalize(30),
    fontWeight: 'bold',
    paddingHorizontal: vw(25),
    paddingTop: vh(20),
  },
  help: {
    borderColor: '#585858',
    backgroundColor: '#585858',
    borderWidth: vw(1),
    borderRadius: vw(25),
    width: '25%',
    height: vh(45),
    marginHorizontal: vw(25),
    marginVertical: vh(50),
    alignSelf: 'flex-end',
  },
  helpText: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: normalize(20),
    padding: 5,
  },
  backgroundImage: {
    position: 'absolute',
    width: vw(320),
    height: vh(320),
    top: vh(120),
    left: vw(70),
    bottom: 0,
    right: 0,
    opacity: 0.3,
  },
  waitlisted: {
    color: '#585858',
    fontSize: normalize(16),
    paddingTop: vh(10),
    paddingHorizontal: vw(25),
  },
  currently: {
    color: '#585858',
    fontSize: normalize(16),
    paddingTop: vh(10),
    paddingHorizontal: vw(25),
  },
  checkWhy: {
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    borderWidth: vw(1),
    borderRadius: vw(25),
    width: '40%',
    height: vh(45),
    marginHorizontal: vw(25),
    marginTop: vh(40),
  },
  checkText: {
    alignSelf: 'center',
    color: 'black',
    fontSize: normalize(20),
    padding: 5,
  },
  deserve: {
    borderWidth: vw(10),
    backgroundColor: '#1e90ff',
    borderColor: '#585858',
    shadowColor: 'black',
    marginVertical: vh(20),
    paddingVertical: vh(25),
  },
  parachuteImage: {
    position: 'absolute',
    width: vw(180),
    height: vh(140),
    top: vh(30),
    left: vw(160),
    bottom: 0,
    right: 0,
    opacity: 0.3,
  },
  img: {
    width: vw(200),
    height: vh(300),
    marginLeft: vw(15),
  },
  flatlistView: {
    borderWidth: vw(6),
    borderColor: '#585858',
    shadowColor: 'black',
    marginVertical: vw(15),
    paddingHorizontal: vw(15),
    borderRadius: vw(20),
  },
  flatlistText: {
    color: '#ffffff',
    fontSize: normalize(20),
    fontWeight: 'bold',
    margin: vw(15),
    marginLeft: vw(5),
  },
  backimg: {
    position: 'absolute',
    width: vw(240),
    height: vh(380),
    left: vw(1),
    bottom: 0,
    right: 0,
    opacity: 0.3,
  },
  card: {
    borderColor: '#ffffff',
    borderWidth: vw(1),
    borderRadius: vw(20),
    margin: vw(25),
    backgroundColor: '#ffffff',
  },
  members: {
    marginHorizontal: vw(25),
    marginTop: vh(20),
    fontWeight: 'bold',
    fontSize: normalize(15),
  },
  transactions: {
    marginHorizontal: vw(25),
    fontSize: normalize(12),
    marginTop: vh(30),
  },
  read: {
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
  readText: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: normalize(20),
    padding: 5,
    fontWeight: 'bold',
  },
});

export default Waitlisted;
