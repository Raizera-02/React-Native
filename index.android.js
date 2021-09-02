//Import
import React from 'react';
import { Text, AppRegistry, View, Image,TouchableOpacity, Alert } from 'react-native';

//Formatações
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
    marginTop: 20,
    elevation: 14
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {

  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 10);

  // frases
  var frases = Array();
  frases[0] = 'Enquanto houver vontade de lutar haverá esperança de vencer.';
  frases[1] = 'Imagine uma nova história para sua vida e acredite nela.';
  frases[2] = 'O importante não é vencer todos os dias, mas lutar sempre.';
  frases[3] = 'Vida é brisa passageira, então faça valer a pena.';
  frases[4] = 'O medo de perder tira a vontade de ganhar.';
  frases[5] = 'Pessimismo leva à fraqueza, otimismo ao poder.';
  frases[6] = 'Quem ousou conquistar e saiu pra lutar, chega mais longe!';
  frases[7] = 'O homem superior atribui a culpa a si próprio; o homem comum, aos outros.';
  frases[8] = 'Se for tentar, va até o fim, senão nem comece.';
  frases[9] = 'Não compare seus bastidores com o palco de ninguém.';

  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);
}

//Criar o componente
const App = () => {
  
  const { principal, botao, textoBotao } = Estilos;

  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />
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
