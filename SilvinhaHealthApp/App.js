import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.titleBox}>
        <Text style={styles.titleText}>Silvinha Health App</Text>
      </SafeAreaView>

      <View style={styles.content}>
      <Text style={styles.subTitle}>Calculadora de IMC</Text>

      <View>
        <Text style={styles.label}>Altura:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite a altura...'
          keyboardType='numeric'
        />
      </View>

      <View style={{ marginTop:25 }}>
        <Text style={styles.label}>Peso:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite o peso...'
          keyboardType='numeric'
        />
      </View>
      
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf2f4',
  },
  titleBox: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 100,
    backgroundColor: '#ef233c',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  titleText: {
    color: '#edf2f4',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: '#edf2f4'
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ef233c',
    fontWeight: 'bold',
    marginBottom: 40
  },
  label: {
    color: '#000',
    fontSize: 18
  },
  input: {
    height: 45,
    width: '100%',
    fontSize: 18,
    borderColor: '#ef233c',
    borderBottomWidth: 2,
    marginVertical: 5
  }
});
