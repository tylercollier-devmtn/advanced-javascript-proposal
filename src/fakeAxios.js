export default {
  get(url) {
    const promise = new Promise((resolve, reject) => {
      const people = [
        {
          id: 1,
          name: 'Luke Skywalker'
        },
        {
          id: 2,
          name: 'C-3PO'
        }
      ];
      setTimeout(resolve({ data: people }), 500);
    });
    return promise;
  }
}
