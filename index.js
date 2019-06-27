function sumItems(array) {

  let total = 0;
  array.forEach((n) => {
    if (Array.isArray(n)) {
      total += sumItems(n);
    } else {
      total += n;
    }
  })
  return total;
}

module.exports = sumItems;