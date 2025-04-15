import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { productFormArray, tableHeader } from "../../common/data/dataArray";
import Modal from "../../components/Modal";
import { productState } from "../../common/type/types";
import { addProduct, deleteProduct, editProduct, productSelected } from "../../redux/slice/productSlice";


const ProductPage = () => {
  const dispatch=useDispatch();
  const products=useSelector(productSelected);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [formData,setFormData]=useState<productState>({
    name:'',
    price:null,
    category:'',
    stock:null,
    description:'',
    image:''
  })
  const [selectedProduct, setSelectedProduct] = useState<productState | null>(null);

  const handleEdit = (product: productState) => {
    setSelectedProduct(product);
    setFormData(product);
    setShowModal(true);
  };
  

  const handleModal = () => {
    setShowModal(!showModal);
    setSelectedProduct(null);
    setFormData({
      name: '',
      price: null,
      category: '',
      stock: null,
      description: '',
      image: '',
    });
  };
  

  const handleAddProduct:React.FormEventHandler<HTMLFormElement> = async (e) =>{
    e.preventDefault()

    const isEmpty = Object.values(formData).some((value) => value === '');
    if (isEmpty) {
      toast.error("All fields are required!");
      return;
    }
    try{
      if (selectedProduct?.id) {
        dispatch(editProduct({ ...formData, id: selectedProduct.id }));
        toast.success("Product successfully updated");
      } else {
      dispatch(
        addProduct({
          id: products.length + 1,
          name: formData.name,
          price: Number(formData.price),
          category: formData.category,
          stock: Number(formData.stock),
          description: formData.description,
          image:formData.image,
        })
      )
     toast.success("Product Successfully added");
    }
  }catch(error){
      console.log(error)
    }
    finally{
      setShowModal(!showModal)
    }
    }
      
  
  const handleDelete=(id:number)=>{
    const confirmed=window.confirm('Are you Want Delete Product')
    if(!confirmed){ return }
    try{
      dispatch(deleteProduct(id))
    }catch(error){
      console.log(error)
    } 
  }
  return (
    <div className="p-6">
      {/* Add Product Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Product Management
        </h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          onClick={handleModal}
        >
          + Add Product
        </button>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              {tableHeader.map((item) => (
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
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b bg-gray-900 hover:bg-black-100 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-3 text-white">{product.id}</td>
                  <td className="px-4 py-3 text-white">{product.name}</td>
                  <td className="px-4 py-3 text-white">{product.price}</td>
                  <td className="px-4 py-3 text-white">{product.stock}</td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md shadow hover:bg-red-600 transition"
                    onClick={()=>handleDelete(product.id)}>
                      Delete
                    </button>
                    <button onClick={()=>handleEdit(product)} className="bg-gray-500 text-white px-3 py-1 rounded-md shadow hover:bg-gray-600 transition">
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={tableHeader.length + 1} className="px-4 py-3 text-center text-gray-500">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
       <Modal
       handleModal={handleModal}
       handleClick={handleAddProduct}
       productFormArray={productFormArray}
       formData={formData}
       setFormData={setFormData}
      //  isEdit={!selectedProduct}
     />
     
      )}

      <ToastContainer />
    </div>
  )
}

export default ProductPage;