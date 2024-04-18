import React ,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { registerUser } from '../actions/userActions';
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';

export default function Registerscreen() {

     const [name,setname]=useState('');
     const [email,setemail]=useState('');
     const [password,setpassword]=useState('');
     const [cpassword, setcpassword]=useState('');
     const registerstate= useSelector(state=>state.registerUserReducer)

     const {error,loading,success}=registerstate

     const dispatch=useDispatch()



     function register(){
        
          if(password !== cpassword)
          {
            alert("password not matched !! ")
          }
          else{
            const user={
              name,
              email,
              password
            }
            console.log(user);
            dispatch(registerUser(user))
          }
     }

  return (
    <div>
    <div className='row justify-content-center mt-5'>
        <div className='col-md-5'>
            <div className='shadow-lg p-3 mb-5 bg-white rounded' style={{ textAlign: 'left' }}>
   
               {loading && (<Loading/>)}
               {success && (<Success success='User Registered Successfully'/>)}
               {error && (<Error error='Email Already Registered'/>)}

                <h2 style={{ fontSize: '35px', textAlign: 'center' }} className='m-2'>REGISTER</h2>
                <div className='mt-5'>
                    <input required type="text" placeholder="name" className='form-control' value={name} onChange={(e) => { setname(e.target.value) }} />
                    <input required type="text" placeholder="email" className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }} />
                    <input required type="text" placeholder="password" className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    <input required type="text" placeholder="confirm password" className='form-control' value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                    <button className='btn mt-4 mb-3' onClick={register}>REGISTER</button>
                    <br/>
                    <a  style={{color: 'black'}} href='/login'>Click Here To Login....</a>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}
