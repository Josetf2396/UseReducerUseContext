import React, { useContext } from "react";
import { Text, View } from "react-native";
import { StateContext } from "../context";

export const UserView = () => {
  //const {state} = useContext(StateContext);

  return (
    <View>
      <Text>Age :</Text>
      <Text>First Name :</Text>
      <Text>Last Name :</Text>
    </View>
  );
};
