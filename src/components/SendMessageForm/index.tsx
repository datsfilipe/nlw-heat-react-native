import React, { useState } from 'react';

import { Alert, Keyboard, TextInput, View } from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button'

import { styles } from './styles';

export function SendMessageForm(){
  const [message, setMessage] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)

  async function handleMessageSubmit () {
    const messageFormatted = message.trim()
       
    if (messageFormatted.length > 0) {
      setSendingMessage(true)
      
      await api.post('/messages', { message: messageFormatted })

      setMessage('')

      Keyboard.dismiss()
      setSendingMessage(false)
      Alert.alert('Mensagem enviada!')
    } else {
      Alert.alert('Você deve escrever algo para enviar.')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardAppearance='dark'
        placeholder='Qual sua expectativa para o DoWhile 2020? 🚀'
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        onChangeText={setMessage}
        value={message}
        maxLength={140}
        editable={!sendingMessage}
      >
        
      </TextInput>
      <Button
        title='ENVIAR MENSAGEM'
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
      >

      </Button>
    </View>
  );
}