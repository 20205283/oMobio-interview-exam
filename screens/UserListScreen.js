import React, {Component}from 'react';
import {Alert, Button, ImageBackground, StyleSheet, View, Text, TextInput, SafeAreaView, TouchableHighlight} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

class UserListScreen extends Component  {

    constructor(props){
        super(props);
        this.state = {email:'', id:'', name:'', username:''};
    }

    // Data View function 
    Dataview = () => {
        var email = this.state.email;
        var name = this.state.name;
        var id = this.state.id;
        var username = this.state.username;

        if(email.length == 0){
            Alert.alert("Error", "Cannot Fetch Data", [{text:"Okay"}]);
        }
        else{
            var databaseFileURI = "https://localhost/exam/Auth.php";

            var header = {
                'Accept':'application/json',
                'Content':'application/json'
            };

            var data = {
                email:email
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
                    this.setState({id:response[0].id});
                    this.setState({email:response[1].email});
                    this.setState({username:response[2].username});
                    this.setState({name:response[3].name});

                }
            ).catch((error) => { Alert.alert("Failed to Fetch data", "Error occured while fetching your data. Refresh.", [{ text:"Okay"}]); })

        } //end of else
    } //end of data view function

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
                        <Icon name="profile" color="black" size={24}></Icon>
                        <Text>ID</Text>
                    </View>
    
                    <View style={ styles.textField }>
                        <Icon name="profile" color="black" size={24}></Icon>
                        <Text>Username</Text>
                    </View>

                    <View style={ styles.textField }>
                        <Icon name="profile" color="black" size={24}></Icon>
                        <Text>Name</Text>
                    </View>

                    <View style={ styles.textField }>
                        <Icon name="mail" color="black" size={24}></Icon>
                        <Text> Email </Text>
                        
                    </View>
    
                    {/* buttons */}
                    <TouchableHighlight style={ styles.loginButton }
                        onPress = {this.Dataview}
                    >
                        <View flexDirection='row'>
                            <Icon name="back" color="black" size={24}></Icon>
                            <Text style={ styles.buttonText}> View Data </Text>
                        </View>                   
                    </TouchableHighlight>

                    <TouchableHighlight style={ styles.loginButton }
                        // onPress = {this.props.navigation.navigate('LoginScreen')}
                    >
                        <View flexDirection='row'>
                            <Icon name="back" color="black" size={24}></Icon>
                            <Text style={ styles.buttonText}> Go Back </Text>
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
    buttonText:{
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 30,
        
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

export default UserListScreen;