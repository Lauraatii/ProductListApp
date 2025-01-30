import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F9F9F9",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  dropdown: {
    marginBottom: 10,
  },
  clearButton: {
    backgroundColor: "#A9B2C3",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  clearButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  productCard: {
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    color: "#444",
  },
  price: {
    fontSize: 16,
    color: "#5CB85C",
    fontWeight: "600",
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
    color: "#888",
  },
  errorMessage: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
    color: "#D9534F",
    fontWeight: "600",
  },
});
