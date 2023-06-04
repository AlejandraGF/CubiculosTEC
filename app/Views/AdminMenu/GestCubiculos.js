import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions, TouchableOpacity, DrawerLayoutAndroid, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';
import MainScreenStyles from '../MainMenu/styles';
import SharedStyles from '../Shared';

function GestCubiculos(props) {
    const navigationN = useNavigation();


    function botonListaApartados() {
        //navigationN.navigate("T");
    }
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (

        <View style={MainScreenStyles.container}>
            <View style={MainScreenStyles.appHeader}>

            </View>
            <Text style={{ textAlign: 'center', paddingBottom: 25, fontSize: 40, fontWeight: 'bold', color: 'white' }}>CubículosTEC</Text>


            <View style={MainScreenStyles.pageView}>

                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Gestión de Cubiculos</Text>
                <View style={{width: "90%",alignSelf: "center"}}>
                <SearchBar
                    placeholderTextColor={"black"}
                    inputStyle={{ color: "black" }}
                    searchIcon={{ color: "black" }}
                    cancelIcon={{ color: "black" }}
                    containerStyle={{ borderRadius: 10,backgroundColor: "white", borderBottomColor: "white", borderTopColor: "white"}}
                    inputContainerStyle={{ backgroundColor: SharedStyles.colorBG }}
                    placeholder="Type Here..."
                    onChangeText={updateSearch}
                    value={search}
                />
            </View>
            <View style={MainScreenStyles.cubContainer}>
            <Text style={{fontSize: 30, fontWeight: 'bold' }}>Cubículo 1</Text>
            <Text style={{fontSize: 20 }}>Capacidad: 1</Text>
            <View style={{marginTop: 15,flexDirection: "row",alignSelf: "center",justifyContent: "space-between",width: "80%"}}>
            <TouchableOpacity onPress={botonListaApartados}>
                  <View style={MainScreenStyles.buttonAcept}>
                    <Text style={{fontSize: 20, color: "white" }}>Editar</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={botonListaApartados}>
                  <View style={MainScreenStyles.buttonDelete}>
                    <Text style={{fontSize: 20, color: "white" }}>Eliminar</Text>
                  </View>
                </TouchableOpacity>
            </View>

  
            </View>



            </View>

        </View>
    );
}

export default GestCubiculos;
