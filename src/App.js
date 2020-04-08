import React,{Component} from 'react';
import {Text, View,StyleSheet } from 'react-native';
import Banner from './components/banner';
import LoginForm from './components/loginform';

class App extends Component{
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