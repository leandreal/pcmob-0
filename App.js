import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { names } from "./name";

export default function App() {

  const namesAsObjects = names.map((item) => {
    return { name: item };
  });
  
  
  const renderName = ({ item }) => {
    return <Text>{item.name}</Text>;
  };

  return (
  <FlatList
    data={namesAsObjects}
    renderItem={renderName}
    keyExtractor={(item) => item.name}
    />
  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


