import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {Input} from './common';

class LoginForm extends Component{
    state ={
        email:'',
        password:''
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
        <Button color='#E87879' title='Login'/>
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
