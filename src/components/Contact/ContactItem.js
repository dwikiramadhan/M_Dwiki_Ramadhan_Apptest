import React from 'react';
import { useDispatch} from 'react-redux';

import { View } from 'react-native';
import { Avatar, Card, Title, List, Divider, Button, Text, Paragraph, Subheading } from 'react-native-paper';

import { editContact, deleteContact } from '../../redux/actions';

const ContactItem = (props) => {
    const dispatch = useDispatch()
    const { data } = props

    const doEditContact = async (id) => {
        let payload = {
          id
        }
        let result = dispatch(editContact(payload))
        console.log('berhasil Edit');
    };

    const doDeleteContact = async (id) => {
        let payload = {
          id
        }
        let result = dispatch(deleteContact(payload))
        console.log('berhasil delete');
    };
    return (
        <List.Item
            title={ data.firstName + ' '+ data.firstName}
            description={ data.age + ' th'}
            left={props => <List.Icon {...props} icon="credit-card-check-outline" color='#03DAC6' />}
            right={props => (
                <>
                    <Button mode="text" style={{ paddingHorizontal: 0 }} labelStyle={{ fontSize: 10 }} onPress={() => doEditContact(data.id)}>View</Button>
                    <Button mode="text" labelStyle={{ fontSize: 10 }} onPress={() => doEditContact(data.id)}>Edit</Button>
                    <Button mode="text" labelStyle={{ fontSize: 10, color: "red" }} onPress={() => doDeleteContact(data.id)} >Delete</Button>
                </>
            )}
        />
    );
}

export default ContactItem