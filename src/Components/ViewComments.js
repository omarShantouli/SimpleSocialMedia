


function ViewComments(props)
{


    return(
        <div>
            {console.log(props)}
            {
            props.allComments?.map((comment, idx)=>{
                return <div key={idx}>
                        {comment}
                        {new Date().toLocaleDateString()}
                    </div>
            })
            }
        </div>
        
    )
}

export default ViewComments