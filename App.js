import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import { useState } from 'react';

const App = () => {
  const [num, setNum] = useState('');
  const [result, setResult] = useState('');

  const check = () => {
    const reverse = num.split('').reverse().join('');

    if (num === reverse) {
      setResult('True');
    } else {
      setResult('False');
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.text}>Palindrome Number Checker</Text>
      <TextInput
        placeholder="Enter a number"
        style={style.numberInput}
        onChangeText={setNum}
        value={num}
        keyboardType="numeric" 
      />
      <Button
        title="Check"
        style={style.button}
        onPress={check}
      />
      <Text style={style.text}>{result}</Text>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  numberInput: {
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    height: 40,
    width: 200,
    padding: 5,
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    marginTop: 10,
  },
});
