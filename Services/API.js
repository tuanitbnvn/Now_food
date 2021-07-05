import axios from 'axios';
export const instance = axios.create({
  baseURL: 'https://gappapi.deliverynow.vn',
  //   timeout: 100000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-foody-api-version': '1',
    'x-foody-app-type': '1004',
    'x-foody-client-id': '',
    'x-foody-client-language': 'vi',
    'x-foody-client-type': '1',
    'x-foody-client-version': '3.0.0',
  },
});
export const getNearMe = params =>
  instance.post('/api/delivery/get_browsing_infos', {
    delivery_ids: [
      78659,
      11305,
      96457,
      60395,
      4963,
      25939,
      15903,
      60927,
      106556,
      93466,
      123242,
      78372,
      4872,
      20427,
    ],
  });
  export const getSelling = params =>
  instance.post('/api/delivery/get_browsing_infos', {
    delivery_ids: [
      15400, 94746, 107613, 25664, 7172, 19361, 113632, 33483, 113738, 7569, 17486, 7040, 30603, 1588,
    ],
  });
  export const getRate = params =>
  instance.post('/api/delivery/get_browsing_infos', {
    delivery_ids: [
      108349, 96386, 18620, 78659, 40193, 94890, 102229, 76986, 15227, 25663, 95628, 85360, 103535, 9762,
    ],
  });
  export const getFastDelivery = params =>
  instance.post('/api/delivery/get_browsing_infos', {
    delivery_ids: [
      96386, 18620, 94890, 102229, 76986, 25663, 15227, 95628, 85360, 9762, 35849, 4856, 62643, 40832,
    ],
  });
  export const getShop = delivery_id =>
  instance.get(
    `/api/dish/get_delivery_dishes?id_type=2&request_id=${delivery_id}`,
  ); 
  export const getCart = delivery_id =>
  instance.get(
    `/api/dish/get_delivery_dishes?id_type=2&request_id=${delivery_id}`,
  );