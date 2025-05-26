

const menu = [
  { name: "Strawberry", price: 1.25, quantity: 0, type: "scoop" },
  { name: "Mint", price: 1.25, quantity: 0, type: "scoop" },
  { name: "Vanilla", price: 1, quantity: 0, type: "scoop" },
  { name: "Sprinkles", price: 0.25, quantity: 0, type: "topping" },
  { name: "Chocolate Chips", price: 0.25, quantity: 0, type: "topping" },
  { name: "Cookie Chunks", price: 0.5, quantity: 0, type: "topping" },
];


// function addStrawberry() {
//   menu[0].quantity += 1
//   console.log("added Strawberry", menu[0])
// }

// function addItem(itemIndex) {
//   menu[itemIndex].quantity += 1
// }

function addItemByName(itemName) {
  for (let i = 0; i < menu.length; i++) {
    const item = menu[i]
    if (itemName == item.name) {
      item.quantity += 1
      console.log("+", i, item);
    }

  }
  drawOrder()
}

const itemNameListElm = document.getElementById("item-name")
const itemQtyListElm = document.getElementById("item-qty")
const itemCostListElm = document.getElementById("item-cost")
const totalCostItemListElm = document.getElementById("total-item-cost")

function drawOrder() {
  let itemNameContent = ""
  let itemQtyContent = ""
  let itemCostContent = ""
  let totalCostItemContent = ""

  for (let i = 0; i < menu.length; i++) {
    const item = menu[i]
    if (item.quantity > 0) {
      console.log(`${item.name}  ${item.quantity} x $${(item.price).toFixed(2)} $${(item.quantity * item.price).toFixed(2)}`)

      itemNameContent += `<p>${item.name}  </p>`
      itemQtyContent += `<p> ${item.quantity} x </p>`
      itemCostContent += `<p> $${(item.price).toFixed(2)} </p>`
      totalCostItemContent += `<p> $${(item.quantity * item.price).toFixed(2)} </p>`
    }
  }

  itemNameListElm.innerHTML = itemNameContent
  itemQtyListElm.innerHTML = itemQtyContent
  itemCostListElm.innerHTML = itemCostContent
  totalCostItemListElm.innerHTML = totalCostItemContent
}