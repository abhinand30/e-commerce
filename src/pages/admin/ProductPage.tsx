import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { productFormArray } from "../../common/data/dataArray";
import Modal from "../../components/Modal";
import { productState, productType } from "../../common/type/types";
import { addProduct, deleteProduct, editProduct, productSelected } from "../../redux/slice/productSlice";
import CommonTable from "../../components/CommonTable";


const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelected);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [formData, setFormData] = useState<productState>({
    name: '',
    price: null,
    category: '',
    stock: null,
    description: '',
    image: ''
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


  const handleAddProduct: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const isEmpty = Object.values(formData).some((value) => value === '');
    if (isEmpty) {
      toast.error("All fields are required!");
      return;
    }
    try {
      if (selectedProduct?.id) {
        dispatch(editProduct({
          name: formData.name,
          price: Number(formData.price),
          category: formData.category,
          stock: Number(formData.stock),
          description: formData.description,
          image: formData.image, id: selectedProduct?.id
        }));
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
            image: formData.image,
          })
        )
        toast.success("Product Successfully added");
      }
    } catch (error) {
      console.log(error)
    }
    finally {
      setShowModal(!showModal)
    }
  }


  const handleDelete = (id: number) => {
    const confirmed = window.confirm('Are you Want Delete Product')
    if (!confirmed) { return }
    try {
      dispatch(deleteProduct(id))
    } catch (error) {
      console.log(error)
    }
  }

  const tableHeader = [
    { id: 1, selector: 'id', title: 'Product Id' },
    { id: 2, selector: 'name', title: 'Product Name' },
    { id: 3, selector: 'price', title: 'Price' },
    { id: 4, selector: 'stock', title: 'Stock' },
    {
      id: 5, cell: (row: productType) => <div className="flex gap-10"> <button className="bg-red-500 text-white px-3 py-1 rounded-md shadow hover:bg-red-600 transition"
        onClick={() => handleDelete(row.id)}>
        Delete
      </button>
        <button onClick={() => handleEdit(row)} className="bg-gray-500 text-white px-3 py-1 rounded-md shadow hover:bg-gray-600 transition">
          Edit
        </button></div>, title: 'Action'
    }
  ]

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

      <div className="overflow-x-auto mt-6">

        <CommonTable data={products} header={tableHeader} />
      </div>

      {/* Modal */}
      {showModal && (
        <Modal
          handleModal={handleModal}
          handleClick={handleAddProduct}
          productFormArray={productFormArray}
          formData={formData}
          setFormData={setFormData}

        />

      )}

      <ToastContainer />
    </div>
  )
}

export default ProductPage;