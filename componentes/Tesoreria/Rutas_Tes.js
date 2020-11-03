import React from 'react';
import {View, Button} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Login from '../Tesoreria/Login';
import Register from '../Tesoreria/Registro';

//Cabranza
//import Index from './Principal';

//Secretaria
//import Index from './Secre/Principal_Secre';

import { color } from 'react-native-reanimated';
import Index from '../Tesoreria/Principal';


const Routes = ({navigation}) => (
   
   <Router >
      <Scene key = "root">
         <Scene key = "Login"  component = {Login} title = "Iniciar Seción" hideNavBar={true} initial = {true}/>
         <Scene key = "Register" component = {Register} title = "Crear cuenta" />
         <Scene key ="Index" component = {Index} title = "Inicio" hideNavBar={true}/>
        
        
      </Scene>
   </Router>
   
   
)
export default Routes;
