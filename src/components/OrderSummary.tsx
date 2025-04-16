import React from 'react'
import { cartStateProps } from '../common/type/types';


const OrderSummary:React.FC<cartStateProps> = (props) => {
    const {carts,handleCheckOut,totalPrice,deliveryCharge}=props;
    
   
    

    const orderSummaryArray=[
        {id:1,name:'product',value:carts.length},
        {id:2,name:'Price',value:`₹${totalPrice}`},
        {id:3,name:'Delivery Charge',value:`₹${deliveryCharge}`},
        {id:4,name:'Total',value:totalPrice+deliveryCharge},
    ]
  
  return (
        <div className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                    Order Summary</h2>
                <div className="mt-8">
                {orderSummaryArray.map((order)=>(
                      <div key={order.id} className="flex items-center justify-between pb-6">
                      <p className="font-normal text-lg leading-8 text-black">{order.name}</p>
                      <p className="font-medium text-lg leading-8 text-black">{order.value}</p>
                  </div>
                ))}
                  
                   
                        <button onClick={handleCheckOut} className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
                            Checkout
                        </button>
                   
                </div>
            </div>
   
  )
}

export default OrderSummary