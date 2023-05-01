import './App.css';
import HomePage from './pages/HomePage';
import CustomerPage from './pages/CustomerPage';
import {Login} from './pages/Login';
import { CreateAccount } from './pages/Signup';
import {customerTransfer as Transfer} from './components/customerTransfer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AllCustomers from './pages/AllCustomers';
// import { UserProvider } from './context/user';
import useFetch from './api/useFetch'
// import UserContext from "./context/user";
import { useContext, useReducer,useEffect,createContext } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';

export const UserContext = createContext();

const INITIAL_STATE = {
    allUsers:null,
    transactions:null,
    loading: false,
    error:''
}

const UserReducer = (state, action)=>{
      switch(action.type){
          case 'VIEW_CUSTOMERS':
              return {
                allUsers:action.payload,
              }
          case 'VIEW_CUSTOMERS_FAILURE':
              return{
                  user:{},
                  allUsers:[],
                  loading:false,
                  error:action.payload
              };
          case 'GET_TRANSACTION':
              return{...state,
                  allUsers:null,
                  user:action.null,
                  transactions:action.payload,
                  loading:false,
                  error:false
              };
          default:
              return state
      }
  }

function App() {
  const [state,dispatch] = useReducer(UserReducer,INITIAL_STATE)

//   useEffect(()=>{
//     // getAllUser();
//     getAllUsers()
// },[])

  const getAllUsers = async()=>{
    try {
        await axios.get("http://localhost:80/acc/users").then(res=>{
            dispatch({
                type:'VIEW_CUSTOMERS',
                payload:res.data,
            })
            // console.log(res.data)
            // setUsers(data)
        }).catch(err=>{
            dispatch({
              type:'VIEW_CUSTOMERS_FAILURE',
              payload:err
            })
        }).finally(()=>{
            console.log("succesfully patched");
        })
    }catch(err){
        console.log(err);
    }
}

  return (
    <div className="App">
      <UserContext.Provider value={{
        getAllUsers,
        allUsers:state.allUsers
        }}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<CreateAccount/>}/>
            <Route path='/viewcustomers' element={<AllCustomers/>}/>
            <Route path='/user/:paramUserId' element={<CustomerPage/>}/>
            <Route path='/transfer' element={<Transfer/>}/>
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
