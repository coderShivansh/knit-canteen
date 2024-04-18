import axios from 'axios';
import { base_url } from '../constant';

export const getAllFoods=()=>async dispatch=>{
    dispatch({type:'GET_FOODS_REQUEST'})

    try{
           const response=await axios.get(`${base_url}/api/foods/getallfoods`)
           console.log(response)
           dispatch({type:"GET_FOODS_SUCCESS", payload : response.data})
    }
    catch (error){
            dispatch({type:'GET_FOODS_FAILED', payload:error})
    }
}

export const filterFoods=(searchkey , category)=>async dispatch=>{

    var filteredFoods;
    dispatch({type:'GET_FOODS_REQUEST'})

    try{
           const response= await axios.get(`/api/foods/getallfoods`)
           filteredFoods = response.data.filter(food=>food.name.toLowerCase().includes(searchkey))

           if(category !=='all')
           {
            filteredFoods = response.data.filter(food=>food.category.toLowerCase() === category)
           }

           dispatch({type:"GET_FOODS_SUCCESS", payload : filteredFoods})
    }
    catch (error){
            dispatch({type:'GET_FOODS_FAILED', payload:error})
    }
}

export const addFood=(food)=>async dispatch=>{
    dispatch({type : 'ADD_FOOD_REQUEST'})

    try {
          const response= await axios.post(`${base_url}/api/foods/addfood`,{food})
          console.log(response)
          dispatch({type: 'ADD_FOOD_SUCCESS'})
    } catch(error){
             dispatch({type:'ADD_FOOD_FAILED', payload : error })
    }
}


export const getFoodById=(foodid)=>async dispatch=>{
    dispatch({type:'GET_FOODBYID_REQUEST'})

    try{
           const response=await axios.post(`${base_url}/api/foods/getfoodbyid` , {foodid} )
           console.log(response)
           dispatch({type:"GET_FOODBYID_SUCCESS", payload : response.data})
    }
    catch (error){
            dispatch({type:'GET_FOODBTID_FAILED', payload:error})
    }
}


export const editFood=(updatedfood)=>async dispatch=>{
    dispatch({type : 'EDIT_FOOD_REQUEST'})

    try {
          const response= await axios.post(`${base_url}/api/foods/editfood`,{updatedfood})
          console.log(response)
          dispatch({type: 'EDIT_FOOD_SUCCESS'})
          window.location.href='/admin/foodslist'
    } catch(error){
             dispatch({type:'EDIT_FOOD_FAILED', payload : error })
    }
}

export const deleteFood=(foodid)=> async dispatch=>{

    try {
       const response=  await axios.post(`${base_url}/api/foods/deletefood`, {foodid})
       alert('Food Deleted Successfully .. !!')
       console.log(response)
       window.location.reload()
    } catch (error) {
           alert('Something went Wrong')
           console.log(error)
    }
}

