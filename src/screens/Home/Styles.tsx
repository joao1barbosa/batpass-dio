import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    appContainer:{
        flex: 1,
        width:'100%',
        backgroundColor: '#2b2b2b',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:"black",
        borderWidth:2
    },
    logoContainer:{
        flexDirection:'column',
        alignItems:'center',
        borderColor: '#e7a80b',
        borderWidth: 2,
        borderRadius:20,
        alignSelf: 'center',
        paddingTop:20,
        paddingBottom: 10,
        marginBottom:20
    },
    inputContainer:{
        width: "80%",
        flexDirection: "column",
        alignItems:'center'
    }
});