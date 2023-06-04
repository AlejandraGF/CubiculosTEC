import React from 'react';
import {View,KeyboardAvoidingView,TextInput,Text,TouchableOpacity,TouchableWithoutFeedback,Button,Keyboard,Image} from 'react-native'; 
import {useState} from 'react';
import loginStyle from './styles';

function LoginScreen(props) {
  const [correo, setCorreo] = useState(''); 
  const [contrasena, setContrasena] = useState(''); 
  const loginPressed = {}
  const registerPressed = {}
  

    return (
        <KeyboardAvoidingView style={loginStyle.container}>
          <View style={loginStyle.inner}> 
            <View style={loginStyle.banner}> 
            <Image source={require('../Media/logoC.png')} style={{width:'50%',height:'60%', alignSelf:'center', tintColor: '#202021'}}/>
            </View>
            <View style={loginStyle.buttonView}>
            <TextInput ref={this.correoBoton}
              style={loginStyle.input}
              onChangeText={newCorreo => setCorreo(newCorreo)}
              defaultValue={correo}
              placeholder="Correo electrónico"
              placeholderTextColor = "black"
            />
            <TextInput ref={this.contrasenaBoton}
              secureTextEntry={true}
              style={loginStyle.input}
              onChangeText={newContrasena => setContrasena(newContrasena)}
              defaultValue={contrasena}
              placeholder="Contraseña"
              width= '90%'
              placeholderTextColor = "black"
            />
            <TouchableOpacity onPress={loginPressed}>
                  <View style={loginStyle.button}>
                    <Text style={loginStyle.buttonText}>Iniciar Sesión</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={registerPressed}>
                  <View style={loginStyle.button}>
                    <Text style={loginStyle.buttonText}>Registrarme</Text>
                  </View>
                </TouchableOpacity>
            </View>
          </View>
      </KeyboardAvoidingView>
    );
}




export default LoginScreen;