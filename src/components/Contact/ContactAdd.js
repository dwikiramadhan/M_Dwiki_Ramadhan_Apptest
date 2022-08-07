import React, { useEffect, useState } from 'react';
import {  SafeAreaView, ScrollView, RefreshControl, Text, View, FlatList } from 'react-native';
import { Avatar, TextInput } from 'react-native-paper';

const ContactAdd = ({navigation}) => {
    const [text, setText] = useState('');
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <ScrollView>
              <View style={{padding: 15}}>
                <TextInput
                    label="Email"
                    value={text}
                    mode="outlined"
                    onChangeText={text => setText(text)}
                />
              </View>
          </ScrollView>
      </SafeAreaView>
    );
}

export default ContactAdd

