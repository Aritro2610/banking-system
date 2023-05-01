import axios from 'axios';
import { createContext,useState,useReducer } from 'react';
const getAllUsersUrl = "http://localhost:80/acc/users"
const getUserUrl = "http://localhost:80/acc/users"

export const UserContext = createContext();
const GlobalState = ({children})=>{
    // const INITIAL_STATE = {
    //     allUsers:null,
    //     user:{},
    //     transactions:null,
    //     loading: false,
    //     error:null
    // }
        // const UserReducer = (state, action)=>{
        //     switch(action.type){
        //         case "VIEW_CUSTOMERS":
        //             return{
        //                 allUsers:action.payload,
        //                 user:null,
        //                 loading:false,
        //                 error:false
        //             };
        //         case "VIEW_SINGLE_CUSTOMER":
        //             return{
        //                 allUsers:null,
        //                 user:action.payload,
        //                 loading:false,
        //                 error:false
        //             };
        //         case "GET_TRANSACTION":
        //             return{
        //                 allUsers:null,
        //                 user:action.null,
        //                 transactions:action.payload,
        //                 loading:false,
        //                 error:false
        //             };
        //         default:
        //             return state
        //     }
        // }
        // const [state,dispatch] = useReducer(UserReducer,INITIAL_STATE);
        const [allUsers, setAllUsers] = useState([]);
        const [user, setUser] = useState({});
    
        const getAllUsers = async()=>{
            try {
                await axios.get(getAllUsersUrl).then(res=>{
                    setAllUsers(res.data);
                    // dispatch({
                    //     type:'VIEW_CUSTOMERS',
                    //     payload:res.data,
                    // })
                    // setUsers(data)
                }).catch(err=>{
                    console.log(err);
                }).finally(()=>{
                    console.log("succesfully patched");
                })
            }catch(err){
                console.log(err);
            }
        }
        const getUser = async(userId)=>{
            try {
                await axios.get(`${getUserUrl}/${userId}`).then(res=>{
                    setUser(res.data);
                    // dispatch({
                    //     type:'VIEW_SINGLE_CUSTOMER',
                    //     payload:res.data,
                    // })
                }).catch(err=>{
                    console.log(err);
                }).finally(()=>{
                    console.log("succesfully patched");
                })
            }catch(err){
                console.log(err);
            }
        }
        const getTransaction = async()=>{
            try {
                await axios.get('http://localhost:80/acc/transaction').then(res=>{
                    setUser(res.data);
                    // dispatch({
                    //     type:'GET_TRANSACTION',
                    //     payload:res.data,
                    // })
                }).catch(err=>{
                    console.log(err);
                }).finally(()=>{
                    console.log("succesfully patched");
                })
            }catch(err){
                console.log(err);
            }
        }
    
    
        return(
            <UserContext.Provider value={{
            // allUsers:state.allUsers,
            // user:state.user,
            // transactions:state.transactions,
            allUsers,
            user,
            getAllUsers,
            getTransaction,
            getUser}}>
                {children}
            </UserContext.Provider>
        )
    // export const UserProvider = ({children})=>{

    // }
}


export default GlobalState
