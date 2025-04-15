import React from 'react'
import { orderStates } from '../common/type/types';
interface orderDetailProps{
  handleModal:() => void;
  order:orderStates
}
const OrderDetails:React.FC<orderDetailProps>=(props)=> {
  const {handleModal,order}=props;
  
  const orderArray=[
    {id:1,name:'User Name',value:order.userName},
    {id:2,name:'Total',value:`₹${order?.totalPrice}`},
    {id:3,name:'Products',value:'Quantity'},
   
  ]
  return (
    <div className="relative top-20 mx-auto p-6 border max-w-md shadow-lg rounded-md bg-white">
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900">Order Details</h3>

       
        <div>
       
        {orderArray.map((orders)=>(
           <div key={orders.id} className='flex justify-evenly'>
             <p className=" font-semibold text-gray-900">{orders.name}</p>
             <p className="font-semibold text-gray-900">{orders.value}</p>
            </div>
        ))}
         {order.products.map((product,index)=>(
          <div key={index}className='flex justify-evenly'>
           <p>{product.productName}</p>
           <p>{product.quantity}</p>
           </div>
         ))}
        
        </div>
        <div className="mt-4 px-6 py-3">
          {/* {or} */}
        <button onClick={handleModal}
            className="px-4 py-2 rounded bg-gray-500 text-white shadow-md hover:opacity-90 focus:ring-2 focus:ring-offset-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails