import React, { Component } from "react";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {StyleSheet,Text,View,Image,SafeAreaView,Button,Alert,Platform,StatusBar,Dimensions,TouchableOpacity,DrawerLayoutAndroid,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ApartarCubiculoStyles from './styles';

function ApartarCubiculo (props) {
    const navigationN = useNavigation();
    const tableHead = ['Head1', 'Head2', 'Head3', 'Head4'];
    const tableData = [
        ['Filtrado', 'Capacidad', 'Servicios Especiales'],
        ['Cubiculo 1', 'Capacidad: 3', 'JAWS'],
        ['Cubiculo 5', 'Capacidad: 6', 'NVDA'],
        ['Cubiculo 8', 'Capacidad: 4', 'Ninguno'],
        ['Cubiculo 12', 'Capacidad: 5', 'JAWS'],
        ['Cubiculo 17', 'Capacidad: 5', 'Lanbda 1.4'],
        ['Cubiculo 20', 'Capacidad: 5', 'Ninguno']
    ];

    function navBack()  {
        navigationN.navigate("Menu");
      }
    
    return (
        
        <View style={ApartarCubiculoStyles.container}>
            <View style={ApartarCubiculoStyles.banner}>
            <Image
                source={require('../Media/logoC.png')}
                style={{width: '50%', height: '60%', tintColor: 'white', alignSelf:'center'}}
            />
            </View>
            <Text style={{ textAlign: 'center',paddingBottom:25, fontSize:40,fontWeight:'bold',color:'white' }}>CubículosTEC</Text>
            
            <View style={ApartarCubiculoStyles.buttonView}>
            
            </View>

            <View style={ApartarCubiculoStyles.container}>
                <Table borderStyle={ApartarCubiculoStyles.border}>
                    <Row data={tableData[0]} style={ApartarCubiculoStyles.header} textStyle={ApartarCubiculoStyles.headerText} />
                    <Rows data={tableData.slice(1)} textStyle={ApartarCubiculoStyles.rowText} />
                </Table>
            </View>
            
            
        </View>
    );
}

export default ApartarCubiculo;
