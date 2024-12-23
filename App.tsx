import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('username');
  const [number, onChangeNumber] = React.useState('');
  const [displayLoader, setDisplayLoader] = React.useState(false);

  const login = () => {
    setDisplayLoader(true);
    setTimeout(() => {
      Alert.alert('login success');
      setDisplayLoader(false);
    }, 5000);
  };

  return (

    <SafeAreaView>
      <View>
        {displayLoader && (
          <View style={styles.indicator}>
            <ActivityIndicator size="large" />
          </View>
        )}
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          secureTextEntry={true}
          value={number}
          placeholder="password"
          keyboardType="numeric"
        />
        <Button disabled={displayLoader === true} title="Login" onPress={login} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  indicator: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '450%',
  },
});

export default TextInputExample;
