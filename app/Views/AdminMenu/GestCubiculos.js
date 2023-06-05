import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions, TouchableOpacity, DrawerLayoutAndroid, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';
import MainScreenStyles from '../MainMenu/styles';
import SharedStyles from '../Shared';

function GestCubiculos(props) {
    const navigationN = useNavigation();

    //Mauricio S
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const url = "http://192.168.18.10:3000/cubiculos";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])

    //
    function navGestAsig()  {
        navigationN.navigate("EditCubiculo");
      }


    function botonListaApartados(e) {
        navigationN.navigate("Menu",e);
    }
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
        console.log("buscando"+search)
        filter()
    };
    const filter = () => {
        filtrarLista(data,search);
    };
    function filtrarLista(lista, terminoBusqueda) {
        // Convertir el término de búsqueda a minúsculas para una búsqueda insensible a mayúsculas
        terminoBusqueda = terminoBusqueda.toLowerCase();
      
        // Filtrar la lista de objetos
        const resultadoFiltrado = lista.filter(objeto => {
          // Verificar si alguna de las propiedades del objeto contiene el término de búsqueda
          for (let propiedad in objeto) {
            if (objeto.hasOwnProperty(propiedad)) {
              const valor = objeto[propiedad];
      
              // Convertir el valor de la propiedad a minúsculas para una búsqueda insensible a mayúsculas
              const valorMinusculas = valor.toString().toLowerCase();
      
              // Verificar si el término de búsqueda se encuentra en el valor de la propiedad
              if (valorMinusculas.includes(terminoBusqueda)) {
                return true;
              }
            }
          }
      
          return false;
        });
        console.log(resultadoFiltrado)
        setData(resultadoFiltrado);
      }

    return (

        <View style={MainScreenStyles.container}>
            <View style={MainScreenStyles.appHeader}>

            </View>
            <Text style={{ textAlign: 'center', paddingBottom: 25, fontSize: 40, fontWeight: 'bold', color: 'white' }}>CubículosTEC</Text>


            <View style={MainScreenStyles.pageView}>

                <Text style={MainScreenStyles.titulo}>Gestión de Cubiculos</Text>
                <View style={{ width: "90%", alignSelf: "center" }}>
                    <SearchBar
                        placeholderTextColor={"black"}
                        inputStyle={{ color: "black" }}
                        searchIcon={{ color: "black" }}
                        cancelIcon={{ color: "black" }}
                        containerStyle={{ borderRadius: 10, backgroundColor: "white", borderBottomColor: "white", borderTopColor: "white" }}
                        inputContainerStyle={{ backgroundColor: SharedStyles.colorBG }}
                        placeholder="Buscar..."
                        onChangeText={updateSearch}
                        value={search}
                    />
                </View>

                <ScrollView >
                    {
                        loading ? (<Text> Cargando... </Text>) : (
                            data.map((post) => (
                                <View style={MainScreenStyles.cubContainer}  key={post.idCubiculo}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{post.nombre}</Text>
                                    <Text style={{ fontSize: 20 }}>Capacidad: {post.capacidad}</Text>
                                    <View style={{ marginTop: 15, flexDirection: "row", alignSelf: "center", justifyContent: "space-between", width: "80%" }}>
                                        <TouchableOpacity onPress={() => navigationN.navigate("EditCubiculo",post)}>
                                            <View style={MainScreenStyles.buttonAcept}>
                                                <Text style={{ fontSize: 20, color: "white" }}>Editar</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={botonListaApartados}>
                                            <View style={MainScreenStyles.buttonDelete}>
                                                <Text style={{ fontSize: 20, color: "white" }}>Eliminar</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            ))
                        )}
                </ScrollView>
            </View>
        </View>
    );
}

export default GestCubiculos;
