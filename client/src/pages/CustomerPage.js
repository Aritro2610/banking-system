import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import useFetch from '../api/useFetch';
import { UserContext } from '../App';
import axios from 'axios';
const CustomerPage = () => {
    const {paramUserId} = useParams();
    const {data,loading,reFetch} = useFetch(`http://localhost:80/acc/user/${paramUserId}`)
    const {user,allUsers,getAllUsers} = useContext(UserContext)

    const [userData, setUserData] = useState({lender:'',borrower_name:'',amount:0})

    const navigate = useNavigate();

    const handleChange=(value)=>{
      if(data.user.name!=value){
        setUserData({...userData,lender:data.user.name,borrower_name:value})
      }else{
        console.log("yoou cannot choose yourself")
      }
    }

    const handleSubmit = async()=>{
      try {
        await axios.post('http://localhost:80/acc/transfer',userData).then(res=>{
          console.log("succesfull")
        })
        
      } catch (error) {
        console.log(error)
      }finally{
        getAllUsers();
      }
      navigate('/viewcustomers')
    }


    console.log(allUsers)
    console.log(data)
    useEffect(()=>{
      console.log(userData)
    },[userData])


  return (
    <div>CustomerPage- {paramUserId} <br /><br />
    <form onSubmit={handleSubmit}>
      {data.user&&(<div>
              <div>
                  Customer Nmae - {data.user.name}
              </div>
              <div>
                  Available Balance - {data.user.balance}
              </div>
              <div>
                  Account tupe - {data.user.accountType}
              </div>
        </div>)}
        <select name="cars" id="cars" onChange={(e)=>handleChange(e.target.value)}>
          {allUsers&&allUsers.user.map((userOne,index)=>(
              <option value={userOne.name}>{userOne.name}</option>
            
          ))}
      </select>
      <div>
      {userData.borrower_name}
      <div>
        <label>Enter amount</label>
        <input type="number" name="amount" id="amount" onChange={(e)=>setUserData({...userData,amount:e.target.value
        })} />
      </div>
        <button type="submit">Submit</button>
      </div>

    </form>
    </div>
  )
}

export default CustomerPage