import {useState, useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


var Content=()=>{
    const [cart, setCart] =useState([])
  
  const [menuItems,setMenuItems]=useState([]);

  
  useEffect(()=>{
    alanBtn({
      key: '2851c42d7d37e79b7fcdf8bc929272752e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if(commandData.command==='getMenu'){
          setMenuItems(commandData.data)
        }
        else if(commandData.command==='addToCart'){
          addToCart(commandData.data)
        }
      },
  });
  },[])

  const addToCart=(menuItem)=>{
    setCart((oldCart)=>{
      return [...oldCart,menuItem]
    })

    }
    return(
    <div>
        <div>
          <div id='menu' style={{height:"auto", width:"100%"}} className="left-div"><h2 className=' text-white menuHeading font-extrabold text-xl h-8 w-auto text-center'>MENU</h2>
          {menuItems.map((menuItem)=>(
   
   
     <Card className='cards m-8 text-center' style={{ width: '200px', backgroundColor:'burlywood'}}>
     <Card.Img style={{height:'150px', width:'200px'}} variant="top" src={menuItem.image} />
     <Card.Body>
       <Card.Title style={{color:'brown', fontWeight:'bold'}}>{menuItem.name}</Card.Title>
       <Card.Text>
       {menuItem.price} - {menuItem.category}
       </Card.Text>
       <Button  variant="outline-light mt-3 " style={{backgroundColor:'chocolate'}} onClick={()=>{addToCart(menuItem)}}>Add to cart</Button>
     </Card.Body>
   </Card>
   
   ))}</div >
   </div>
   <div className="right-div"style={{height:"auto", width:"100%"}}>
   <h3 id='cart' className='text-white cartHeading font-extrabold text-xl  text-l w-auto h-8 text-center'>CART</h3>
   
   {cart.map((cartItem)=>( 
    <Card className='cards m-3 text-center' style={{ width: '140px', backgroundColor:'burlywood'}}>
    <Card.Img style={{height:'100px', width:'150px'}} variant="top" src={cartItem.image} />
    <Card.Body>
      <Card.Title style={{color:'brown',fontWeight:'bold'}}>{cartItem.name}</Card.Title>
      <Card.Text>
      {cartItem.price} - {cartItem.category}
      </Card.Text>
     
    </Card.Body>
  </Card>
   
     
   ))}
   </div>
          
        </div>
    )
}
export default Content