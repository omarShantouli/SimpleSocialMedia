import "./subComp/commentStyle.scss"
import {Component} from "react"
import { LangContext } from "../utils/context"

class CommentForm extends Component{
    

    constructor(props){
        super(props)
        this.state = {
            text : ""
        }
    }

     addText(e)
    {
        this.setState({
            text : e.target.value
        })
    }

    createComment(e)
    {
        e.preventDefault();
        this.context.addComment(this.state.text, this.props.idx);
        this.setState({
            text : ""
        })
    }

    render(){
       return(
        <div>
             <form onSubmit={this.createComment.bind(this)}>
               <input
                    type="text" 
                    placeholder="Write your comment"
                    className="rounded mt-5 commentInput col-3"
                    value={this.state.text}
                    onChange={this.addText.bind(this)}
                /> 
            </form>
        </div>
    ) 
    }
    
}

export default CommentForm;
CommentForm.contextType = LangContext