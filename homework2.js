//Задание 2

const cookingToChefs = new Map([
  ["Пицца 'Маргарита'", "Виктор"],
  ["Пицца 'Пепперони'", "Виктор"],
  ["Суши 'Филадельфия'", "Ольга"],
  ["Суши 'Калифорния'", "Ольга"],
  ["Тирамису", "Дмитрий"],
  ["Чизкейк", "Дмитрий"],
]);

const clientOrders = new Map();
const visitor1 = { name: "Алексей" };
const visitor2 = { name: "Мария" };
const visitor3 = { name: "Ирина" };

clientOrders.set(visitor1, ["Пицца 'Пепперони'", "Тирамису"]);
clientOrders.set(visitor2, ["Суши 'Калифорния'", "Пицца 'Маргарита'"]);
clientOrders.set(visitor3, ["Чизкейк"]);

function printOrders() {
  clientOrders.forEach((cook, client) => {
    console.log(`Заказ клиента ${client.name}:`);
    cook.forEach((dish) => {
      console.log(`  ${dish} - готовит ${cookingToChefs.get(dish)}`);
    });
  });
}

printOrders();
