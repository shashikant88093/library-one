import React from "react";
import "./Admin.css";
import axios from "axios";
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      name: "",
      create: "",
      bol:false,
      id:0
    };
  }
  //                >>>>>>>>>>>>>>>>>>>common<<<<<<<<<<<<<<<<<<<

  componentDidMount() {
    axios
      .get(`http://5d1f320ad1cb0100147f873e.mockapi.io/Avenger`)
      .then(res => {
        this.setState({ persons: res.data });
      });
  }

  //             >>>>>>>>>>>>>>>>>>>>>Delete<<<<<<<<<<<<<<<<<<<<<<<<

  handleChange = event => {
    if (window.confirm("Are you sure ??")) {
      axios
        .delete(`http://5d1f320ad1cb0100147f873e.mockapi.io/Avenger/${event}`)
        .then(this.componentDidMount())
        .catch(error => console.log("Error", error));
    }
  };

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Edit / Create <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  editfun = event => {
    this.setState({
      name: event.name,
      create: event.createdAt,
      id:event.id,
      bol:true
    });
  };
  editSubmit=event=>{
    let obj={ 
      id:this.state.id,
      name:this.state.name
    }
    if(this.state.bol){
      axios
        .put(`http://5d1f320ad1cb0100147f873e.mockapi.io/Avenger/${this.state.id}`,obj)
        .then(this.componentDidMount())
        .catch(error => console.log("Error", error));
    }
    else{
      
      axios
        .post(`http://5d1f320ad1cb0100147f873e.mockapi.io/Avenger/`,obj)
        .then(this.componentDidMount())
        .catch(error => console.log("Error", error));
    }
    this.setState({
      bol:false
    })
  };
   postFun=event=>{
     this.setState({
       name:event.target.value,
     })

   }
   funPost=event=>{
    this.setState({
      create:event.target.value,
    })

  }

  render() {
    this.componentDidMount();
    return (
      <div>
        <button className="btn btn-warning button">
          <a href="#form" className="linker">
            Add Book
          </a>
        </button>
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>table<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">createdAt</th>
              <th scope="col">Avatar</th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map(person => {
              return (
                <tr>
                  <td>{person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.createdAt}</td>
                  <td>
                    <img src={person.avatar} />
                  </td>
                  <td>
                    <tr>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={this.editfun.bind(
                            this.state.persons,
                            person
                          )}
                        >
                          <a href="#form" className="linker">Edit it</a>
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={this.handleChange.bind(
                            this.state.persons,
                            person.id
                          )}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
{/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>form<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
        <form id="form" >
          <h1 className="h1">Add/Edit Book in library</h1>
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder={this.state.name}
              name="name"
              onChange={this.postFun}
            />
          </div>
          <div class="form-group">
            <label for="create">CreatedAt:</label>
            <input
              type="text"
              class="form-control"
              id="create"
              placeholder={this.state.create}
              name="create"
              onChange={this.funPost}
            />
          </div>

          <button type="submit" class="btn btn-primary" onClick={this.editSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Admin;
