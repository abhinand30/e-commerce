import { useDispatch, useSelector } from 'react-redux'
import { deleteAll, orderselected } from '../../redux/slice/orderSlice'
import { orderTableHeader } from '../../common/data/dataArray';
import Header from '../../components/Header';
import { useState } from 'react';
import OrderDetails from '../../components/OrderDetails';
import { orderStates } from '../../common/type/types';

function OrderListPage() {
    const orderList=useSelector(orderselected);
    const dispatch=useDispatch()
    const [showModal,setShowModal]=useState<boolean>(false);
    const [order, setOrder] = useState<orderStates>()
    const handleShowItemModal=(order:orderStates)=>{
        setShowModal(!showModal)
        setOrder(order)
        dispatch(deleteAll(1))
    }
  return (
    <div>
         <Header/>
         <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              {orderTableHeader.map((item) => (
                <th
                  key={item.id}
                  className="px-4 py-3 text-left text-gray-600 dark:text-gray-300"
                >
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orderList.length > 0 ? (
              orderList.map((order) => (
                <tr
                  key={order.id}
                  className="border-b bg-gray-900 hover:bg-black-100 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-3 text-white">{order.id}</td>
                  <td className="px-4 py-3 text-white">{order?.totalPrice}</td>
                  <td className="px-4 py-3 text-white">{order.userName}</td>
                  <td className="px-4 py-3 space-x-2">
                    <button onClick={()=>handleShowItemModal(order)} className="bg-gray-500 text-white px-3 py-1 rounded-md shadow hover:bg-red-gray transition">
                    show order Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={orderTableHeader.length + 1} className="px-4 py-3 text-center text-gray-500">
                  No orders available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {showModal && (
        <OrderDetails order={order} handleModal={()=>setShowModal(!showModal)}/>
      )}

    </div>
  )
}

export default OrderListPage