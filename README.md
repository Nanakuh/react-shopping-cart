# Shopping Cart Project

This project is a simple and interactive shopping cart application built using React and Tailwind CSS. It demonstrates how to manage a cart, add and remove items, update quantities, and calculate the total price of items in the cart.

## Features

- Add products to the shopping cart.
- Increment or decrement the quantity of items in the cart.
- Remove items from the cart.
- Display the total number of items and the total price in the header.
- Persistent cart data using `localStorage`.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/shopping-cart.git
   cd shopping-cart
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

This will start the application, and you can access it in your browser at:

```
http://localhost:5173
```

## Build for Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

The optimized output will be available in the `dist` folder.

## Tailwind CSS Configuration

This project uses Tailwind CSS for styling. The configuration is located in the `tailwind.config.js` file. Ensure that your `content` property includes the appropriate paths:

```javascript
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Folder Structure

```plaintext
src/
|-- components/
|   |-- Header.js      // Header component displaying cart summary
|   |-- ProductList.js // Component for listing available products
|   |-- Cart.js        // Shopping cart component
|-- styles/
|   |-- tailwind.css   // Tailwind CSS styles
|-- App.js             // Main application file
|-- index.js           // Entry point
```

## Customization

You can easily add new features or adjust the design by:

1. Modifying the components in the `src/components` folder.
2. Updating the `tailwind.config.js` file for custom themes or colors.
3. Adding new utility classes to the `src/styles/tailwind.css` file.

## Issues or Contributions

If you encounter any issues or have suggestions for improvement, feel free to create an issue or open a pull request in the repository.

