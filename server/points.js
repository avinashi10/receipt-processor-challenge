const calculatePoints = (receipt) => {
  let points = 0;

  // One point for every alphanumeric character in the retailer name
  const retailer = receipt.retailer;
  const alphanumericChars = retailer.replace(/[^a-zA-Z0-9]/g, '');
  points += alphanumericChars.length;
  console.log("alphanumeric should be 14: ", points);

  // 50 points if the total is a round dollar amount with no cents
  const total = parseFloat(receipt.total);
  if (Number.isInteger(total)) {
    points += 50;
  }
  console.log("total round dollar should be 64: ", points);


  // 25 points if the total is a multiple of 0.25
  if (total % 0.25 === 0) {
    points += 25;
  }
  console.log("mult of .25 should be 89: ", points);

  // 5 points for every two items on the receipt
  const itemLength = receipt.items.length;
  const itemPoints = Math.floor(itemLength / 2) * 5;
  points += itemPoints;
  console.log("5 per pair should be 99: ", points);

  // If the trimmed length of the item description is a multiple of 3,
  // multiply the price by 0.2 and round up to the nearest integer
  for (const item of receipt.items) {
    const descriptionLength = item.shortDescription.trim().length;
    if (descriptionLength % 3 === 0) {
      const price = parseFloat(item.price);
      const itemPoints = Math.ceil(price * 0.2);
      points += itemPoints;
    }
  }
  console.log("description mult 3 should stay 99: ", points);

  // 6 points if the day in the purchase date is odd
  const purchaseDate = new Date(receipt.purchaseDate);
  console.log("purchase date: ", purchaseDate);
  const purchaseDay = purchaseDate.getUTCDate();
  console.log("purchase day: ", purchaseDay);
  if (purchaseDay % 2 === 1) {
    points += 6;
  }
  console.log("day odd should stay 99: ", points);


  // 10 points if the time of purchase is after 2:00pm and before 4:00pm
  const purchaseTime = new Date(`1970-01-01 ${receipt.purchaseTime}`);
  const purchaseHour = purchaseTime.getHours();
  const purchaseMinute = purchaseTime.getMinutes();
  if (purchaseHour > 14 || (purchaseHour === 14 && purchaseMinute >= 0)) {
    if (purchaseHour < 16 || (purchaseHour === 16 && purchaseMinute === 0)) {
      points += 10;
    }
  }
  console.log("purchased 2-4 should be 109: ", points);

  return points;
}

module.exports = calculatePoints;
