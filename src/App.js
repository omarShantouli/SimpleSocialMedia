import './App.css';
import "bootstrap"
import "bootstrap/scss/bootstrap.scss";
import AddPost from "./Components/AddPost"
import React, {Component} from "react"
import {LangContext} from './utils/context'
import Post from './Components/Post';


class App extends Component{
constructor(props){
  super(props)
  this.state = {
    posts : ["i am the first post at yous social media"]
  }
}

addAPost (thePost) {
  var temp = [...this.state.posts]
  temp.push(thePost)
  this.setState({
      posts : temp
  })
}

render(){
  return (
    <LangContext.Provider
        value={
          {
            addAPost : this.addAPost.bind(this),
            posts : this.state.posts
          }
        }
      >
      <div> 
        <AddPost />
     </div>
     <Post />

    {/* {
      this.props.posts?.map((post, idx)=>{
        return <Post post={post}/>
      })
     }*/}

      </LangContext.Provider>
    

  );
}
  
}

export default App;
