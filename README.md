# Product List App

## 🚀 Overview
Welcome to the **Product List App**! This React Native project displays a large list of products with **infinite scrolling**, **category filtering**, and **smooth performance optimizations**. 

## ✨ Features
- **Infinite scrolling** – Loads more products as you scroll
- **Category filtering** – Filters products using a dropdown
- **Clear filters option** – Resets the category filters
- **Performance optimizations** – Uses "FlatList" for smoother scrolling
- **Error handling** – Displays error messages for empty states or fetch failures

## 🛠️ Start the Project
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Lauraatii/ProductListApp.git
cd ProductListApp
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Node.js Version (if necessary)
If your system defaults to **Node.js v16** and you need **v18**, switch before running the project:
```sh
node -v  # Check current Node.js version
nvm use 18  # Switch to Node.js 18
```

### 4️⃣ Run the Project
```sh
npx expo start
```

## 📂 Project Structure
```
ProductListApp/
│── src/
│   ├── components/
│   │   ├── screens/
│   │   │   ├── ProductListScreen.js  # Main screen
│   ├── styles/
│   │   ├── styles.js  # Styling for components
│   ├── data/
│   │   ├── mock-products.json  # Product dataset
│── app/
│   ├── index.tsx  # Entry point
│── README.md  # Documentation
│── package.json  # Dependencies
```

## How It Works
- **Pagination & Infinite Scrolling**: The app loads **20 products at a time** and dynamically fetches more upon scrolling.
- **Filtering**: Select a category from the dropdown to see the products.
- **Clear Filters**: Reset the list by pressing "clear filters".
- **Optimizations**: Uses "FlatList" for efficient rendering and "useCallback" to prevent unnecessary re-renders.
- **Error Handling**: Handles empty states and simulates API errors with timeouts.

