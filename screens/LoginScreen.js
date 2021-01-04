import React, {Component}from 'react';
import {Alert, Button, ImageBackground, StyleSheet, View, Text, TextInput, SafeAreaView, TouchableHighlight} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

class LoginScreen extends Component  {

    constructor(props){
        super(props);
        this.state = {username:'', password:'', pass:''};
    }

    // Login function 
    Login = () => {
        var email = this.state.email;
        var password = this.state.password;
        var pass = this.password;

        if(email.length == 0 || password.length == 0){
            Alert.alert("Login Failed", "Please enter email and password to login", [{text:"Okay"}]);
        }
        else{
            var databaseFileURI = "https://localhost/exam/db.php";

            var header = {
                'Accept':'application/json',
                'Content':'application/json'
            };

            var data = {
                email:email,
                password:password
            }

            fetch(
                databaseFileURI,
                {
                    method:'POST',
                    headers:header,
                    body: JSON.stringify(data)
                }
            ).then((response)=>response.json()
            ).then((response) =>
                {
                    this.setState({username:response[0].username});
                    this.setState({password:response[1].password});
                }
            ).catch((error) => { Alert.alert("Authentication Failed", "Error occured during authentication. Please try again", [{ text:"Try Again"}]); })

            if(password_verify(pass, password)){ 
                Alert.alert("Success", "Successfully logged in", [{text:"Okay"}]);
                // this.props.navigation.navigate('UserListScreen', { email: email });
            }
            else{
                Alert.alert("Incorrect Password", "Please enter the correct password", [{text:"Okay"}]);
            }

        } //end of else
    } //end of login function

    render()
    {
        return (
            <ImageBackground 
                style={ styles.background }
                source = { require("../assets/background-image.jpg") }
                width='100%'
                height='100%'          
            >
    
                <SafeAreaView style={ styles.window }>
    
                    <Text style={styles.title}> Login to Exam Portal</Text>
    
                    {/* input text fields */}
                    <View style={ styles.textField }>
                        <Icon name="mail" color="black" size={24}></Icon>
                        <TextInput
                            placeholder={"Enter Your Email"}
                            style={ styles.textInput }   
                            onChangeText={email=>this.setState({ email })} 
                        />
                        
                    </View>
    
                    <View style={ styles.textField }>
                        <Icon name="password" color="black" size={24}></Icon>
                        <TextInput
                            placeholder={"Enter Your Password"}
                            style={ styles.textInput } 
                            secureTextEntry   
                            onChangeText={password=>this.setState({password})}
                        />
    
                    </View>
    
                    {/* buttons */}
                    <TouchableHighlight style={ styles.loginButton }
                        onPress = {this.Login}
                    >
                        <View flexDirection='row'>
                            <Icon name="login" color="black" size={24}></Icon>
                            <Text style={ styles.buttonText}> Login </Text>
                        </View>                   
                    </TouchableHighlight>
    
                    <TouchableHighlight style={ styles.newButton}
                        onPress = { console.log("Register Pressed") }
                    >
                        <View flexDirection='row'>
                            <Icon name="mail" color="black" size={24}></Icon>
                            <Text style={ styles.buttonText}> Register </Text>
                        </View>
                    </TouchableHighlight>
    
                </SafeAreaView>
    
            </ImageBackground>
            
        );
    }
}

const styles = StyleSheet.create({
    background:{
        flex:1
    },
    loginButton:{
        alignSelf: 'center',
        width: '50%',
        height: 50,
        backgroundColor: '#F5F5F5',
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 35,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        top: 70,
        
    },
    newButton:{
        alignSelf: 'center',
        width: '50%',
        height: 50,
        backgroundColor: '#F5F5F5',
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 35,
        top:100,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText:{
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 30,
        
    },
    textInput:{
        backgroundColor: "#F5F5F5",
        height: 40,
        width: '85%',
        fontSize: 16,
        paddingLeft: 20,
        paddingBottom: 10
        
    },
    textField:{
        alignSelf: 'center',
        width: '80%',
        height: 60,
        backgroundColor: '#F5F5F5',
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 35,
        top:20,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 20,
    },
    window:{
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,

    },
    title:{
        fontSize: 25,
        color: '#F5F5F5',
        paddingBottom: 50,
    },
})

export default LoginScreen;