import React, { useContext } from 'react';
import myContext from '../../../context/data/myContext';

function AddProduct() {
    const context = useContext(myContext);
    const { products, setProducts, addProduct } = context;

    return (
        <div className="flex items-center justify-center h-screen bg-blue-100">
            <div className="w-full px-10 py-10 bg-white shadow-xl rounded-xl sm:w-96">
                <div>
                    <h1 className="mb-4 text-xl font-bold text-center text-blue-600">Add Product</h1>
                </div>

                <div>
                    <input
                        type="text"
                        value={products.title}
                        onChange={(e) => setProducts({ ...products, title: e.target.value })}
                        name="title"
                        className="w-full px-4 py-2 mb-4 text-blue-600 rounded-lg outline-none bg-blue-50 placeholder:text-blue-300"
                        placeholder="Product title"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        value={products.price}
                        onChange={(e) => setProducts({ ...products, price: e.target.value })}
                        name="price"
                        className="w-full px-4 py-2 mb-4 text-blue-600 rounded-lg outline-none bg-blue-50 placeholder:text-blue-300"
                        placeholder="Product price"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        value={products.imageUrl}
                        onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                        name="imageurl"
                        className="w-full px-4 py-2 mb-4 text-blue-600 rounded-lg outline-none bg-blue-50 placeholder:text-blue-300"
                        placeholder="Product imageUrl"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        value={products.category}
                        onChange={(e) => setProducts({ ...products, category: e.target.value })}
                        name="category"
                        className="w-full px-4 py-2 mb-4 text-blue-600 rounded-lg outline-none bg-blue-50 placeholder:text-blue-300"
                        placeholder="Product category"
                    />
                </div>

                <div>
                    <textarea
                        cols="30"
                        rows="10"
                        value={products.description}
                        onChange={(e) => setProducts({ ...products, description: e.target.value })}
                        className="w-full px-4 py-2 mb-4 text-blue-600 rounded-lg outline-none bg-blue-50 placeholder:text-blue-300"
                        placeholder="Product description"
                    />
                </div>

                <div className="flex justify-center mb-4">
                    <button
                        onClick={addProduct}
                        className="w-full px-4 py-2 font-bold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-500"
                    >
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
