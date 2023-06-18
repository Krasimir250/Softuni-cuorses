function objectFactory(library, orders) {
  let results = [];
  for (const order of orders) {
    let obj = { ...orders.template };
    for (const methodName of order.parts) {
      obj[methodName] = library[methodName];
    }

    results.push(obj);
  }
  return results;
}

objectFactory(library, orders);
