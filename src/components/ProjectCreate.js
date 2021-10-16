import React, {useState} from "react"
import {useMutation} from "@apollo/react-hooks";
import {gql} from "apollo-boost";

const CREATE_PROJECT = gql`
  mutation Mutation( $project: ProjectInput!) {
    createProject(project: $project) {
        id
        nombre
        estado
        idUser
        fechaIncio
    }
  }
`;

export default function ProjectCreate(props) {
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("");
  const [idUser, setIdUser] = useState("");

  const [createProject] = useMutation(CREATE_PROJECT);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={async e => {
                e.preventDefault();
                const project = {"idUser":idUser,"nombre":nombre,"estado":estado}
                await createProject({ variables: { project } });
                window.location.href = "/new-project";
                }}
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Write a Name..."
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Write a Estado..."
                  value={estado}
                  onChange={e => setEstado(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Write a Id User..."
                  value={idUser}
                  onChange={e => setIdUser(e.target.value)}
                  className="form-control"
                />
              </div>
              <button className="btn btn-success btn-block">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
