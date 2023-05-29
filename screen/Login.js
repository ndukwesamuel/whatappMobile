import {
  Alert,
  Button,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../GlobalStyles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    setIsLoading(true);

    if (email == "" || password == "") {
      Alert.alert(
        "Alert",
        "Email and Password field is required",
        [{ text: "OK" }],
        { cancelable: false }
      );
      setIsLoading(false);
    } else {
      // Simulating login request delay
      // Perform login logic here
      console.log("Email:", email);
      console.log("Password:", password);
      setIsLoading(false);

      navigation.navigate("Home");
    }
  };

  const SignUpPage = () => {
    const webAppUrl = "https://webuyam.vercel.app/"; // Replace with your web app URL
    Linking.openURL(webAppUrl);
  };
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="h-full ">
      <View className="  flex-col items-center ">
        <View className=" w-[90%] mt-20">
          <Text className="font-semibold text-2xl">Welcome Back</Text>
          <Text className=" font-medium text-lg">
            Enter the email address registered with Webuyam
          </Text>

          <View className="mt mt-10">
            <Text className=" font-normal text-sm">Enter Email Address</Text>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={handleEmailChange}
              editable={!isLoading} // Disable input while loading
              className="border  border-[#0C1401]  rounded px-3 h-10    "
            />
            <View className="my-10 ">
              <Text className=" font-normal text-sm">Enter Password</Text>
              <View className=" border border-[#0C1401]   rounded px-3 h-10  flex-row items-center">
                <TextInput
                  className="w-[90%] pl-5 "
                  value={password}
                  onChangeText={handlePasswordChange}
                  placeholder="Password"
                  secureTextEntry={secureTextEntry}
                  editable={!isLoading} // Disable input while loading
                  style={{
                    height: 45,
                    fontSize: 14,
                    // fontFamily: "Roboto-Regular",
                  }}
                />
                <TouchableOpacity
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                >
                  <Text>
                    {secureTextEntry ? (
                      <Feather name="eye" size={24} color="black" />
                    ) : (
                      <Feather name="eye-off" size={24} color="black" />
                    )}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Button
              title={isLoading ? "Loading..." : "Login"}
              onPress={handleLogin}
              disabled={isLoading}
              color="black"
              style={{
                backgroundColor: "black",
                padding: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "white",
                color: "white",
                fontWeight: "bold",
              }}
            />
          </View>

          <View className=" flex-row items-center m-auto mt-4">
            <Text className="text-xs font-medium">
              Dont have an account yet?{" "}
            </Text>

            <Text className="text-xs font-medium ">
              Lets get you started.
              <Text className="text-[#0254CF]" onPress={SignUpPage}>
                Sign up
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
