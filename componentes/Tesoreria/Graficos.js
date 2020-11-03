
import React,{Component} from 'react';
import {TextInput,View,Text,StyleSheet, Dimensions, Image,Button,Tex} from 'react-native';

export default class Graficos extends Component{
    render(){
        return(
            <View style={{  flex: 1 ,backgroundColor: '#FFFFFF'}}>
                <View style={styles.Header}>
                   <Text style={styles.texto}>Ingresos</Text>
                </View>
        <Text>{"\n"}</Text>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                
                <Image source={require('../../images/descarga.png')}style={{justifyContent: 'center'}}></Image>
                
                
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000', 
        height: 50
      },
      texto:{
        fontSize: 20,
        fontWeight: 'bold',
        color :'white'
    },
});