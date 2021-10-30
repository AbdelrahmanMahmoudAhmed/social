import Reply from '../../../../Images/Posts/reply.png'
import './Reply.css'

function Replay({allReplays}) {
    


    return (


        <div className='container'>
            
            <h3 className="reply-header"><span className="reply-counter">1</span>PRESPONSE</h3>

            {allReplays.map((item, index) => {
                
            return (
                    <div className='reply ' key={index}>

                        <div className="reply-holder">
                            <div className="reply-img"><img src={Reply} alt="" /></div>
                            <div className="reply-content">
                                <div className="reply-name">{item.name}</div>
                                <div className="reply-date">{item.date}</div>
                                <p className="reply-p">{item.comment}</p>
                            </div>
                            <div className="reply-to-reply">
                                <span>
                                    REPLY
                                </span>
                            </div>
                        </div>
                    </div>
            )}

            )}
            
            

        </div>
    )
}

export default Replay
