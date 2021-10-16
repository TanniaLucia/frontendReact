import React, {useState, useEffect} from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import {gql} from 'apollo-boost'


const GET_PROJECT = gql `
    query Query($userId: String!) {
        projectByIdUser(userId: $userId) {
        id
        nombre
        estado
        idUser
        }
    }
`;

const ProjectList = ({ projects}) => {
    const [getProject, {called, loading, data}] = useLazyQuery(GET_PROJECT)
    const [project, setProject] = useState(null);
    const [userId, setUserId] = useState(""); 

    const showProject = (userId) => {
        getProject({ variables: {userId: userId} })
    }

    useEffect(()=>{
        if(data){
            setProject(data.projectByIdUser)
        }
    },[data])


    if(project){
        return(
            <div className="row">
                {
                    data.projectByIdUser.map(({id, nombre, estado, idUser}) =>(
                        <div className="card-body">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>{`Id : ${id}`}</td>
                                    </tr>
                                    <tr>
                                        <td>{`Nombre : ${nombre}`}</td>
                                    </tr>
                                    <tr>
                                        <td>{`Estado : ${estado}`}</td>
                                    </tr>
                                    <tr>
                                        <td>{`Id Usuario : ${idUser}`}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                     )}
                     <button onClick={() => setProject(null)}>Cerrar</button>
            </div>
        );
    }
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <form
                    onSubmit ={async e=>{
                        e.preventDefault();
                        getProject({ variables: {userId: userId}})
                    }}
                >
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Ingrese el idUser"
                            value={userId}
                            onChange={e => setUserId(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-success btn-block" onClick={()=> showProject(userId)}>
                        Buscar Proyecto
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ProjectList