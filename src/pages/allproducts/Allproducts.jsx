import React, { useContext, useEffect } from 'react'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify'

function Allproducts() {
  const context = useContext(myContext)
  const { mode, product, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice } = context

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)

  const addCart = (product) => {
    dispatch(addToCart(product))
    toast.success('Added to cart')
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <Filter />
      <section className="text-white body-font">
        <div className="container px-5 py-8 mx-auto md:py-16">
          <div className="w-full mb-6 lg:w-1/2 lg:mb-10">
            <h1 className="mb-2 text-2xl font-medium text-white sm:text-3xl title-font">Our Latest Collection</h1>
            <div className="w-20 h-1 bg-blue-600 rounded"></div>
          </div>

          <div className="flex flex-wrap -m-4">
            {product.filter((obj) => obj.title.toLowerCase().includes(searchkey))
              .filter((obj) => obj.category.toLowerCase().includes(filterType))
              .filter((obj) => obj.price.includes(filterPrice)).map((item, index) => {
                const { title, price, description, imageUrl, id } = item
                return (
                  <div onClick={() => window.location.href = `/productinfo/${id}`} key={index} className="p-4 md:w-1/4 drop-shadow-lg">
                    <div className="h-full overflow-hidden transition-shadow duration-300 ease-in-out border-2 border-gray-200 hover:shadow-lg hover:shadow-blue-400 border-opacity-60 rounded-2xl">
                      <div className="flex justify-center cursor-pointer">
                        <img className="w-full p-2 transition-transform duration-300 ease-in-out rounded-2xl h-80 hover:scale-110" src={imageUrl} alt="product" />
                      </div>
                      <div className="p-5 border-t-2 bg-blue-50">
                        <h2 className="mb-1 text-xs font-medium tracking-widest text-blue-400 title-font">TROVIX</h2>
                        <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">{title}</h1>
                        <p className="mb-3 leading-relaxed text-blue-600">₹{price}</p> {/* Added text-blue-600 to price */}
                        <div className="flex justify-center">
                          <button
                            type="button"
                            onClick={() => addCart(item)}
                            className="w-full py-2 text-sm font-medium text-white bg-blue-600 rounded-lg focus:outline-none hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Allproducts
