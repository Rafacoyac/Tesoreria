import React from 'react';
import { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';

export default class Lista extends Component{
    render(){
    return(
        <View style={styles.Fondo}>
            <View style={styles.Header}>
                <Text style={styles.texto}>Lista de integrantes de la Logia</Text>
            </View>
            <Text>{"\n"}</Text>
            
            <Text>{"\n"}</Text>
            
            <View style={{flex:0.9}}>
            <View style={{alignItems:'center',justifyContent:'center'}}>
        <DataTable >
        <DataTable.Header style={{backgroundColor: '#596C7E'}}>
        <DataTable.Title >Nombre</DataTable.Title>
        <DataTable.Title >Puesto</DataTable.Title>
        <DataTable.Title >Estado</DataTable.Title>
        
        </DataTable.Header>
        <DataTable.Row>
           <DataTable.Cell >Fabian Romero</DataTable.Cell>
           <DataTable.Cell >Maestro</DataTable.Cell>
           <DataTable.Cell >Activo</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
           <DataTable.Cell >Jerge Galvez</DataTable.Cell>
           <DataTable.Cell >Maestro</DataTable.Cell>
           <DataTable.Cell >Activo</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
           <DataTable.Cell >Angel Ruiz</DataTable.Cell>
           <DataTable.Cell >Maestro</DataTable.Cell>
           <DataTable.Cell >Activo</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
           <DataTable.Cell >Diego Flores</DataTable.Cell>
           <DataTable.Cell >Aprendiz</DataTable.Cell>
           <DataTable.Cell >Activo</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
           <DataTable.Cell >Natali Gonzalez</DataTable.Cell>
           <DataTable.Cell >Aprendiz</DataTable.Cell>
           <DataTable.Cell >Activo</DataTable.Cell>
        </DataTable.Row>
         
    </DataTable>
</View>
            </View>
       
        </View>
    );
    }
}

const styles = StyleSheet.create({
    Fondo: {
        flex: 1,
        
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        
      },
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
    input: {
        
        margin: 5,
        height: 60,
        width :20,
        //: '#596C7E',
        //color: "white",
        backgroundColor: '#FFFFFF',
        borderWidth: 0
     }
    
});