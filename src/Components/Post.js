import CommentForm from "./CommentForm";
import React, {Component} from "react";
import {LangContext} from '../utils/context'
import ViewComments from "./ViewComments"
import "./subComp/postStyle.scss"
class Post extends Component{

     showComment(idx){
        this.context.show(idx)
    }


     changeLike( idx)
    {
        this.context.changeLike(idx);
    }

    f (e){
        e.preventDefault();
    }

    render(){
        return (
            <div className="thePost">
            {
                this.context.posts?.map((post, idx)=>{
                    return <div>
                            <div key={idx} className="postStyle borderStyle">
                                <form onSubmit={this.f.bind(this)}>
                                    <div
                                        className="p-3 mb-5 bg-body mt-5 borderStyle d-flex"
                                    >
                                        {post.text}
                                    </div>
                                    <div className="buttons container row d-flex">
                                        <div className="col-2">
                                            <button 
                                                onClick={this.changeLike.bind(this, idx)} 
                                                className={post.liked? "btn btn-primary" : "btn btn-light"} 
                                            >
                                                Like
                                            </button>  
                                        </div>
                                        <div className="col-2">
                                            <button
                                                className="btn btn-light btn2"
                                                onClick={this.showComment.bind(this, idx)}
                                            >
                                                Add comment
                                            </button>   
                                        </div>

                                         
                                    </div>
                                </form>
                                {
                                    post.showComment?
                                    <div>
                                        <CommentForm idx={idx}/>
                                    </div>
                                    : null
                                }
                                <div>
                                    <ViewComments comments={post.comments}/>
                                </div>
                        </div>
                        <hr/>
                        </div>
                        
                    })
                } 
            </div>
        )
    }
}

export default Post;
Post.contextType = LangContext;