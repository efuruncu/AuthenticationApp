import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {Input} from './common';
import firebase from 'firebase';

class LoginForm extends Component{
    state ={
        email:'',
        password:''
    }

    onButtonClicked(){
        const{email,password}=this.state;
        firebase.auth().signInWithEmailAndPassword(email,password)
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .catch(()=>{
                    console.log('hata'); //TODO
            })
        });
    }

    render(){
        return(
<View style={{padding:30}}> 
    <View>
        <Input text='E-mail' inputPlaceHolder='Enter E-mail'
        onChangeText={(text)=>{
            this.setState({
                email:text
            })
        }}
        value={this.state.email}
        />
    </View>
    <View>
        <Input text='Password' inputPlaceHolder='Enter Password'
        onChangeText={(text)=>{
            this.setState({
                password:text
            })
        }}
        inputSecureTextEntry
        value={this.state.password}
        />
    </View>
    <View style={styles.buttonWrapper}>
        <Button color='#E87879' title='Login'
        onPress={this.onButtonClicked.bind(this)}
        />
    </View>
</View>
        )
    }
}

const styles=StyleSheet.create({
buttonWrapper:{
    marginTop:20,
    height:49,
    borderRadius:10,
    backgroundColor:'white',
    justifyContent:'center',
    fontSize:18

}
});

export default LoginForm;
