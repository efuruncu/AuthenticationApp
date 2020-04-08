import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {Input,Spinner} from './common';
import firebase from 'firebase';

class LoginForm extends Component{
    state ={
        email:'',
        password:'',
        error:'',
        loading:false
    }

    onButtonClicked(){
        const{email,password}=this.state;
        this.setState({
            error:'',
            loading:true
        })
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))    
            .catch(this.onLoginFailed.bind(this))
        });
    }

    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            error:'',
            loading:false  
        })
    }
    onLoginFailed(){
        this.setState({
        error:'Authentication failed.',
        loading:false
        })
    }

    render(){
        const {error,loading}=this.state;
        const errorMsg =error ? (
        <Text style={styles.errorStyle}>{error}</Text>
        ):
        null;

        const loginButton= loading ?(
            <Spinner/>
        ):(
            <Button color='#E87879' title='Login'
                    onPress={this.onButtonClicked.bind(this)}
                    />
        )

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
                    {loginButton}
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
