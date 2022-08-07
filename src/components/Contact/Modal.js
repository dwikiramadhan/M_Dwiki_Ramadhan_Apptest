import React, { useEffect, useState } from 'react';

import { Modal } from 'react-native-paper';

const ModalScreen = () => {
    const [visible, setVisible] = useState(false);
    
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    return (
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
    )
}

export default ModalScreen