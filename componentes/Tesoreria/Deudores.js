import React,{Component} from 'react';
import {View,Text,StyleSheet, Dimensions, Image,Button,Tex} from 'react-native';
export default class Deudores extends Component{
    render(){
        return(
            <View style={{  flex: 1 ,backgroundColor: '#FFFFFF'}}>
                <View style={styles.Header}>
                   <Text style={styles.texto}>Deudores</Text>
                </View>
                <View style={{flexDirection: "row", height: 100, padding: 20,borderBottomColor: 'white', borderBottomWidth: 1, }}>
                        <View style={{ flex: 0.3 }}>
                            <Image source={require('../../images/login.jpg')}style={{ borderRadius:50, width: 50, height: 50,justifyContent: 'center'}}></Image>
                        </View> 
                        <View style={{ flex: 0.7 }}>
                            <Text >Diego Flores</Text>
                            <Text style={{color:'#7C95AD'}}>Fecha de ultimo pago: 23/Septiembre/2020</Text>
                        </View> 
                        <View >
                           <Text style={{color:'red'}}>$ 300.00</Text>
                        </View>
                        
                   </View>
                <View style={{flexDirection: "row", height: 100, padding: 20,borderBottomColor: 'white', borderBottomWidth: 1, }}>
                        <View style={{ flex: 0.3 }}>
                            <Image source={require('../../images/login.jpg')}style={{ borderRadius:50, width: 50, height: 50,justifyContent: 'center'}}></Image>
                        </View> 
                        <View style={{ flex: 0.7 }}>
                            <Text >Andres Morales</Text>
                            <Text style={{color:'#7C95AD'}}>Fecha de ultimo pago: 10/Agosto/2020</Text>
                        </View> 
                        <View >
                           <Text style={{color:'red'}}>$ 550.00</Text>
                        </View>
                        
                   </View>
                   
                   <View style={{flexDirection: "row", height: 100, padding: 20,borderBottomColor: 'white', borderBottomWidth: 1, }}>
                        <View style={{ flex: 0.3 }}>
                            <Image source={require('../../images/login.jpg')}style={{ borderRadius:50, width: 50, height: 50,justifyContent: 'center'}}></Image>
                        </View> 
                        <View style={{ flex: 0.7 }}>
                            <Text >Ricardo Hernandez</Text>
                            <Text style={{color:'#7C95AD'}}>Fecha de ultimo pago: 06/Julio/2020</Text>
                        </View> 
                        <View >
                           <Text style={{color:'red'}}>$ 700.00</Text>
                        </View>
                        
                   </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 20,
        fontWeight: 'bold',
        color :'white'
    },
    Header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000', 
        height: 50
      },
});