import { useState,  createContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { AnimatePresence } from 'framer-motion';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Aboutpage from './Pages/Aboutpage';
import Contactpage from './Pages/Contactpage';
import Homepage from './Pages/Homepage';
import Productpage from './Pages/Productpage';
import Cart from './Components/Cart';

import FurnituresData from './Data/FurnituresData';

export const ProductContext = createContext(FurnituresData[0].furnitures);
export const productActiveNavContext = createContext("one");
export const searchContext = createContext("");
export const cartItemsContext = createContext<CartItem[]>([]);
export const SetSearchContext = createContext((value: string) => {});
export const handleAddToCartContext = createContext((value: CartItem) => {});
export const removeCartItemContext = createContext((value: CartItem) => {});
export const OfficeContext = createContext((id: string) => {});
export const BedroomContext = createContext((id: string) => {});
export const KitchenContext = createContext((id: string) => {});
export const LivingroomContext = createContext((id: string) => {});
export const filterByCategoryContext = createContext((item: string) => { });
export const handleIncrementCountContext = createContext((item: string) => { });
export const handleDecrementCountContext = createContext((item: string) => { });
export const calculateCartTotalContext = createContext(0);

type CartItem = {
  // define the shape of a cart item
  id: string;
  category: string;
  price: string;
  designer: string;
  information: string;
  pix: string;
  count: number;
  total: number 
}

function App() {
  const location = useLocation()

  const [productVal, setProductVal] = useState(FurnituresData[0].furnitures)

  // what will be displayed on the products page
  const [products, setProducts] = useState(productVal);

  const [productActiveNav, setProductActiveNav] = useState("one")
  const [search, setSearch] = useState("")
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  // sets products to office products
  const changeProductsToOffice = (id: string) => {
    setProducts(FurnituresData[1].furnitures);
    setProductVal(FurnituresData[1].furnitures)
    setProductActiveNav(id)
  };
  // sets products to bedroom products
  const changeProductsToBedroom = (id: string) => {
    setProductVal(FurnituresData[2].furnitures);
    setProducts(FurnituresData[2].furnitures);
    setProductActiveNav(id)
  };
  // sets products to kitchen products
  const changeProductsToKitchen = (id: string) => {
    setProductVal(FurnituresData[3].furnitures);
    setProducts(FurnituresData[3].furnitures);
    setProductActiveNav(id)
  };
  // sets products back to living rooom products
  const changeProductsToLivingroom = (id: string) => {
    setProductVal(FurnituresData[0].furnitures);
    setProducts(FurnituresData[0].furnitures);
    setProductActiveNav(id)
  };

// this function filters or sorts the product based on user choice
  const filterByCategory = (item: string) => {
    const filterResult = productVal.filter((curData) => {
      return curData.category === item;
    }) 
    setProducts(filterResult)
  }


  // This function adds the item clicked to the cart
  const handleAddToCart = (data: CartItem) => {
    const itemExists = cartItems.find((item) => item.id === data.id)

    if (itemExists) {
      // return cartItems
      const updatedCartItems = cartItems.map((item) =>
      item.id === data.id ? { ...item, count: item.count } : item
      );
      setCartItems(updatedCartItems);
      alert('item added to cart')
    }
    else {

      const newCartItem = { ...data, count: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
    console.log(cartItems);
    
  }

  //function to remove item from the cart 
  const removeCartItem  = (data: CartItem) => {
      const updatedCartItems = cartItems.filter(item => item.id !== data.id);
    setCartItems(updatedCartItems);
    
  }

// function increases the count onclick on the + sign
  const handleIncrementCount = (id: string) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCartItems(updatedCartItems);
    calculateItemTotalAmount(id);
  };
  
  // function decreases the count onclick on the - sign
  const handleDecrementCount = (id: string) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id && item.count > 1  ? { ...item, count: item.count - 1 } : item
    );
  
    setCartItems(updatedCartItems);
    calculateItemTotalAmount(id);
  };

 
  // function calculates the total amount of an item in the cart
 const calculateItemTotalAmount = (id: string) => {
  setCartItems(prevCartItems => {
    const updatedCartItems = prevCartItems.map((item) =>
      item.id === id ? { ...item, total: item.count * parseFloat(item.price) } : item
    );
    return updatedCartItems;
  });
 };
  
    //  calculates the total amount of all items in the cart
  const calculateCartTotal  = cartItems.reduce((accumulator, cartitem) => accumulator + (cartitem.total), 0);

  return (
    <div className="App">
      <Header />
      {/* <button onClick={changeProductsToOffice}>log</button> */}

      <ProductContext.Provider value={products}>
        <OfficeContext.Provider value={changeProductsToOffice}>
          <BedroomContext.Provider value={changeProductsToBedroom}>
            <KitchenContext.Provider value={changeProductsToKitchen}>
              <LivingroomContext.Provider value={changeProductsToLivingroom}>
                <filterByCategoryContext.Provider value={filterByCategory}>
                  <productActiveNavContext.Provider value={productActiveNav}>
                    <searchContext.Provider value={search}>
                      <SetSearchContext.Provider value={setSearch}>
                          <cartItemsContext.Provider value={cartItems}>
                            <handleAddToCartContext.Provider value={handleAddToCart}>
                              <removeCartItemContext.Provider value={removeCartItem}>
                                <handleIncrementCountContext.Provider value={handleIncrementCount}>
                                  <handleDecrementCountContext.Provider value={handleDecrementCount}>
                                  <calculateCartTotalContext.Provider value={calculateCartTotal}>
                                    <AnimatePresence mode='wait'>
                                      <Routes key={location.pathname} location={location}>
                                        <Route path="/" element={<Homepage />} />

                                        <Route path="/Productpage" element={<Productpage />} />

                                        <Route path="/Aboutpage" element={<Aboutpage />} />
                                        <Route path="/Contactpage" element={<Contactpage />} />
                                        <Route path="/Cart" element={<Cart />} />
                                      </Routes>
                                    </AnimatePresence>
                                      
                                    </calculateCartTotalContext.Provider>
                                   </handleDecrementCountContext.Provider>
                                  </handleIncrementCountContext.Provider>
                                </removeCartItemContext.Provider>
                              </handleAddToCartContext.Provider>
                            </cartItemsContext.Provider>
                        </SetSearchContext.Provider>
                    </searchContext.Provider>
                  </productActiveNavContext.Provider>
                </filterByCategoryContext.Provider>
              </LivingroomContext.Provider>
            </KitchenContext.Provider>
          </BedroomContext.Provider>
        </OfficeContext.Provider>
      </ProductContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
