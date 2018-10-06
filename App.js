//Import
import React from 'react';
import {View, Text, Button, AppRegistry} from 'react-native';


//funcoes
const geraNumeroAleatorio = () => {
  var numeroAleatorio = Math.random();
  alert(Math.floor(numeroAleatorio*100));
}

//Criar os componentes
export default App = () => {
  return (
    <View>  
      <Text>gerador de numeros randomicos</Text>
      <Button
        title ="Gerar um numero aleatorio"
        onPress={geraNumeroAleatorio} 
      />
    </View>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app1', () => App);