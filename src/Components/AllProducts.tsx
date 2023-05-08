import { useContext, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';
import { ProductContext, searchContext,  handleAddToCartContext } from "../App"






const AllProducts = () => {

    const products = useContext(ProductContext);
    const search = useContext(searchContext);
    const handleAddToCart = useContext(handleAddToCartContext);
  
 const controls = useAnimation();
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    else {
      controls.start("hidden");
    }
    console.log(inView);
    
  }, [controls, inView]);
  
  return (
    <div className='px-[60px] py-12 bg-[#F5F5F5]'>

      <motion.div
        ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0},
      }}
      transition={{duration: 1}}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8'>
        
        {products.filter((data) => {
          return search.toLowerCase() === '' 
            ? data 
            : data.category.toLowerCase().includes(search)
        })
          .map((data) => 
            <div key={data.id}
            >
              <div  className=" h-full border bg-gray-50 overflow-hidden rounded-3xl transform transition duration-500 hover:scale-110">
                        <img src={data.pix} alt="pix" className='w-full h-[230px]' />
                <div className='mt-2 space-y-3 px-4 text-left'>

                  <div className=''>
                    <div className=' flex justify-between items-center'>
                      <p className='text-lg'>Category: {data.category} </p>
                      <p className='text-2xl text-pry'>${data.price}</p>
                     
                    </div>
                     <p className='text-sm'>The Cosy sofa comes in a choice of two sizes to suit your living spaceDesigned with traditional hardwood legs and deep sprung cushions.</p>
                    
                  </div>
                            
                             
                </div>
                
                <div className='flex justify-between items-center px-4 mt-4 '>
                    

                    <div>
                    <button
                      className='bg-pry text-gray-100 mb-4   px-6 py-2 rounded-lg text-sm hover:opacity-75'
                      onClick={() => handleAddToCart({ ...data, count: 1 , total: parseInt(data.price)})}
                    >ADD TO CART</button>
                    </div>
                  </div>
                
                        
              </div>
              
            </div>
            
          )
        }
      </motion.div>
    </div>
  )
}

export default AllProducts

