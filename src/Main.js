import React from "react";
import "./Main.css"
import axios from "axios";
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            items:[]
        })
    }
    componentDidMount() {
        axios
          .get(`http://5d1f320ad1cb0100147f873e.mockapi.io/Avenger`)
          .then(res => {
            this.setState({ items: res.data});
          });
      }
      handleData=event=>{
          alert(event.name);

      }
    render(){
        return(
            <div className="container-fluid banner">
              <h1 className="h1">Library Management System</h1>
              <div className="row">
              {this.state.items.map(item => {
              return (
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="card highs">
                  <img className="card-img-top" src={item.avatar}></img>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">{item.name}</a>
                    </h4>
                    <p className="card-text">{item.createdAt}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    <button className="btn btn-primary" onClick={this.handleData.bind(this.state.items,item)} >Click me!</button>
                  </div>
                </div>
                </div>

              )})}
              </div>
            </div>
        )
    }
}
export default Main;