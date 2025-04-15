import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import OrderSummary from '../../components/OrderSummary'
import Carts from '../../components/Carts'
import { cartselected, deleteCart } from '../../redux/slice/cartSlice';
import { addorder } from '../../redux/slice/orderSlice';
import { currentUser } from '../../redux/slice/authSlice';
import { editProductStock, productSelected } from '../../redux/slice/productSlice';

const CartPage = () => {
    const cartItems=useSelector(cartselected);
    const userData=useSelector(currentUser);

    const products = useSelector(productSelected);

    const dispatch=useDispatch();

    const carts=cartItems.map((cart)=>({ 
        productId:cart.id,
        productName:cart.productName,
        price:cart.price,
        quantity:cart.quantity
    }));

    const totalPrice=cartItems.reduce((total:number,cart)=>{
        return total+cart.price*cart.quantity
    },0);

    const deliveryCharge=10
    
    const handleCheckStock=()=>{
        try{
          
            return cartItems.every(cart=>{
                const productExists=products.find((product)=>product.id==cart.productId)
                return productExists&& productExists.stock>=cart.quantity
               
            })
           
        }catch(error){
            console.log(error);
            return false;
        }
    }
    
    const handleCheckOut=()=>{
        
        try{    
            const isStockValid = handleCheckStock();
            console.log(isStockValid)
            if(isStockValid){
                console.log('>>>')
                cartItems.forEach(cart=>{
                    dispatch(editProductStock({
                        id:cart.productId,
                        quantity:cart.quantity,
                    }))
                })
                dispatch(addorder({
                    id:crypto.randomUUID(),
                    products: carts,
                    userId:userData?.id,
                    userName:userData?.name,
                    totalPrice:totalPrice+deliveryCharge
                }))
                cartItems.forEach((cart)=>{dispatch(deleteCart(cart.id))})
                toast.success('Order successfully Placed')
            }
            else{
                toast.warning('item is out of stock')
            }
            
            
        }catch(error){
            console.log('check')
            console.log(error)
            toast('Order is not Placed')
        }
    }


  return (
    <div className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
    <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
        <div className="grid grid-cols-12">
            <div
                className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
                <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                    <h2 className="font-manrope font-bold text-3xl leading-10 text-black">Shopping Cart</h2>
                    <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">{cartItems.length} Items</h2>
                </div>
                <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                    <div className="col-span-12 md:col-span-7">
                        <p className="font-normal text-lg leading-8 text-gray-400">Product Details</p>
                    </div>
                    <div className="col-span-12 md:col-span-5">
                        <div className="grid grid-cols-5">
                            <div className="col-span-3">
                                <p className="font-normal text-lg leading-8 text-gray-400 text-center">Quantity</p>
                            </div>
                            <div className="col-span-2">
                                <p className="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
                            </div>
                        </div>
                    </div>
                </div>
                
             
            {cartItems.map((cart,index)=>(
                 <Carts key={index} cart={cart} />
            ))}
            </div>

            <OrderSummary carts={cartItems} deliveryCharge={deliveryCharge} totalPrice={totalPrice} handleCheckOut={handleCheckOut}/>
            
        </div>
    </div>
    <ToastContainer/>
</div>
                                        
  )
}

export default CartPage