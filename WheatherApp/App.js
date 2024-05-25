import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { Pressable, View } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Login" component={SignupScreen} />
        <Stack.Screen
          name="Home"
          options={{
            header: true,
            headerTitle: () => {
              <View>
                <Text>Wheather App</Text>
              </View>;
            },
            headerRight: () => {
              <Pressable>
                <Text>Logout</Text>
              </Pressable>;
            },
          }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
