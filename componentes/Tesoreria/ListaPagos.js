import React,{Component} from 'react';
import {View,Text,StyleSheet, Dimensions, Image,Button,Tex} from 'react-native';
export default class Deudores extends Component{
    render(){
        return(
            <View style={{  flex: 1 ,backgroundColor: '#FFFFFF'}}>
                <View style={styles.Header}>
                   <Text style={styles.texto}>Lista de Pagos</Text>
                </View>
                <View style={{flexDirection: "row", height: 100, padding: 20,borderBottomColor: 'white', borderBottomWidth: 1, }}>
                        
                        <View style={{ flex: 0.7 }}>
                            <Text >Nombre: Diego Flores</Text>
                            <Text style={{color:'#7C95AD'}}>Fecha de ultimo pago: 23/Septiembre/2020</Text>
                        </View> 
                        <View >
                           <Text style={{color:'blue'}}>$ 300.00</Text>
                        </View>
                        
                   </View>
                <View style={{flexDirection: "row", height: 100, padding: 20,borderBottomColor: 'white', borderBottomWidth: 1, }}>
                        
                        <View style={{ flex: 0.7 }}>
                            <Text >Nombre: Andres Morales</Text>
                            <Text style={{color:'#7C95AD'}}>Fecha de ultimo pago: 10/Agosto/2020</Text>
                        </View> 
                        <View >
                           <Text style={{color:'blue'}}>$ 550.00</Text>
                        </View>
                        
                   </View>
                   
                   <View style={{flexDirection: "row", height: 100, padding: 20,borderBottomColor: 'white', borderBottomWidth: 1, }}>
                        
                        <View style={{ flex: 0.7 }}>
                            <Text >Nombre: Ricardo Hernandez</Text>
                            <Text style={{color:'#7C95AD'}}>Fecha de ultimo pago: 06/Julio/2020</Text>
                        </View> 
                        <View >
                           <Text style={{color:'blue'}}>$ 700.00</Text>
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