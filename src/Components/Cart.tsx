import { useContext } from 'react'
import { Link } from 'react-router-dom';

import {cartItemsContext, handleIncrementCountContext, handleDecrementCountContext, removeCartItemContext, calculateCartTotalContext } from "../App"

import { AiOutlineDelete } from 'react-icons/ai';
import { FaLongArrowAltRight } from 'react-icons/fa';


const Cart = () => {
    const cartItems = useContext(cartItemsContext)
    const handleIncrementCount = useContext(handleIncrementCountContext)
    const handleDecrementCount = useContext(handleDecrementCountContext)
    const removeCartItem = useContext(removeCartItemContext)
  const calculateCartTotal = useContext(calculateCartTotalContext)
  

  return (
    <div className='px-8 md:px-24 py-12 bg-gray-50'>
      {cartItems.length === 0 ? (
        <div className='flex flex-col  space-y-4 text-gray-700'>
          <p className='text-2xl'>Cart is empty</p>
          <Link to="../productpage" className='flex items-center justify-center space-x-2 text-xl underline decoration-pry'>
            <p>Go to Products</p>
            <FaLongArrowAltRight />
          </Link>
        </div>
              
          ) : (
                  <div className=' space-y-4 '>
            {cartItems.map((data) => 
                        <div className='flex justify-center'>
                          <div key={data.id} className=" flex justify-between items-center shadow-sm bg-white rounded-md pr-2 md:pr-6 w-full lg:w-5/6 justify-center">

                                <div className='flex items-center space-y-2 space-x-2 md:space-x-6 lg:space-x-12'>
                                  <img src={data.pix} alt="the item" className='w-24 h-24  md:w-48 md:h-24 rounded-md'/>
                                  <div className=''>
                                    <p className='text-lg font-semibold'>{data.category} {data.designer}</p>
                              {/* <p className='text-lg'> <span className='hidden lg:block text-2xl  text-pry'>Price: ${data.price}</span></p> */}
                              <div className='text-gray-600 flex items-center cursor-pointer' onClick={() => removeCartItem(data)}>
                                <AiOutlineDelete />
                                Remove</div>
                                    
                            </div>
                            
                                </div>

                              

                            <div className='space-y-1'>
                              <div className='flex items-center space-x-2   rounded-xl '>
                                    <p className='text-pry bg-gray-300 px-3 py-1 rounded-lg cursor-pointer' onClick={() => handleDecrementCount(data.id)}>-</p>
                                    <p className='bg-white px-1'>{data.count}</p>
                                    <p className='text-pry bg-gray-300 px-3 py-1 rounded-lg cursor-pointer' onClick={() => handleIncrementCount(data.id)}>+</p>
                              </div>

                              <p className='text-lg text-gray-600 '>Total: <span className='text-xl font-semibold text-pry'>${data.total}</span></p>
                              </div>
                              
                          
                              
                          </div>
                        </div>
                        
            )}
            
            <div className=' grid justify-items-center   pt-8'>
              <div className='w-5/6 lg:w-2/6 '>
                <div>
                  <div className='flex justify-between items-center'>
                    <p className='text-gray-600 '>Subtotal</p>
                    <p className='font-semibold text-lg text-gray-900'>${calculateCartTotal}</p>
                  </div>
              
                  <div className='flex justify-between items-center'>
                    <p className='text-gray-600 '>Delivery</p>
                    <p className='font-semibold text-lg text-gray-900'>$0</p>
                  </div>
              </div>

              <div className='flex justify-between items-center'>
                <p className='text-gray-600 '>Total</p>
                  <p className='font-bold text-lg text-pry'>${calculateCartTotal }</p>
              </div>
              

              <button className='mt-8 py-3 w-full bg-pry text-white rounded-lg text-lg'>Check out</button>
              </div>
              
            </div>
                </div>
          )}
    </div>
  )
}

export default Cart
