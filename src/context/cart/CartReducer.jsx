import { ENVIAR_A_CARRITO } from "../types";

export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case ENVIAR_A_CARRITO:
      return {
        ...state,
        cart: payload,
      };

    default:
      return state;
  }
};
