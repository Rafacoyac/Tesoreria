
import React, { Component } from 'react';
import { TouchableOpacity, Text, Image,Button, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
//import { color } from 'react-native-reanimated';

function Login ({navigation}){
  /*constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }

  go = () => {
           const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(this.state.email) === true){
               alert('valid');
           }
           else{
               alert();
           }
 
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }
*/
//handleClick = () => {
  //some code
  //alert("Hola mundo");
  //return <Principal/>
// }
  //render() {
    return (
      <View style={styles.container}>
            <View>
                <Image source={require('../../images/compesctransp.png')} style={styles.tinyLogo}/>
            </View>

    <Text>{"\n"}</Text>
    <Text>{"\n"}</Text>
        <TextInput
          //value={this.state.username}
          //onChangeText={(username) => this.setState({ username })}
           //label='Email'
           placeholder = "Nombre de Usuario"
           //placeholderTextColor = "#FFFF"
          style={styles.input}
        />
        <TextInput
          //value={this.state.password}
          //onChangeText={(password) => this.setState({ password })}
          //label='Password'
          placeholder="Contraseña"
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Iniciar sesión'}
          //style={styles.input}
          //onPress={this.onLogin.bind(t)}
          onPress = {() => {
            navigation.navigate('Index')
            //this.handleClick(); //usual call like vanilla javascript, but uses this operator
         }}       
        />
        <TouchableOpacity>
                   <Text style={{color:'blue'}}>¿Ya tienes una cuenta?
                   <Text 
                   onPress = {() => {
                    navigation.navigate('Register')
                 }}   
                   >  Registrate aqui</Text>
                   </Text>
        </TouchableOpacity>
      </View>
    );
//  }
}
export default Login;
//AppRegistry.registerComponent('App', () => App)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    
  },
  
  input: {
    width: 200,
    height: 20,
    padding: 10,
    //borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputext: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    fontFamily : 'Arial',
    //borderWidth: 1,
    
    //borderColor: 'black',
    //marginBottom: 10,
  },
  tinyLogo: {
    //padding : -30,
    width: 120,
    height: 120,
  },
});