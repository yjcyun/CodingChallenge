/*
You got a list of items, where every item has avalue and a weight. You got a bag that holds a maximum weight of X.
Write a program that maximizes the value of the items you put into the bag whilst ensuring that you don't exceed the maximum weight.

Verify inputs: Can items be used multiple items? - only once
Verbal solution: We could derive all possible combinations and find the one with highest value and fitting weight
*/

function knapsack(items, cap, itemIndex) {
  if (cap < items[itemIndex].weight) {
    return knapsack(items, cap, itemIndex - 1);
  }

  const sackWithItem = knapsack(
    items,
    cap - items[itemIndex].weight,
    itemIndex - 1
  );

  return {};
}

const items = [
  { name: 'a', value: 3, weight: 3 },
  { name: 'b', value: 6, weight: 8 },
  { name: 'c', value: 10, weight: 3 }
];

const maxCap = 8;

const sack = knapsack(items, maxCap, items.length - 1);
console.log(sack);