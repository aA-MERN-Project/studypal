export const OPEN_POP_UP = "OPEN_POP_UP";
export const CLOSE_POP_UP = "CLOSE_POP_UP"

export const openPopUp = () => {
  return {
    type: OPEN_POP_UP, 
    open: true
  };
};

export const closePopUp = () => {
  return {
    type: CLOSE_POP_UP
  };
};
