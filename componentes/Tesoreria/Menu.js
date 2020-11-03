import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Iniciaciones from './Iniciaciones';
import Compras from './Compras';
import Deudores from './Deudores';
import Pagos from './Pagos';
import Baucher from './Comprobante';
import Graficos from './Graficos';
import Lista from './Lista';
import Bajas from './Bajas';
import Buscar from './Buscar';
import ListaP from './ListaPagos';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Nuevo" component={Iniciaciones} />
        <Drawer.Screen name="Pagos" component={Pagos}/>
        <Drawer.Screen name="Compras" component={Compras} />   
        <Drawer.Screen name="ListaP" component={ListaP} options={{title:'Lista de pagos'}}/>
        <Drawer.Screen name="Deudores" component={Deudores}/>    
        <Drawer.Screen name="Graficos" component={Graficos}/>
        <Drawer.Screen name="Lista Activos" component={Lista}/>
        <Drawer.Screen name="Lista Bajas" component={Bajas}/>
        <Drawer.Screen name="Buscar" component={Buscar}/>
        <Drawer.Screen name="Comprobante" component={Baucher}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
