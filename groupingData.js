// grouping and aggregation data

// Scenario : You have a flat array of sales data, and you need to group the sales by category

// Calculation the total revenue and the number of items sold for each

/**
 * TODO -->initialize empty object
 * TODO -->initialize object category
 * TODO --> Calculate the revenue
 *
 * */

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Electronics", item: "Smartphone", price: 800, quantity: 3 },
  { category: "Electronics", item: "Headphones", price: 150, quantity: 5 },
  { category: "Clothing", item: "T-Shirt", price: 20, quantity: 10 },
  { category: "Clothing", item: "Jeans", price: 50, quantity: 4 },
  { category: "Clothing", item: "Jacket", price: 100, quantity: 2 },
  { category: "Groceries", item: "Milk", price: 3, quantity: 12 },
  { category: "Groceries", item: "Bread", price: 2, quantity: 8 },
  { category: "Groceries", item: "Eggs", price: 5, quantity: 6 },
  { category: "Books", item: "JavaScript Guide", price: 40, quantity: 3 },
  { category: "Books", item: "Python Cookbook", price: 50, quantity: 2 },
];

const table = sales.reduce((table, sale) => {
  const { category, price, quantity } = sale;
  console.log(table, " : ", sale);
  if (!table[category]) {
    table[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }

  table[category].totalRevenue += price * quantity;
  table[category].itemCount += quantity;
  return table;
}, {});

// console.log(table);

const newMap = new Map();

for (let product of sales) {
  const { category, price, quantity } = product;

  if (!newMap.has(category)) {
    const valueOfCategory = {
      totalRevenue: 0,
      itemCount: 0,
    };
    newMap.set(category, valueOfCategory);
  }

  const current = newMap.get(category);
  current.totalRevenue += price * quantity;
  current.itemCount += quantity;
}

console.log(newMap);

// OutPut

/**
 * {
 * Electronics:{
 * totalRevenue:1330,
 * itemCount:4
 * },
 * Books:{
 * totalRevenue:14545,
 * itemCount:3
 * },
 * Home:{
 * totalRevenue:452,
 * itemCount:1
 * }
 * }
 * */
