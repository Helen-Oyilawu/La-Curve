import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'
// import { parsePath } from 'react-router-dom'   

const initialState = {
  // value: [],
  cart: [],
  total: 0,
  QTY: 0,
  users: [] ,
  isLoggedIn: false,
  loggedInUser: {}
}

export const featuresSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {

    addToCart: (state, { payload }) => {
      const cartMap = new Map()
      let findProduct = state.cart.find((product) => product.id === payload.id)
      if (!findProduct) {
        const newProduct = { ...payload, QTY: 1, totalPrice: payload.price }
        return {
          ...state,
          cart: [...state.cart, newProduct]
        }
      } else {
        findProduct.QTY += 1;
        findProduct.totalPrice = payload.price * findProduct.QTY
        state.cart.map((item) => {
          cartMap.set(item.id, item)
        })
      }
      
    },

    deleteCart: (state, { payload }) => {
      state.cart = state.cart.filter((e) => e?.id !== payload?.id)
      state.totalQty = state.cart.reduce((acc, item) => acc + item.QTY, 0);

    },
    incrementQty: (state, { payload }) => {
      const item = state.cart.find(e => e.id === payload.id);
      if (item) {
        item.QTY += 1;
        item.totalPrice = item.price * item.QTY;
        state.total = state.cart.reduce((total, e) => total + e.totalPrice, 0);
        state.totalQty = state.cart.reduce((qty, item) => qty + item.QTY, 0);
      }
    },

    decrementQTY: (state, { payload }) => {
      const checkItem = state.cart.findIndex((e) => e.id === payload.id);
      if (state.cart[checkItem].QTY === 1) {
        state.cart = state.cart.filter((e) => e.id !== payload.id);




      } else {
        state.cart.map((e) => {
          if (e.id === payload.id) {
            e.QTY -= 1;
            e.totalPrice -= e.price

          } else return e;
        })
      }
      state.total = state.cart.reduce((p, e) => p + (e.QTY * e.price), 0)
      state.totalQty = state.cart.reduce((acc, item) => acc + item.QTY, 0);

    },

    clearCart: (state) => {
      state.cart = [];
    },


    signUp: (state, { payload }) => {
      state.users.push(payload)
    },

    login: (state, { payload }) => {
      const check = state.users.findIndex((e) => e.email === payload.email);
      if (check !== -1) {
        if (state.users[check].password !== payload.password) {
          toast.error('password Is Incorrect')
        } else {
          state.isLoggedIn = true
          state.loggedInUser = payload
          console.log(check)
        }
      } else {
        toast.error('user is not found')
      }
    }
  },
})

export const { addToCart, decrementQTY, deleteCart, incrementQty, signUp, login , clearCart} = featuresSlice.actions

export default featuresSlice.reducer