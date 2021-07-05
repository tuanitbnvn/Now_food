import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home1 from './Screens/Home1'
import Me from './Screens/Me'
import Noti from './Screens/Noti'
import Wishlist from './Screens/Wishlist'
import Navigation from './Navigation/Navigation'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
let store = createStore(rootReducer);
const App = () => {
    return (
       <Provider store={store}>
   <Navigation />
       </Provider>
         
       
    )
}

export default App

const styles = StyleSheet.create({})
