import React from 'react';
import { Component } from 'react';
import { useNavigation,NavigationContainer } from '@react-navigation/native';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button
  } from 'react-native';
//import { DataTable,TextInput } from 'react-native-paper';

//const navigation = useNavigation();
class Nuevo extends Component{
  constructor(props){
    super(props);
  }
//const Minutas = ({navigation}) => {
  render(){
    return(
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
            <ScrollView  style={styles.scrollView}>
            <View style={{ flex:1, backgroundColor: '#FFFFFF' }}>
            <View style={styles.Header}>
                <Text style={styles.texto}>Nuevo integrante</Text>
            </View>
            <Text>{"\n"}</Text>
            <View style={{flexDirection:"row", alignItems: 'center',justifyContent:'center',backgroundColor: '#FFFFFF'}}>
                <View style={{flex:0.2}}>
                    <Text>Nombre: </Text>
                </View>
                <View style={{flex:0.7}}>
                    <TextInput 
                        placeholder="Juan"
                        style={{backgroundColor: '#FFFFFF'}}
                    /> 
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems: 'center',justifyContent:'center'}}>
                <View style={{flex:0.2}}>
                    <Text>Apellidos: </Text>
                </View>
                <View style={{flex:0.7}}>
                    <TextInput 
                        placeholder="Morales Flores"
                    /> 
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems: 'center',justifyContent:'center'}}>
                <View style={{flex:0.2}}>
                    <Text>Direcccion: </Text>
                </View>
                <View style={{flex:0.7}}>
                    <TextInput 
                        placeholder="Ave. Maximino Avila Camacho, No. 45"
                    /> 
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems: 'center',justifyContent:'center'}}>
                <View style={{flex:0.2}}>
                    <Text>Colonia: </Text>
                </View>
                <View style={{flex:0.7}}>
                    <TextInput 
                        placeholder="Col. Centro"
                    /> 
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems: 'center',justifyContent:'center'}}>
                <View style={{flex:0.2}}>
                    <Text>Municipio o Ciudad: </Text>
                </View>
                <View style={{flex:0.7}}>
                    <TextInput 
                        placeholder="Puebla"
                    /> 
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems: 'center',justifyContent:'center'}}>
                <View style={{flex:0.2}}>
                    <Text>Estado: </Text>
                </View>
                <View style={{flex:0.7}}>
                    <TextInput 
                        placeholder="Puebla"
                    /> 
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems: 'center',justifyContent:'center'}}>
                <View style={{flex:0.2}}>
                    <Text>Telefono: </Text>
                </View>
                <View style={{flex:0.7}}>
                    <TextInput 
                        placeholder="(221) 345 3245"
                    /> 
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems: 'center',justifyContent:'center'}}>
                <View style={{flex:0.2}}>
                    <Text>Correo: </Text>
                </View>
                <View style={{flex:0.7}}>
                    <TextInput 
                        placeholder="ejemplocorreo@gmail.com"
                    /> 
                </View>
            </View>
           <View style={{alignItems:'center'}}>
               <Button
                    title="Agregar"
                    
                />
           </View>
           
            
        </View>
        
            </ScrollView>
        </SafeAreaView>
        </>

    );
}
}

export default Nuevo;
const styles = StyleSheet.create({
    container: {
      //flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#596C7E',
      
    },
    texto:{
      fontSize: 20,
      fontWeight: 'bold',
      color :'white'
  },
  texto1:{
    fontSize: 15,
    fontWeight: 'bold',
    color :'white',
    justifyContent: 'center'
},
    Header: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000', 
      height: 50
    },
   
    input: {
        
        margin: 5,
        height: 60,
        width : 350,
        backgroundColor: '#596C7E',
        color: "white",
        //borderColor: '#7a42f4',
        borderWidth: 0
     },
    inputext: {
      width: 200,
      height: 44,
      padding: 10,
      textAlign:'center',
      fontWeight:'bold',
      fontFamily : 'Arial',
        },
    tinyLogo: {
      //padding : -30,
      width: 120,
      height: 120,
    },
    boton:{
      width: 150,
      height: 20,
      justifyContent: 'center'
    }
  });