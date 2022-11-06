import {Component} from "react"
import "./subComp/commentStyle.scss"

class ViewComments extends Component{

    render()
    {
        return(
        <div>
            {
                this.props?.comments.map((comment, idx) => {
                    return <div key={idx} className='comment rounded'>
                                <div>
                                    {comment}
                                </div>
                                <div className="date">
                                    {new Date().toLocaleDateString()}
                                </div>
                        </div>
                })
            }
            
        </div>
    )
    }
}

export default ViewComments