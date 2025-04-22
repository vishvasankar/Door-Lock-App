import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { database } from "../firebase/config"; // Adjust the import based on your project structure
import { onValue, ref, set } from "firebase/database";

const HomeScreen = ({ navigation }) => {
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    const statusRef = ref(database, "status");
    const unsubscribe = onValue(statusRef, (snapshot) => {
      const data = snapshot.val();
      setIsLocked(data === "locked");
    });
    return () => unsubscribe();
  }, []);

  const handleLockUnlock = () => {
    const newStatus = isLocked ? "unlocked" : "locked";
    set(ref(database, "status"), newStatus)
      .then(() => {
        console.log("Status updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WiFi Door Lock System</Text>

      <TouchableOpacity
        style={[styles.button, isLocked ? styles.locked : styles.unlocked]}
        onPress={handleLockUnlock}
      >
        <Text style={styles.buttonText}>{isLocked ? "Unlock" : "Lock"}</Text>
      </TouchableOpacity>

      <Text style={styles.status}>
        {}
        Status: {isLocked ? "Locked 🔒" : "Unlocked 🔓"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1565C0",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 20,
  },
  locked: {
    backgroundColor: "#D32F2F",
  },
  unlocked: {
    backgroundColor: "#388E3C",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  status: {
    fontSize: 18,
    marginTop: 10,
    color: "#424242",
  },
});

export default HomeScreen;
