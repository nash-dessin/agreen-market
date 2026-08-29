# 🌱 Farmer's Market

A responsive React web application for discovering local farmers, browsing fresh produce, and managing a simple market shopping experience.

## 📌 Project Overview

**Farmer's Market** is a frontend web application designed to connect customers with local farmers and vendors.

Users can browse available produce, search and filter products, view vendor and market information, and manage selected items through a simple shopping cart. The application also integrates an external API to provide additional information relevant to the market experience.

The project demonstrates fundamental skills in **HTML, CSS, JavaScript, React, API integration, and basic testing with Jest**.

---

## 🎯 Objectives

The project aims to:

* Create a responsive and user-friendly farmers' market interface.
* Allow users to browse locally available products.
* Provide search and category filtering functionality.
* Display information about farmers/vendors and market locations.
* Allow users to add and remove products from a shopping cart.
* Persist relevant user selections using browser storage.
* Integrate an external API using the Fetch API.
* Demonstrate component-based development using React.
* Apply basic unit testing with Jest.

---

## 👥 Target Users

The application is intended primarily for:

* Customers looking for locally produced food.
* People interested in supporting local farmers.
* Farmers or vendors who want to showcase their products.
* Users looking for information about nearby farmers' markets.

---

# ✨ Features

## Core Features

### 🏠 Home / Dashboard

* Introduction to the farmers' market.
* Featured products.
* Featured vendors.
* Navigation to other sections of the application.

### 🥕 Product Catalogue

Users can:

* Browse available produce.
* View product names, prices, categories, and vendors.
* Search for products.
* Filter products by category.
* View individual product information.

Example categories:

* Vegetables
* Fruits
* Grains
* Dairy
* Herbs
* Eggs

### 🧑‍🌾 Vendors

Users can view:

* Farmer/vendor name.
* Products they sell.
* Market location.
* Basic vendor information.

### 🛒 Shopping Cart

Users can:

* Add products to their cart.
* Remove products.
* Adjust quantities.
* View the calculated subtotal.
* View the total number of items.

### 🌦️ External API Integration

The application uses an external API to retrieve relevant information for the selected market/location.

The API data is retrieved using JavaScript's `fetch()` functionality and displayed through React components.

The application includes appropriate:

* Loading states.
* Error handling.
* API response handling.

### 💾 Local Storage

The application uses `localStorage` to persist selected user data, such as:

* Shopping cart contents.
* Favourite products or vendors.

This allows information to remain available after refreshing the page.

---

# ⚛️ React Implementation

The application is built using React and uses reusable components.

Potential component structure:

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   ├── VendorCard.jsx
│   ├── Cart.jsx
│   └── WeatherCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Vendors.jsx
│   └── CartPage.jsx
│
├── data/
│   └── products.js
│
├── services/
│   └── api.js
│
├── utils/
│   └── cartUtils.js
│
├── App.jsx
└── main.jsx
```

The exact structure may change during development.

---

# 🧪 Testing

Jest is used to test important JavaScript functionality.

Tests may include:

* Product filtering.
* Cart quantity calculations.
* Cart subtotal calculations.
* Removing products from the cart.
* Other utility functions where appropriate.

Example:

```javascript
expect(calculateTotal(cart)).toBe(1500);
```

Testing will focus on **logic and utility functions** rather than attempting to test every UI element.

---

# 📋 Project Rubric

| Requirement             | Implementation                           | Priority |
| ----------------------- | ---------------------------------------- | -------: |
| HTML fundamentals       | Semantic structure and accessible markup |      ⭐⭐⭐ |
| CSS fundamentals        | Layout, styling, responsive design       |      ⭐⭐⭐ |
| JavaScript fundamentals | Functions, arrays, objects, events       |      ⭐⭐⭐ |
| React                   | Components, props, state, events         |      ⭐⭐⭐ |
| React forms             | Search/cart/user interactions            |      ⭐⭐⭐ |
| API / Fetch             | External API integration                 |      ⭐⭐⭐ |
| Error handling          | API loading/error states                 |       ⭐⭐ |
| Local Storage           | Persistent cart/favourites               |       ⭐⭐ |
| Jest                    | Unit tests for core logic                |       ⭐⭐ |
| Git/GitHub              | Version control and meaningful commits   |      ⭐⭐⭐ |
| Authentication          | Mock/optional depending on requirements  |        ⭐ |
| Maps                    | Optional location feature                |        ⭐ |

---

# 🚀 Minimum Viable Product

The following functionality defines the minimum completed project:

* [ ] Responsive navigation
* [ ] Home page
* [ ] Product catalogue
* [ ] Product cards
* [ ] Product search
* [ ] Category filtering
* [ ] Vendor information
* [ ] Add/remove cart functionality
* [ ] Cart total calculation
* [ ] React component structure
* [ ] External API integration
* [ ] Loading and error states
* [ ] At least a few Jest tests
* [ ] Git repository with development history

---

# 🌟 Stretch Features

These features may be implemented if time allows:

* [ ] User authentication
* [ ] Favourite products/vendors
* [ ] Market location map
* [ ] Product detail pages
* [ ] Vendor profiles
* [ ] Sort products by price/name
* [ ] Responsive mobile navigation
* [ ] Dark mode
* [ ] Mock checkout flow

Stretch features should **not take priority over completing the core application**.

---

# 🛠️ Technologies

* HTML5
* CSS3
* JavaScript (ES6+)
* React
* Fetch API
* Jest
* Git / GitHub
* External API: `[API NAME]`

---

# 📁 Data

The application's core product and vendor information can be stored locally within the project rather than relying entirely on external APIs.

Example product:

```javascript
{
  id: 1,
  name: "Fresh Tomatoes",
  category: "Vegetables",
  price: 150,
  unit: "kg",
  vendor: "Green Valley Farm",
  available: true
}
```

This allows the core marketplace functionality to continue working independently of external API availability.

---

# ▶️ Running the Project

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

If an API key is required, create an environment file according to the project's configuration:

```text
.env
```

Do not commit private API keys to GitHub.

---

# 📚 Learning Outcomes

Through this project, I aim to demonstrate my understanding of:

* Semantic HTML.
* CSS layout and responsive design.
* JavaScript fundamentals.
* DOM/event concepts.
* Working with arrays and objects.
* Array methods such as `map()`, `filter()`, and `reduce()`.
* React components and reusable UI.
* React state and props.
* Handling forms and user input.
* Fetching and processing API data.
* Browser local storage.
* Basic unit testing with Jest.
* Git version control.

---

# ⚠️ Project Scope

This is a frontend class project and is **not intended to function as a production e-commerce platform**.

Product, vendor, and market data may be fictional or locally stored for demonstration purposes. The shopping cart represents a frontend interaction and does not process real payments or orders.

The application prioritizes demonstrating frontend development concepts, usability, and a functional user experience.
