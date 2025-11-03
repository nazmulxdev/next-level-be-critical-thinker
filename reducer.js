// count subtotal

const cartItem = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C cable", price: 500, quantity: 4 },
  { id: "p-003", name: "Aarong Kurta", price: 5000, quantity: 1 },
  { id: "p-004", name: "Asus Power Bank", price: 1200, quantity: 3 },
];

const subtotal = cartItem.reduce((subtotal, product) => {
  //   console.log(subtotal, product);
  return subtotal + product.price * product.quantity;
}, 0);

// console.log(subtotal);

// fins best scorer

const player = [
  { name: "Sakib-Al Hasan", score: 88 },
  { name: "Nureul Hasan", score: 12 },
  { name: "Nazmul Hasan Shanto", score: 52 },
  { name: "Tamin Iqbal", score: 64 },
  { name: "Jaker Ali Anik", score: 63 },
  { name: "Mominul", score: 38 },
  { name: "Saif Hasan", score: 28 },
  { name: "Kamrul Islam Rabbi", score: 78 },
];

const bestScorer = player.reduce((bestPlayer, player) => {
  return bestPlayer.score > player.score ? bestPlayer : player;
}, player[0]);

console.log(bestScorer);
