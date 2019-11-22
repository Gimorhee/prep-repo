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
      toppings: ["Mushrooms", "Pepperoni", "Pepper1s"]
    },
    { email: "", toppings: ["Cheddar", "Tomatoes"] },
    { email: "email5@example.com", toppings: ["Bacon", "Ham", "Pineapple"] },
    { email: "email6@example.com", toppings: ["Beef", "Parmesan", ""] },
    { email: "", toppings: ["Onions", "Pepperoni"] },
    { email: "", toppings: ["Bacon", "Ham", "Pineapple"] }
  ];
  
  function printWinners2(inputArray) {
    let hashTable = new Map();
  
    // Iterate through the array, with "order" being each item in the array.
    inputArray.map(order => {
      if (order.toppings.length === 3 && order.email !== "") {
        let toppingsAsString = order.toppings.toString();
        let matchingValue = hashTable.get(toppingsAsString);
       
        if (matchingValue) {
          // This key was already in the hash table.
          // matchingValue is a reference to the object in the hash table.
          matchingValue.duplicate = true;
        } else {
          // Insert into the hash table, using the toppings as the key and an object containing the email as the value.
          hashTable.set(toppingsAsString, {
            email: order.email,
            duplicate: false
          });
        }
      }
    });
  
    // Iterate through the values in the hash table, with "value" being each value.
    hashTable.forEach(value => {
      if (!value.duplicate) {
        // Print out the email.
        console.log(value.email);
      }
    });
  }
  
  printWinners2(toppings);