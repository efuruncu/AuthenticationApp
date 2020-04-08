import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {Input} from './common';
import firebase from 'firebase';

class LoginForm extends Component{
    state ={
        email:'',
        password:'',
        error:''
    }

    onButtonClicked(){
        const{email,password}=this.state;
        this.setState({
            error:''
        })
        firebase.auth().signInWithEmailAndPassword(email,password)
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .catch(()=>{
                    console.log('hata'); //TODO
                    this.setState({
                        error:'Authentication failed.'
                    })
            })
        });
    }

    render(){
        const {error}=this.state;
        const errorMsg =error ? (
        <Text style={styles.errorStyle}>{error}</Text>
        ):
        null;
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
                   {errorMsg}
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

},
errorStyle:{
    fontSize:20,
    color:'red',
    padding:5,
    alignSelf:"center"
}
});

export default LoginForm;
