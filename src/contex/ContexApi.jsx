import { createContext, useEffect, useReducer} from 'react'

export const EccomerceContext = createContext([]);
const inistialstate = []
const reducer = (state, action)=>{
   switch (action.type){
    case'addToCart':{
        const add = state.findIndex((e)=>e.id === action.payload.id)
        if (add >= 0) {
            state[add].QTY +=1
            return [...state]

        } else {
            return [...state,{ ...action.payload,QTY:1}]

        }
    }
    default:{
        throw new Error()
    }
    case'Delete':{
        return state.filter((e)=> e.id !== action.payload.id)
    }
    case'clearAll':{
        return []
    }
    case 'increase':{
        const item = state.map((e)=>{
            if (e.id === action.payload.id){
                e.QTY += 1
               return e;
            }else{
                return e
            }
        })
        return item
    }
    case 'decrease':{
        const checkIndex = state.findIndex((e) => e.id === action.payload.id);
        if (state[checkIndex].QTY ===1) {
            const item = state .filter((e)=>e.id !== action.payload.id)
            return item
        } else {
            const item = state.map((e)=>{
                if (e.id === action.payload.id) {
                    e.QTY-=1
                    return e;
                } else {
                    return e
                }
            }) 
            return item
        }
    }
   }
}

// useEffect
const EcommerceProvider=({children})=>{
    const [cart, dispatch] = useReducer(reducer, inistialstate)
     useEffect(()=>{
        const total = cart.reduce((a,e)=>e.price + a, 0)
        setTotal(total)
     },[])
    return (
        <EccomerceContext.Provider value={{state, dispatch }}>
            {children}
        </EccomerceContext.Provider>
    )
}
export default EcommerceProvider