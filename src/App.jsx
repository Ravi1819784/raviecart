
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'

import Home from './Home/Home'
import Admin from './Components/Admin'
import { createContext, useEffect, useState } from 'react'
import Gadget from './Components/Gadget'
import Fashion from './Components/Fashion'
import Profile from './Components/Profile'
import { BsTypeH1 } from 'react-icons/bs'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Forget from './Components/Forget'
import AddToCart from './Components/AddToCart'

;
import Footer from './Home/Footer/Footer'
import SingleProductPage from './Components/SingleProductPage'
import Contact from './Components/Contact'
import AboutUs from './Components/AboutUs'
import Buy from './Components/Buy'

const productContext = createContext();

function App() {




  const [cartProduct, setCartProduct] = useState([]);


const [products,setProducts]=useState([])
const[todo,setTodo]=useState([])
const[contact,setContact]=useState([])
// const[section,setSection]=useState([])
const[imgg,setImgg]=useState("")

  function click(name,price,pi){


  //  if(sp=="Home"){
  //     console.log(`this is home ${sp}`)
  //     console.log(sp)


 // }
 
//   if(pic){

//     const imm=URL.createObjectURL(pic)
    
// const temp=[...todo,{name,price,buy,imm}]
// setTodo(temp)
// localStorage.setItem("dt",JSON.stringify(temp))

//   }

if(pi){
  const  im=URL.createObjectURL(pi)
  const temp=[...todo,{name,price ,imgg:im}]
  setTodo(temp)
     localStorage.setItem("dt",JSON.stringify(temp))
}

//  const temp=[...todo,{name,price }]
//  setTodo(temp)
//    localStorage.setItem("dt",JSON.stringify(temp))
// alert("hello")

  }

    // else if (sp=="Section"){

    //   if(pic){
    //     const imm=URL.createObjectURL(pic)
    //     const temp=[...section,{sp,name,price,img:imm,buy}]
    //     setSection(temp)
    //     localStorage.setItem("sc",JSON.stringify("temp"))
    //   }
    // }

  //   else{
  //     console.log(`this is else ${sp}`)
  //   }
  // }



  useEffect(()=>{
    const a=JSON.parse(localStorage.getItem("dt"))
  
    if(a){
      setTodo(a)
    }

    // const s=JSON.parse(localStorage.getItem("sc"))

    // if(s){
    //   setHome(s)
    // }

  },[])


// function carti (item){
//   const vt=[...cartItem,item]
//   setcartItem(vt)
// }




// const getProducts=async()=>{

//   let result=await fetch ("https://reqres.in/api/products")
//   result =await result .json();
//   setProducts(result);
//   console.log(result.page)
  
// }

// console.log()

// useEffect(()=>{

//   getProducts()

 
// })
// {products.map((item)=>{console.log(`this  is map${item}`)})}

// console.log(`thisi s${products.data}`)


  return (
    <>


 <productContext.Provider value={{ cartProduct, setCartProduct }}>


<BrowserRouter>
<div id="root">

<Nav />
<div className="main-root">
<Routes>
  <Route path="/admin"element={<Admin click={click}/>}/>
<Route path="/about" element={<AboutUs/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/gadget" element={<Gadget/>}/>
<Route path="/fashion" element={<Fashion/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<SignUp/>}/>
<Route path="/forgetPassword" element={<Forget/>}/>
<Route  path={`/single-product/:id`}element={<SingleProductPage/>}/>
<Route path="/cart" element={<AddToCart />}/>
<Route path="/" element={<Home todo={todo} />}/>
<Route path="/buy" element={<Buy/>}/>
  </Routes>
  </div>
  <Footer/>
  </div>
</BrowserRouter>
 </productContext.Provider>
  

    </>
  )
}

export default App
export {productContext}

