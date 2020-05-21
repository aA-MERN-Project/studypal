export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_SESSION_MODAL = "OPEN_SESSION_MODAL";
export const CLOSE_SESSION_MODAL = "CLOSE_SESSION_MODAL";

export const openModal = (modal, data) => {
  return {
    type: OPEN_MODAL,
    modal,
    data
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};


export const openSessionModal = (modal, data) => {
  return {
    type: OPEN_SESSION_MODAL,
    modal,
    data
  };
};

export const closeSessionModal = () => {
  return {
    type: CLOSE_SESSION_MODAL
  };
};
