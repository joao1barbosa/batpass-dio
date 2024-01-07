import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './BatIconStyles';
import batIcon from '../../../assets/bat-icon.png';

export function BatIcon() {
  return (
    <>
        <Text style={styles.title}>
            BATPASS GENERATOR
        </Text>
        <Image source={batIcon} style={styles.icon}/>
    </>
  );
}