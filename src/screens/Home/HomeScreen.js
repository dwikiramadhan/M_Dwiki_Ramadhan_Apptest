import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    View,
    StyleSheet,
    Alert
} from 'react-native';

import { FAB, Modal, Portal, TextInput } from 'react-native-paper';
  
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ContactItem from '../../components/Contact/ContactItem';

import { Avatar, Card, Title, List, Divider, Button, Text, Paragraph, Subheading } from 'react-native-paper';

import { loadContact, addContact } from '../../redux/actions';

const HomeScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const dispatch = useDispatch()

    const datas = useSelector(state => state.contacts)
    useEffect(() => {
        dispatch(loadContact())
    }, [dispatch])

    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    const [fn, setFn] = useState('');
    const [ln, setLn] = useState('');
    const [age, setAge] = useState(0);
    const [photo, setPhoto] = useState('');

    const doStoreContact = async () => {
      setVisible(!visible);
      let payload = {
        firstName: fn,
        lastName: ln,
        age: age,
        photo: photo
      }
      dispatch(addContact(payload))
      dispatch(loadContact())
      Alert.alert(
        "Successfully",
        "Store data success!",
      );
    };

    return (
      <>
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View>
                  {
                    datas && datas.length > 0 ?
                    datas.map((item, index) =>
                      <ContactItem
                        key={index}
                        data={item}
                      />
                    ) : <Text>Tidak masuk</Text>
                  }
                </View>
            </ScrollView>
        </SafeAreaView>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Text>Add Contact</Text>
            <TextInput
                label="First Name"
                value={fn}
                mode="outlined"
                onChangeText={fn => setFn(fn)}
            />
            <TextInput
                label="Last Name"
                value={ln}
                mode="outlined"
                onChangeText={ln => setLn(ln)}
            />
            <TextInput
                label="Age"
                value={age}
                mode="outlined"
                keyboardType="phone-pad"
                onChangeText={age => setAge(age)}
            />
            <TextInput
                label="photo"
                value={photo}
                mode="outlined"
                onChangeText={photo => setPhoto(photo)}
            />
            <Button mode="contained" style={{ marginTop: 20 }} onPress={() => doStoreContact()}>
              Simpan
            </Button>
          </Modal>
        </Portal>
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={showModal}
        />
      </>
    );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 0,
    right: 25,
    bottom: 25,
  },
})

export default HomeScreen