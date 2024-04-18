import React ,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { filterFoods } from '../actions/foodAction'
export default function Filter() {

    const dispatch=useDispatch()
    const [searchkey , setsearchkey] = useState('')
    const [category , setcategory] = useState('all')

  return (
    <div className='container'>
                 <div className='row justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>
                    <div className='col-md-3 '>
                        <input value={searchkey} onChange={(e)=>{setsearchkey(e.target.value)}} type="text" className='form-control' placeholder="search Dish"/>
                    </div>
                    <div className='col-md-3 '>
                        <select className='form-control mt-2' value={category} onChange={(e)=>{setcategory(e.target.value)}}>
                            <option value='all'>All</option>
                            <option value="veg">Veg</option>
                            <option value="nonveg">Non-Veg</option>
                        </select>
                    </div>
                    <div className='col-md-3 '>
                        <button className='btn mt-2' onClick={()=>{dispatch(filterFoods(searchkey , category))}}>FILTER</button>
                    </div>
                 </div>  
    </div>
  )
}
