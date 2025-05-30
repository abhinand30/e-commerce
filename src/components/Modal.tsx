import React from 'react'

import { ModalProps } from '../common/type/types';

const Modal: React.FC<ModalProps> = (props) => {

  const { productFormArray, setFormData, formData, handleClick, handleModal } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result as string;
        setFormData((prevState) => ({
          ...prevState,
          image: base64String,
        }));
      };

      reader.onerror = (error) => {
        console.error('Error converting file:', error);
      };

      reader.readAsDataURL(file);
    }
  };



  return (
    <div className="relative top-20 mx-auto p-6 border max-w-md shadow-lg rounded-md bg-white">
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900">Add Product</h3>
        <div className="mt-4 px-6 py-3">
          <form noValidate onSubmit={handleClick}>
            {productFormArray.map((item, index) => (
              <div key={index} className="mb-4 text-left">
                <p className="text-sm font-medium text-gray-700 mb-1">{item.name}</p>
                {item.type === 'select' ? (
                  <select
                    id={item.name}
                    name={item.name}
                    className="border w-full h-9 rounded px-2"
                    value={formData[item.name]}
                    onChange={handleChange}
                    required={true}
                  >
                    <option value="">Choose {item.name}</option>
                    {item?.categories.map((category, i) => (
                      <option key={i} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                ) : item.type === 'textArea' ? (
                  <textarea
                    rows={3}
                    name={item.name}
                    className="border w-full rounded px-2"
                    value={formData[item.name]}
                    onChange={handleChange}
                    required={true}
                  />
                ) : item.type === 'file' ? (

                  <input type="file" className="border w-full rounded px-2" accept="image/*" onChange={handleFileChange} />

                ) : (
                  <input
                    type={item.type}
                    name={item.name}
                    className="border w-full h-9 rounded px-2"
                    value={formData[item.name]}
                    onChange={handleChange}
                    required={true}
                  />
                )}
              </div>
            ))}
          </form>
          {formData.image && (
            <img src={formData.image} alt="image" className="mt-4 max-h-40 rounded-md shadow-sm" />
          )}

        </div>
        <div className="flex justify-center gap-4 mt-6">

          <button
            type='submit'
            onClick={handleClick}
            className="px-4 py-2 bg-black rounded text-white shadow-md hover:opacity-90 focus:ring-2 focus:ring-offset-2"
          >
            Add Product
          </button>

          <button
            onClick={handleModal}
            className="px-4 py-2 rounded bg-gray-500 text-white shadow-md hover:opacity-90 focus:ring-2 focus:ring-offset-2"
          >
            Close
          </button>

        </div>
      </div>
    </div>

  )
}

export default Modal