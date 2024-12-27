import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{ Link,usenavigate } from 'react-router-dom';
import { deleteUser } from './userReducer';

function home(){
    const users=useSelector (state=>state.users);
    const dispatch=useDispatch();

    const handleDelete=(id)=>{
        dispatch(deleteUser({ id }))

    }
    return(
      <div className='container'>
        <h2>Crud App with Json Server</h2>
        <Link to="/create" className='btn btn-success my-3'>Create +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {users.map((use,index)=>(
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={'/edit/${user.id}'} className='btn btn-sm btn-primary'>Edit</Link>
                                <button onclick={()=> handleDelete} className='btn btn-sm btn-danger ms-2'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        
        </div>
    )
}

export default home

