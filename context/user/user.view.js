import { Text, View } from "react-native";
import {StateContext} from '../../context/Context';

export const user = () => {
const {state} = useContext(StateContext);
  return (
    <View>
      <Text>
        Age : {state.user.age}
      </Text>
      <Text>
        First Name : {state.user.firstName}
      </Text>
      <Text>
        Last Name : {state.user.lastName}
      </Text>
    </View>
  );
};
