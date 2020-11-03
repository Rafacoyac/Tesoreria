import React from 'react';
import { Component } from 'react';
import {View,Text,StyleSheet,TextInput,Button} from 'react-native';
import {DataTable} from 'react-native-paper';

export default class Lista extends Component{
    constructor(props){
        super(props);
        this.state ={
            persona:[{nombre:'',cargo:'',x:''}]
        }
    }

    confirmar(){
        alert('¿Confirma la baja de esta persona?');
        
    }

    render(){
        const {navigate} = this.props.navigation;
        const {persona} = this.state;
    return(
        <View style={styles.Fondo}>
            <View style={styles.Header}>
                <Text style={styles.texto}>Buscar Integrante</Text>
            </View>
            <Text>{"\n"}</Text>
            
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <View style={{flex:0.3}}>
                <Text style={{fontSize:17}}>Codigo</Text>
                </View>
                <View style={{flex:0.3}}>
                    <TextInput placeholder="453"/>
                </View>
                <View style={{flex:0.2}}>
                    <Button title="Buscar"
                                        onPress={() => 
                                            this.setState({
                                              persona:[
                                                {
                                                  nombre:'Hector Morales',
                                                  cargo:'Aprendiz',
                                                  x:'Dar de baja'
                                                }
                                              ]
                                            })
                                            //alert(this.state.Usuario)} 
                                          }
                    />
                </View>
                
            </View>
            <Text>{"\n"}</Text>
            
            <View style={{flex:0.9}}>
            
        <DataTable >
        <DataTable.Header style={{backgroundColor: '#596C7E'}}>
        <DataTable.Title >Nombre</DataTable.Title>
        <DataTable.Title >Puesto</DataTable.Title>
        <DataTable.Title ></DataTable.Title>
        </DataTable.Header>
        {
            persona.map((inter,key) => (
                
            <DataTable.Row  >
           <DataTable.Cell >{inter.nombre}</DataTable.Cell>
           <DataTable.Cell >{inter.cargo}</DataTable.Cell>   
            <DataTable.Cell onPress={() => this.confirmar()}><Text style={{color:'blue'}}>{inter.x}</Text></DataTable.Cell>
           </DataTable.Row>
                
            ))
          }
        
         
    </DataTable>
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