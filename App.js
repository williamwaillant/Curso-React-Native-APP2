//Import
import React from 'react';
import {View, Text, Button, AppRegistry, Image, TouchableOpacity, Alert} from 'react-native';


//formatacao
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeigth: 'bold'
  }
};

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  //frase
  var frases = Array();
  frases[0] = 'frase1';
  frases[1] = 'frase2';
  frases[2] = 'frase3';
  frases[3] = 'frase4';
  frases[4] = 'frase5';

  var fraseEscolhida = frases[numeroAleatorio];
  Alert.alert(fraseEscolhida);
}

//Criar os componentes
export default App = () => {
  const { principal, botao, textoBotao } = Estilos;

  return (
    <View style = {principal}>

      <Image source={require('./imgs/logo.png')}/>

      <TouchableOpacity
        onPress={gerarNovaFrase}
        style={botao}>

          <Text style={textoBotao}>Nova Frase</Text>

      </TouchableOpacity>

    </View>       
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);