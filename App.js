import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {user,} from "./context/user/user.initial";
import {testDetails} from "./context/testDetails/testDetails.initial";
import Constants from 'expo-constants';
import {userReducer} from './context/user/user.reducer'


const initialState = {
  testDetails,
  user
};

function reducer(state, action.type ="change") {
  user: userReducer (state, action)
  balance: userReducer (state, action)
  tests: userReducer (state, action)
  testDetails: userReducer (state, action)

}




export default function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  console.log(state);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          onPress={() =>
            dispatch({ type: 'decrement' })
          }
          title="Decrement"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() =>
            dispatch({ type: 'rename', name: "Jose"})
          }
          title="Change name as Jose"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() =>
            dispatch({ type: 'increment', lasha: 10 })
          }
          title="Increment"
          style={styles.button}
        />
      </View>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get
        a shareable url.
      </Text>
    </View>
  );
}

const person = {
  name: 'lasha',
  lastName: 'Kvantaliani',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    marginBottom: 20,
  },
});
