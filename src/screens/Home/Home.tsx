import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { styles } from "./Styles";
import { BatIcon } from "../../components/BatIcon/BatIcon";
import { BatTextInput } from "../../components/TextInput/BatTextInput";
import { BatButton } from "../../components/Button/BatButton";


export default function Home(){
    return(
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatIcon/>
            </View>

            <View style={styles.inputContainer}>
                <BatButton/>
            </View>

            <StatusBar style="light"/>
        </View>
    )
}