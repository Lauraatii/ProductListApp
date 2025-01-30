import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import mockData from "../../data/mock-products.json";
import styles from "../../styles/styles";

const PAGE_SIZE = 20; // Loads 20 products at a time

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false); 

  useEffect(() => {
    // Extracts categories for the dropdown
    const uniqueCategories = [...new Set(mockData.map((item) => item.category))];
    setCategories(uniqueCategories.map((cat) => ({ label: cat, value: cat })));

    loadMoreProducts();
  }, []);

  useEffect(() => {
    if (loading) return; 

    try {
      if (category) {
        // Reset pagination and filter products
        const filtered = mockData.filter((item) => item.category === category);
        setFilteredProducts(filtered.slice(0, PAGE_SIZE));
        setPage(1);
      } else {
        setFilteredProducts(products);
      }
      setError(false); // Resets error state if filtering succeeds
    } catch (error) {
      setError(true);
    }
  }, [category, products, loading]);

  const loadMoreProducts = useCallback(() => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      try {
        const nextProducts = mockData.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
        if (nextProducts.length === 0) return; // Stops loading if no more items

        setProducts((prev) => [...prev, ...nextProducts]);
        setPage((prevPage) => prevPage + 1);
        setError(false); // Reset error state if loading succeeds
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    }, 1000); // API delay
  }, [loading, page]);

  const clearFilters = () => {
    setCategory(null);
    setFilteredProducts(products);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Product List</Text>

      {/* Category Dropdown */}
      <DropDownPicker
        open={open}
        value={category}
        items={categories}
        setOpen={setOpen}
        setValue={setCategory}
        placeholder="Filter by Category"
        containerStyle={styles.dropdown}
      />

      {/* Clear Filters Button */}
      {category && (
        <TouchableOpacity style={styles.clearButton} onPress={clearFilters}>
          <Text style={styles.clearButtonText}>Clear Filters</Text>
        </TouchableOpacity>
      )}

      {/* Product List */}
      {loading ? (
        <ActivityIndicator size="large" color="#555" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={category ? filteredProducts : products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
          )}
          onEndReached={loadMoreProducts}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading ? <ActivityIndicator size="large" color="#555" /> : null}
          getItemLayout={(data, index) => ({
            length: 180,
            offset: 180 * index,
            index,
          })}
          windowSize={10}
          ListEmptyComponent={() =>
            !loading && error ? (
              <Text style={styles.errorMessage}>Something went wrong. Please try again.</Text>
            ) : !loading && filteredProducts.length === 0 ? (
              <Text style={styles.emptyMessage}>No products found in this category.</Text>
            ) : null
          }
        />
      )}
    </View>
  );
};

export default ProductListScreen;
