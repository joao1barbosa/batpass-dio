import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../TextInput/BatTextInput';
import generatePass from '../../services/passwordServices';
import * as Clipboard from 'expo-clipboard';

export function BatButton() {
  const [pass, setPass] = useState('');

  function handleGenerateButton(){
    const generateToken = generatePass();
    setPass(generateToken);
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      <BatTextInput pass={pass}/>
      <Pressable
        onPress={handleGenerateButton}
        style={styles.button}
      >
        <Text style={styles.text}>Generate</Text>
      </Pressable>

      <Pressable
        onPress={handleCopyButton}
        style={styles.button}
      >
        <Text style={styles.text}>Copy</Text>
      </Pressable>
    </>
  );
}