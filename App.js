import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { user } from "./context/user/user.initial";
import { testDetails } from "./context/testDetails/testDetails.initial";
import { userReducer } from "./context/user/user.reducer";

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
      <View style={styles.button}>
        <Text>
          Age : {state.user.age}
        </Text>
        <Text>
          First Name : {state.user.firstName}
        </Text>
        <Text>
          Last Name : {state.user.lastName}
        </Text>
        <Text>
          Score : {state.testDetails.score}
        </Text>
        <Text>
          Questions : {state.testDetails.questions}
        </Text>
        <Text>
          Answers : {state.testDetails.answers}
        </Text>
        <Button
          onPress={() => dispatch({ type: "incrementAge" })}
          title="Increase Age"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => dispatch({ type: "decrementAge" })}
          title="Decrease Age"
          style={styles.button}
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => dispatch({ type: "firstName", name: "Jason" })}
          title="Change first name to Jason"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => dispatch({ type: "lastName", name: "Bourne" })}
          title="Change last name to Bourne"
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
