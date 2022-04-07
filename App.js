import React, { useReducer, useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { user } from "./context/user/user.initial";
import { testDetails } from "./context/testDetails/testDetails.initial";
import { userReducer } from "./context/user/user.reducer";
import { UserView } from "./context/user/user.view";
import { TestView } from "./context/testDetails/testDetails.view";

const initialState = {
  testDetails,
  user
};

function reducer(state, action) {
  user: userReducer(state, action);
  balance: userReducer(state, action);
  tests: userReducer(state, action);
  testDetails: userReducer(state, action);
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <View style={styles.container}>
      <View>
        <UserView />
        <TestView />
      </View>

      <View>
        <Button
          onPress={() => dispatch({ type: "incrementAge" })}
          title="Increase Age"
          style={styles.button}
        />
        <Button
          onPress={() => dispatch({ type: "decrementAge" })}
          title="Decrease Age"
          style={styles.button}
        />
        <Button
          onPress={() => dispatch({ type: "firstName", name: "Jason" })}
          title="Change first name to Jason"
          style={styles.button}
        />
        <Button
          onPress={() => dispatch({ type: "lastName", name: "Bourne" })}
          title="Change last name to Bourne"
          style={styles.button}
        />
      </View>
    </View>
  );
}

const person = {
  name: "lasha",
  lastName: "Kvantaliani"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  button: {
    marginBottom: 20
  }
});
