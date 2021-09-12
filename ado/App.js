import * as React from 'react';
import { Text, View, StyleSheet, Modal, Pressable, FlatList } from 'react-native';
import Constants from 'expo-constants';
const DATA = [
  {
    "userId": 1,
    "id": 1,
    "title": "Mensagem teste 1",
    "completed": false
  },
  {
    "userId": 2,
    "id": 2,
    "title": "Mensagem teste 2",
    "completed": false
  },
  {
    "userId": 3,
    "id": 3,
    "title": "Mensagem teste 3",
    "completed": false
  },
  {
    "userId": 4,
    "id": 4,
    "title": "Mensagem teste 4",
    "completed": true
  },
  {
    "userId": 5,
    "id": 5,
    "title": "Mensagem teste 5",
    "completed": false
  }
];
const Pessoa = ({usuarioId,title}) => {

    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={title}/>

      <Pressable onPress={mudaModal}>
        <Text style={styles.paragraph}>{usuarioId}</Text>
      </Pressable>
    </View>
    )
}
const ShowDetalhes = ({display,toogleModal,mensagem}) => (
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{mensagem}</Text>
                </Pressable>
          </View>
        </View>

    </Modal>

 )

export default function App() {
  function meuItem({item}){
    return(
      <Pessoa usuarioId={item.userId} 
              title={item.title}
      />
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
      //Data dados no formato json
        data={DATA}
        //criar a funcao meuItem em App
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 12,
    backgroundColor: 'pink'
  },
  modalView: {
    margin: 20,
    backgroundColor: "red",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});

