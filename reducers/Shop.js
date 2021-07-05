const initState = {
    idShop:'',
    idProduct:'',
    dish_type_id:'',
    
}
  export default function Shop(state = initState, action) {
    switch (action.type) {
      case 'ONCLICK':
        // console.log('data cua action.data',action.data);
         console.log(action)
        return {
          ...state,
          idShop: action.data,
        }
        case 'idProduct':
            // console.log('data cua action.data',action.data);
             console.log(action)
            return {
              ...state,
              idProduct: action.data.idProduct,
              dish_type_id: action.data.dish_type_id,
            }
        case 'service_type':
              // console.log('data cua action.data',action.data);
               console.log(action)
              return {
                 
              }
      
  
      default:
        return state;
    }
  }
  