const initState = {
    idShop:'',
    idProduct:[],
    dish_type_id:'',
    
}
  export default function Cart(state = initState, action) {
    switch (action.type) {
      case 'ADD_CART':
        // console.log('data cua action.data',action.data);
         console.log(action)
        return {
          idShop: action.data.idShop,
          idProduct: [...state.idProduct, action.data.idProduct],
          dish_type_id: [...state.dish_type_id, action.data.dish_type_id],
        }
        case 'REMOVE_CART':
          return {
            ...state,
            idShop: '',
            idProduct: [],
            dish_type_id: [],
          }
      default:
        return state;
    }
  }