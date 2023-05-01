import React, { useContext, useEffect } from 'react'
// import "../components/css/HomePage.css"
import CustomerPage from './CustomerPage';
import useFetch from '../api/useFetch'
// import UserContext from "../context/user";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const AllCustomers = () => {

    const {allUsers,getAllUsers} = useContext(UserContext)
    console.log(allUsers)
    
    useEffect(()=>{
        // getAllUser();
        getAllUsers()
    },[])
    
    
    const navigate = useNavigate()
    const handleClick = (id)=>{
        console.log("Hello")
        getAllUsers()
        // getUser(id)
        // dispatch({type:"VIEW_CUSTOMERS",payload:{data}});
        navigate(`/user/${id}`);
    }

  return (
    <>
        {/* <nav className='nav-bar'>
            <div>
                <h1>Bank</h1>
            </div>
            <div className='nav-list'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/viewcustomers">Customer</a></li>
                </ul>
            </div>
        </nav> */}
        <div className='customer-list'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>AccountType</th>
                    <th>Balance</th>
                </tr>
                {/* {user.user && (<tr>
                    <td>
                        {user.user.name}
                    </td>
                    <td>
                        {user.user.balance}
                    </td>
                    <td>
                        {user.user.accountType}
                    </td>
                </tr>)} */}
                {allUsers&& allUsers.user.map((user)=>{return(
                    
                    <tr key={user._id} onClick={()=>handleClick(user._id)}>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.accountType}
                            </td>
                            <td>
                                {user.balance}
                            </td>
                        {/* <a onClick={()=>handleClick(user._id)} href=''>
                        </a> */}
                    </tr>
                    
                    )})}
            </table>
        </div>
    </>
  )
}

export default AllCustomers

          {/* {allUsers&&allUsers.user.map((userOne)=>(userOne._id===paramUserId?
          <div>
              <div>
                  {userOne.name}
              </div>
              <div>
                  {userOne.balance}
              </div>
              <div>
                  {userOne.accountType}
              </div>
          </div>:""
            )) } */}