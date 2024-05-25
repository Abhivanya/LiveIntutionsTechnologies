import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { getAuth, signOut } from "firebase/auth";

const Logout = () => {
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        //how to navigate ot login screen
      })
      .catch((error) => {
        console.error("Logout error:", error.message);
      });
  };
  return (
    <TouchableOpacity>
      <Text onPress={handleLogout}>Logout</Text>
    </TouchableOpacity>
  );
};

export default Logout;
