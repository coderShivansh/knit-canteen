import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { editFood, getFoodById } from '../actions/foodAction';
import Loading from '../components/Loading'
import Error from '../components/Error'
import Filter from '../components/Filter'
import Success from '../components/Success'

export default function Editfood() {

    const { foodid } = useParams();
    const dispatch =useDispatch()

    const [name,setname]= useState('')
    const [smallprice, setsmallprice]= useState()
    const [mediumprice , setmediumprice] =useState()
    const [largeprice , setlargeprice] = useState()
    const [naprice,setnaprice] =useState()
    const [image , setimage]=useState('')
    const [description , setdescription]=useState('')
    const [category, setcategory] =useState('')

    const getfoodbyidstate = useSelector(state=> state.getFoodByIdReducer)
    const {food , error, loading} =getfoodbyidstate

    const editfoodstate = useSelector((state)=> state.editFoodReducer)

    const {editloading , editerror , editsuccess} = editfoodstate

    useEffect(()=>{
        if(food)
        {
            if(food._id=== foodid)
            {
                setname(food.name)
                setdescription(food.description)
                setcategory(food.category)
                setimage(food.image)
                setnaprice(food.prices[0]['NA'])
                setsmallprice(food.prices[0][food.varients[0]])
                setmediumprice(food.prices[0][food.varients[1]])
                setlargeprice(food.prices[0][food.varients[2]])
            }
            else
            {
                dispatch(getFoodById(foodid))
            }
        }
        else {
            dispatch(getFoodById(foodid))
        }
        
    },[food , dispatch ])

    function formHandler(e){

        e.preventDefault();
        const updatedfood={
            _id: foodid,
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
        
        dispatch(editFood(updatedfood))
      }


  return (
    <div>
      
      
      <div style={{textAlign:'left'}} className='shadow-lg p-3 mb-5 bg-white rounded'>
      <h1>Edit Dish</h1>
      {loading && (<Loading/>)}
         {error && (<Error error='Something went Wrong'/>)}
         
      {editsuccess && (<Success success='Dish Edited Successfully!!'/>)}
      {editloading && (<Loading />)}
        

         <form onSubmit={formHandler}>
          <input type="text" className='form-control' placeholder="name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
          <input type="text" className='form-control' placeholder="small/first varient price" value={smallprice} onChange={(e)=>{setsmallprice(e.target.value)}}/>
          <input type="text" className='form-control' placeholder="medium/second varient price" value={mediumprice} onChange={(e)=>{setmediumprice(e.target.value)}}/>
          <input type="text" className='form-control' placeholder="large/third varient price" value={largeprice} onChange={(e)=>{setlargeprice(e.target.value)}}/>
          <input type="text" className='form-control' placeholder="default/NA varient price to be 0 mandatory" value={naprice} onChange={(e)=>{setnaprice(e.target.value)}}/>
          <input type="text" className='form-control' placeholder="description" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
          <input type="text" className='form-control' placeholder="category" value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
          <input type="text" className='form-control' placeholder="image URL" value={image} onChange={(e)=>{setimage(e.target.value)}}/>
          <button className='btn mt-3'  type='submit'>Edit Dish</button>
         </form>
    </div>
    </div>
  )
}
