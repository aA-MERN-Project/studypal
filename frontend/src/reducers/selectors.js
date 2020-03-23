export const asArray = ({ cafes }) =>
  Object.keys(cafes).map(key => cafes[key]);
