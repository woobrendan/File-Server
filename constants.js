const nextId = (() => {
  let id = 0;
  return () => {
    id++;
    return id;
  }
});

module.exports = {
  nextId
}