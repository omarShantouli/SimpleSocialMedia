import "./subComp/postStyle.scss";
import CommentForm from "./CommentForm";
import React, {Component} from "react";
import {LangContext} from '../utils/context'

class Post extends Component{
    constructor(props){
        super(props)
        this.state = {
            show : false,
            liked : false
        }
    }

     showComment(e){
        e.preventDefault();
        this.setState({
            show : true
        })
    }


     changeLike(e)
    {
        e.preventDefault();
        this.setState((state)=>{
            return{
                liked : !state.liked
            }
        })
    }

render(){
    return (
        <div>
            {
                this.context.posts?.map((post, idx)=>{
                    return <div key={idx}>
                                <form>
                                    <div
                                        className="shadow-lg p-3 mb-5 bg-body rounded mt-5 thePost"
                                    >
                                        {post}
                                    </div>
                                        
                                    <div>
                                    <button onClick={this.changeLike.bind(this)} className={this.state.liked? "btn btn-primary" : "btn btn-light"}>Like</button>
                                    <button className="btn btn-light ms-3"
                                        onClick={this.showComment.bind(this)}
                                    >
                                        Add comment</button>  
                                    </div>
                                </form>
                                {this.state.show?<CommentForm />:null}
                        </div>
                })
            }
            
            
        </div>
    )

}
    
}

export default Post;
Post.contextType = LangContext;