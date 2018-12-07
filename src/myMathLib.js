export default {
  getBiggest(a, b) {
    if (!a || !b) {
      throw new Error('You must supply both values');
    }
    return a > b ? a : b;
  }
}