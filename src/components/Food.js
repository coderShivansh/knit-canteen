import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Modal} from 'react-bootstrap'
import { addToCart } from '../actions/cartActions'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Food({food}) {

  AOS.init()

  const [quantity,setquantity]=useState(1)
  const [varient,setvarient]=useState('NA')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch=useDispatch()

  function addtocart()
  {
        dispatch(addToCart(food,quantity,varient))
  }

  return (
    <div  data-aos='zoom-in' className='shadow-lg p-3 mb-5 bg-white rounded'>
      <div onClick={handleShow}>
      <h1>{food.name}</h1>
      <img src={food.image} alt ={"hello img will load"}className='img-fluid' style={{height:'200px',width:'200px'}}/>
      </div>
      <div className='flex-container'>
        <div  className='w-100 m-1'>
            <p>Varients</p>
            <select className='form-control' value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
            {food.varients.map(varient=>{
                return <option value={varient} >{varient}</option>
            })}
            </select>
        </div>
        <div className='w-100 m-1'>
            <p>Quantity</p>
            <select  className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                {[...Array(10).keys()].map((x,i)=>{
                    return <option value={i+1}>{i+1}</option>
                })}
            </select>
        </div>
      </div>
      <div className='flex-container'>
          <div  className='m-1 w-100'>
              <h1 className='mt-1'>Price: ₹ {food.prices[0][varient]*quantity} </h1>
          </div>
          <div className='m-1 w-100'>
              <button className='btn' onClick={addtocart}>ADD TO CART</button>
          </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <img src={food.image} alt ={"hello img will load"}className='img-fluid' style={{height:'200px',width:'500px'}}/>
        <p>{food.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}
