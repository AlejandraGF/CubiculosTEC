import React, { useRef, useState, useEffect } from 'react';
import { Switch, Text, View, TextInput,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';
import MainScreenStyles from '../MainMenu/styles';
import SharedStyles from '../Shared';

function EditCubiculo(route) {
    const navigationN = useNavigation();

    const cub = route.route.params
    console.log(route.route.params)
    const [isEnabled, setIsEnabled] = useState("Ocupado" == cub.estado ? false : true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (

        <View style={MainScreenStyles.container}>
            <View style={MainScreenStyles.appHeader}>

            </View>
            <Text style={{ textAlign: 'center', paddingBottom: 25, fontSize: 40, fontWeight: 'bold', color: 'white' }}>CubículosTEC</Text>


            <View style={MainScreenStyles.pageView}>

                <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 15}}>Editar Cubiculo</Text>
                <View style={{ alignItems: 'center', justifyContent: 'space-around', }}>

                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 30 }}>Nombre :</Text>
                    <TextInput
                        style={MainScreenStyles.input}
                        defaultValue={cub.nombre}
                        placeholderTextColor="black"
                    />
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 40, marginBottom: 30 }}>Capacidad :</Text>
                    <TextInput
                        keyboardType={"numeric"}
                        style={MainScreenStyles.input}
                        defaultValue={"" + cub.capacidad}
                        placeholderTextColor="black"
                    />
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 40 }}>Estado : {isEnabled? "Libre" : "Ocupado"}</Text>
                    <Switch
                        trackColor={'#81b0ff'}
                        thumbColor={'#f4f3f4'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                    <TouchableOpacity onPress={() => navigationN.navigate("EditCubiculo", post)}>
                        <View style={MainScreenStyles.buttonAcept}>
                            <Text style={{ fontSize: 20, color: "white" }}>Confirmar</Text>
                        </View>
                    </TouchableOpacity>


                </View>




            </View>
        </View>
    );
}

export default EditCubiculo;