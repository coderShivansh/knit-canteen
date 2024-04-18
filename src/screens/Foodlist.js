import React ,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Filter from '../components/Filter'
import { getAllFoods } from '../actions/foodAction'
import { Link } from 'react-router-dom';
import { deleteFood } from '../actions/foodAction'

export default function Foodlist() {

    const dispatch=useDispatch()

    const foodsstate= useSelector(state=>state.getAllFoodsReducer)
  
    const {loading, foods, error}=foodsstate
    useEffect(()=>{
        dispatch(getAllFoods())
   },[])

  return (
    <div>
       <h2>Foods List</h2>
       {loading && (<loading/>)}
       {error && (<Error error='Something went Wrong'/>)}
       <table className='table table-dark table-bordered table-responsive-sm'>
            <thead className='thead'>
                <tr>
                    <th>Name</th>
                    <th>Prices</th>
                    <th>Category</th>
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody>
            {foods && foods.map(food=>{
                   
                             return <tr>
                                <td>{food.name}</td>
                                <td><ul style={{ listStyle: 'none', padding: 0 }}>
                            {Object.entries(food.prices[0]).map(([variant, price]) => (
                                <li key={variant}>{variant}: {price}</li>
                            ))}
                        </ul></td>
                                <td>{food.category}</td>
                                <td>
                                    <i className='fa fa-trash m-1' onClick={()=>{dispatch(deleteFood(food._id))}}></i>
                                    <Link to={`/admin/editfood/${food._id}`}><i className='fa fa-edit m-1'></i></Link>
                                </td>

                             </tr>
                    

            })}
            </tbody>
       </table>
      
    </div>
  )
}
