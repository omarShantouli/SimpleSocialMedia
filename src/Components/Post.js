import CommentForm from "./CommentForm";
import React, {Component} from "react";
import {LangContext} from '../utils/context'
import ViewComments from "./ViewComments"
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
                    return <div key={idx}>
                                <form onSubmit={this.f.bind(this)}>
                                    <div
                                        className="shadow-lg p-3 mb-5 bg-body rounded mt-5 "
                                    >
                                        {post.text}
                                    </div>
                                    <div className="buttons container row">
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
                                                className="btn btn-light ms-3"
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