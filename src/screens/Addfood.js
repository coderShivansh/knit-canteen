import React ,{useState,useEffect} from 'react'
import { addFood } from '../actions/foodAction'
import { useDispatch , useSelector } from 'react-redux'
import { getAllFoods } from '../actions/foodAction'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Filter from '../components/Filter'
import Success from '../components/Success'

export default function Addfood() {

  const [name,setname]= useState('')
  const [smallprice, setsmallprice]= useState()
  const [mediumprice , setmediumprice] =useState()
  const [largeprice , setlargeprice] = useState()
  const [naprice,setnaprice] =useState()
  const [image , setimage]=useState('')
  const [description , setdescription]=useState('')
  const [category, setcategory] =useState('')

  const dispatch=useDispatch()

  const addfoodstate=useSelector(state=>state.addFoodReducer)
  const {success , error , loading }= addfoodstate
  
  function formHandler(e){

    e.preventDefault();
    const food={
      name,
      image,
      description,
      category,
      prices:{
        small: smallprice,
        medium: mediumprice,
        large : largeprice,
        NA : naprice
      }
    }
    console.log(food)
    dispatch(addFood(food))
  }

  return (
    <div>
    <div style={{textAlign:'left'}} className='shadow-lg p-3 mb-5 bg-white rounded'>
         <h1>Add Dish</h1>

         {loading && (<Loading/>)}
         {error && (<Error error='Something went Wrong'/>)}
         {success && (<Success success='New Dish Added Successfully'/>)}

         <form onSubmit={formHandler}>
          <input type="text" className='form-control' placeholder="name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
          <input type="text" className='form-control' placeholder="small/first varient price" value={smallprice} onChange={(e)=>{setsmallprice(e.target.value)}}/>
          <input type="text" className='form-control' placeholder="medium/second varient price" value={mediumprice} onChange={(e)=>{setmediumprice(e.target.value)}}/>
          <input type="text" className='form-control' placeholder="large/third varient price" value={largeprice} onChange={(e)=>{setlargeprice(e.target.value)}}/>
          <input type="text" className='form-control' placeholder="default/NA varient price to be 0 mandatory" value={naprice} onChange={(e)=>{setnaprice(e.target.value)}}/>
          <input type="text" className='form-control' placeholder="description" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
          <input type="text" className='form-control' placeholder="category" value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
          <input type="text" className='form-control' placeholder="image URL" value={image} onChange={(e)=>{setimage(e.target.value)}}/>
          <button className='btn mt-3'  type='submit'>Add Dish</button>
         </form>
    </div>
    </div>
  )
}
