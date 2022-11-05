import "./subComp/commentStyle.scss"
import {useState} from "react"
import ViewComments from "./ViewComments"

function CommentForm(props){
    
    var [text, setText] = useState("");
    var [comments, setComment] = useState([]);

    function addText(e)
    {
        setText(e.target.value)
    }
    function createComment(e)
    {
        e.preventDefault();
        var temp = comments;
        temp.push(e.target.value);
        setComment(temp)
    }

    return(
        <div>
             <form onSubmit={createComment}>
               <input
                    type="text" 
                    placeholder="Write your comment"
                    className="rounded mt-5 commentInput"
                    value={text}
                    onChange={addText}
                /> 
            </form>
            <ViewComments allComments={comments} />
        </div>
    )
}

export default CommentForm;