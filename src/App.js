import React,{Component} from 'react';
import {Text, View,StyleSheet } from 'react-native';
import Banner from './components/banner';
import LoginForm from './components/loginform';
import firebase from 'firebase';

class App extends Component{
    componentDidMount(){
        //projemize firebase e ekledik
firebase.initializeApp({
    apiKey: "AIzaSyD_on2ODHUaN1PQn6QZuiQ8nxLML_koD14",
    authDomain: "authentication-8befa.firebaseapp.com",
    databaseURL: "https://authentication-8befa.firebaseio.com",
    projectId: "authentication-8befa",
    storageBucket: "authentication-8befa.appspot.com",
    messagingSenderId: "816181537798",
    appId: "1:816181537798:web:9859c4ec4b00f274732787"
});
    }

    render(){
        return(
            <View style={styles.appContainer}>
                <Banner text='Authentication'/>
                <LoginForm/>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    appContainer:{
        backgroundColor:'#F3F3F3'
    }
})

export default App;