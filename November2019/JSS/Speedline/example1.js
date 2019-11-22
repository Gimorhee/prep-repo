const toppings = [
    {
      email: "email1@example.com",
      toppings: ["Mushrooms", "Pepperoni", "Peppers"]
    },
    { email: "email2@example.com", toppings: ["Cheddar", "Garlic", "Oregano"] },
    { email: "email3@example.com", toppings: ["Bacon", "Ham", "Pineapple"] },
    { email: "", toppings: ["Parmesan", "Tomatoes"] },
    {
      email: "email4@example.com",
      toppings: ["Mushrooms", "Pepperoni", "Peppers"]
    },
    { email: "", toppings: ["Cheddar", "Tomatoes"] },
    { email: "email5@example.com", toppings: ["Bacon", "Ham", "Pineapple"] },
    { email: "email6@example.com", toppings: ["Beef", "Parmesan"] },
    { email: "", toppings: ["Onions", "Pepperoni"] },
    { email: "", toppings: ["Bacon", "Ham", "Pineapple"] }
  ];

function printWinners1(inputArray) {
  inputArray.sort((a, b) => {
    return a.toppings.toString().localeCompare(b.toppings.toString());
  });
  
  let previousEmail = "";
  let previousToppingsAsString = "";
  let previousToppingCount = 0;
  let numberOfSimilarOrders = 0;

  // Iterate through the array, with "order" being each item in the array.
  inputArray.map(order => {
    let toppingsAsString = order.toppings.toString();
    if (toppingsAsString === previousToppingsAsString) {
      numberOfSimilarOrders++;
    } else {
      if (
        numberOfSimilarOrders === 1 &&
        previousToppingCount === 3 &&
        previousEmail !== ""
      ) {
        // Print out the email.
        console.log(previousEmail);
      }
      previousToppingsAsString = toppingsAsString;
      previousEmail = order.email;
      previousToppingCount = order.toppings.length;
      numberOfSimilarOrders = 1;
    }
  });
}

printWinners1(toppings);
