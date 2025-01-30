import React from "react";
import { SafeAreaView } from "react-native";
import ProductListScreen from "../src/components/screens/ProductListScreen";
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductListScreen />
    </SafeAreaView>
  );
}
