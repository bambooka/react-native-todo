import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const Navbar = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.navbarText}>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 70,
    backgroundColor: '#123abc',
  },
  navbarText: {
    fontSize: 26,
    color: '#fff',
  }
})

export default Navbar;