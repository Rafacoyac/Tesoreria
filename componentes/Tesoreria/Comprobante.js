import React, { Component } from "react";
import { StyleSheet,Text ,View,Image,Button} from "react-native";

function Baucher({navigation}){
    
        //const {navigate} = this.props.navigation;
        return(
            <View style={{  flex: 1 ,backgroundColor: '#FFFFFF' }}>
                <View style={styles.Header}>
                    <Text style={styles.texto}>Comprobante de pago</Text>
                </View>
                <Text>{"\n"}</Text>
                
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../../images/qr.png')}style={{ width: 200, height: 200,justifyContent: 'center'}}/>
                <Text >{"\n"}</Text>
                <Button style={{width:150,height:30}} title="Finalizar"  />
           
                </View>
            </View>
        );
    //}
}
export default Baucher;
const styles = StyleSheet.create({
    texto:{
        fontSize: 20,
        fontWeight: 'bold',
        color :'white'
    },texto:{
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
      boton:{
        width: 150,
        height: 20,
        justifyContent: 'center'
      }
});