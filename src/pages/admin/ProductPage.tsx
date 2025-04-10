import { useState } from "react";
import { productFormArray, tableHeader } from "../../common/data/dataArray";
import Modal from "../../components/Modal";
import { productState } from "../../common/type/types";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, productSelected } from "../../redux/slice/productSlice";
import { toast, ToastContainer } from "react-toastify";

const ProductPage = () => {
  const dispatch=useDispatch();
  const products=useSelector(productSelected);

  console.log(products)
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formData,setFormData]=useState<productState>({
    name:'',
    price:null,
    category:'',
    stock:null,
    description:''
  })
  

  const handleModal = () => {
    setShowModal(!showModal)
  }
  

  const handleAddProduct:React.FormEventHandler<HTMLFormElement> = async (e) =>{
    e.preventDefault()
    console.log('>>.')
    try{
      dispatch(addProduct({id:products.length+1,
        name:formData.name,
        price:formData.price,
      category:formData.category,
      stock:formData.stock,
      description:formData.description
    }))
     toast("Product Successfully added");
    }catch(error){
      console.log(error)
    }
    finally{
      setShowModal(!showModal)
    }
    }
      

  
  return (
    <div>
      <button className="bg-[#3EB8DB] color-white-500 p-2 m-5 rounded-lg" onClick={handleModal}>
        + Add Product
      </button>
      <div>
        <table className="table-auto border-collapse w-500 border-gray-400 m-5 ...">
          <thead>
            <tr>
              {tableHeader.map((item) => (
                <th className=" bg-gray border border-spacing-2 border-gray-300 border-spacing-y-[7px]..." key={item.id}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product)=>(
               <tr key={product.id}>
               <td className="border border-gray-300 w-50 h-10 ...">{product.id}</td>
               <td className="border border-gray-300 ...">{product.name}</td>
               <td className="border border-gray-300 ...">{product.price}</td>
               <td className="border border-gray-300 ...">{product.stock}</td>
               <td className="border border-gray-300 px-5 ...">
                <button className="bg-[#3EB8DB] color-white-500 px-2 rounded-lg">delete</button>
                <button>Edit</button>
               </td>
             </tr>
            ))}
           

          </tbody>
        </table>
      </div>
      {showModal &&
        <div>
          <Modal handleModal={handleModal} handleClick={handleAddProduct} productFormArray={productFormArray} formData={formData} setFormData={setFormData}/>
        </div>}
        <ToastContainer />
    </div>
  )
}

export default ProductPage;