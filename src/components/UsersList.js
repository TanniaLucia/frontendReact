import React, { useState, useEffect } from 'react';
import {useLazyQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost';

const GET_USER = gql`
    query Query($userId: String) {
        userByUserId(userId: $userId) {
        userId
        rol
        estado
        edad
        }
    }
`;

const UsersList = ({ users }) => {
    const [getUser, { called, loading, data }] = useLazyQuery(GET_USER) 
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState("");

const showUser = (userId) => {
    getUser({ variables: { userId: userId } })
    }
    
useEffect(() => {
    if (data) {
        setUser(data.userByUserId)
    }
}, [data])

if (user) { 
    console.log(user)
    return(       
      <div>
        <table>
        <tbody>
            <tr>
                <td>
                    <div>{user.userId}</div>
                </td>
                <td>
                    <div>{user.rol}</div>
                </td>
                <td>
                    <div>{user.estado}</div>
                </td>
                <td>
                    <div>{user.edad}</div>
                </td>
            </tr>
        </tbody>
        </table>
        
        <button onClick={() => setUser(null)}>close</button>
      </div>
    )
  }
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <form
              onSubmit={async e => {
                e.preventDefault();
                getUser({ variables: { userId: userId } })
                }}
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Escriba el userID..."
                  value={userId}
                  onChange={e => setUserId(e.target.value)}
                  className="form-control"
                />
              </div> 
              <button type="submit" className="btn btn-success btn-block" onClick={() => showUser(userId)} >
                       Search User
               </button>  
            </form>
        </div>
      </div>
    );
  }
  export default UsersList