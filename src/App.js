import React,{Component} from 'react';
import {Text, View,StyleSheet, Button } from 'react-native';
import Banner from './components/banner';
import LoginForm from './components/loginform';
import firebase from 'firebase';
import{Spinner} from './components/common'

class App extends Component{
    state={
        loggedIn:null
    }
    componentDidMount(){
        //projemize firebase e ekledik
        //if (!firebase.apps.length) {}
        firebase.initializeApp({
            apiKey: "AIzaSyD_on2ODHUaN1PQn6QZuiQ8nxLML_koD14",
            authDomain: "authentication-8befa.firebaseapp.com",
            databaseURL: "https://authentication-8befa.firebaseio.com",
            projectId: "authentication-8befa",
            storageBucket: "authentication-8befa.appspot.com",
            messagingSenderId: "816181537798",
            appId: "1:816181537798:web:9859c4ec4b00f274732787"
        });
    
        firebase.auth().onAuthStateChanged((user)=>{
            const loggedIn = user ? true :false;
            this.setState({
                loggedIn
            })
        });
    
    }

    renderContent(){
        const {loggedIn} =this.state;

        switch(loggedIn){
            case true:
                return(
                <Button
                onPress={()=>firebase.auth().signOut()} 
                title='Logout'
                color='#E87B79'/>
                )
            case false:
                return(
                <LoginForm/>)

            default:
                return(
                    <Spinner/>
                )
        }
        
    }

    render(){
        return(
            <View style={styles.appContainer}>
                <Banner text='Authentication'/>
                {this.renderContent()}
            </View>
        )
    }
}

const styles= StyleSheet.create({
    appContainer:{
        backgroundColor:'#F3F3F3'
    }
});

export default App;