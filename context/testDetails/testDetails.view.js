import React, { useContext } from "react";
import { Text, View } from "react-native";
import { StateContext } from "../context";

export const TestView = () => {
  //const {state} = useContext(StateContext);

  return (
    <View>
      <Text>Score :</Text>
      <Text>Questions :</Text>
      <Text>Answers :</Text>
    </View>
  );
};
