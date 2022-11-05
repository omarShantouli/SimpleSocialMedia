import "bootstrap"
import "bootstrap/scss/bootstrap.scss";
import "./subComp/addPostStyle.scss"
import React, {Component} from "react";
import {LangContext} from '../utils/context'

class AddPost extends Component{


    constructor(props){
        super(props)
        this.state = {
            text : ""
        }
    }

     add(e){
        console.log(this.context.posts);
        e.preventDefault()
        this.context.AddAPost(this.state.text)

    }

    changeText(e){
        this.setState({
            text : e.target.value
        })
    }

    render(){
        return(
            <div className="post">
                <form>
                    <textarea
                        className="shadow-lg p-3 mb-5 bg-body rounded"
                        value = {this.state.text}
                        onChange={this.changeText.bind(this)}
                        cols={100}
                        rows={6}
                        placeholder="Write what you think"
                     />
                     <div>
                     <button 
                        className="btn btn-primary"
                        onClick={this.add.bind(this)}
                        >
                        Add post</button>
                     </div>
                </form>
                {/*<Post text={"omar hantouli is a student in gaza sky geeks"}/>*/}
            </div>
        )
    }

   
}

export default AddPost
AddPost.contextType = LangContext;