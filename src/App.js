import './App.css';
import "bootstrap"
import "bootstrap/scss/bootstrap.scss";
import AddPost from "./Components/AddPost"
import React, {Component} from "react"
import {LangContext} from './utils/context'
import Post from './Components/Post';
import "./Components/subComp/AppStyle.scss"

class App extends Component{
constructor(props){
  super(props)
  this.state = {
    posts : []
  }
}

add = (thePost)=>{
  var temp = [...this.state.posts]
  temp.push(thePost)
  this.setState({
      posts : temp
  })
}

changeLike = (idx)=>{
  var temp = [...this.state.posts];
  temp[idx].liked = !temp[idx].liked;
  console.log(this.state.posts);
  this.setState({
    posts : temp
  })
}

show = (idx) => {
  console.log("i am show function");
  var temp = [...this.state.posts];
  temp[idx].showComment = true;
  console.log(this.state.posts);
  this.setState({
    posts : temp
  })
}

addComment = (comment, idx) => {
      console.log(idx);
      var temp = [...this.state.posts]
      temp[idx]?.comments.push(comment);
      temp[idx].showComment = false;
      this.setState({
        posts : temp
      })
}


render(){
  return (
       <LangContext.Provider
        value={
          {
            posts : this.state.posts,
            add : this.add,
            changeLike : this.changeLike,
            show : this.show,
            addComment : this.addComment
          }
        }
      >
      <div> 
        <AddPost />
     </div>
     <div>
        <Post />
     </div>
      </LangContext.Provider>
  );
}
  
}

export default App;
