import { useSelector } from 'react-redux'
import { useState } from 'react';

import {  orderselected } from '../../redux/slice/orderSlice'
import Header from '../../components/Header';
import OrderDetails from '../../components/OrderDetails';
import { orderStates } from '../../common/type/types';
import CommonTable from '../../components/CommonTable';

function OrderListPage() {
    const orderList=useSelector(orderselected);
    
    const [showModal,setShowModal]=useState<boolean>(false);
    const [order, setOrder] = useState<orderStates>()

    const handleShowItemModal=(order:orderStates)=>{
        setShowModal(!showModal)
        setOrder(order)
    }
    const orderTableHeader=[
      {id:1,selector:'id',title:'Order Id',},
      {id:2,selector:'totalPrice',title:'Total Price'},
      {id:3,selector:'userName',title:'User Name'},
      {id:4,cell:(row:orderStates)=><button onClick={()=>handleShowItemModal(row)} className="bg-gray-500 text-white px-3 py-1 rounded-md shadow hover:bg-red-gray transition">
      show order Details</button>,title:'Action'}
    ]
  return (
    <div>
         <Header/>
         <div className="overflow-x-auto mt-6">
        
        <CommonTable data={orderList} header={orderTableHeader}/>
      </div>
      {showModal && (
        <OrderDetails order={order} handleModal={()=>setShowModal(!showModal)}/>
      )}

    </div>
  )
}

export default OrderListPage