import React, { useState  } from 'react'
import './Form.css'

function Form({theData}) {

    const [comment, setComment] = useState()
    const [name, setName] = useState()
    const [date, setDate] = useState()
    const [mail, setMail] = useState()
    const [webSite, setWebSite] = useState()


    const dateFun = ()=>{
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var today = new Date();
        var mon = monthNames[today.getMonth()]

        var hours = today.getHours();
        var minutes = today.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;

        var dateNow = mon + ' ' + today.getDate() + ', ' + today.getFullYear() + ' ' + strTime;

        setDate(dateNow)

       
    }


 
    const submitButton = (e) => {
        e.preventDefault();

        theData({
            comment,
            name,
            date,
            mail,
            webSite
        })

        document.getElementsByTagName('textarea')[0].value = ""
        document.getElementsByTagName('input')[0].value = ""
        document.getElementsByTagName('input')[1].value = ""
        document.getElementsByTagName('input')[2].value = ""
        document.getElementsByTagName('input')[3].checked = false;

    }


    return (
        <div className='post-form container' onSubmit={(e) => submitButton(e)}>
            <h3 className='post-form-header'>Leave a Replay</h3>
            <form className="form">
                <textarea onKeyUp={dateFun} required placeholder='Comment*' onChange={(e) => setComment(e.target.value)} ></textarea>
                <input onKeyUp={dateFun} required type="text" onChange={(e) => setName(e.target.value)} className="form-name" placeholder='Name*' />
                <input  onKeyUp={dateFun} type="email" className="form-email" onChange={(e) => setMail(e.target.value)} placeholder='Email*' />
                <input onKeyUp={dateFun} type="text" className="form-website" onChange={(e) => setWebSite(e.target.value)} placeholder='Website*' />
                <div className="checkbox-holder">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className='form-lable' >Save my name, email, and website in this browser for the next time I comment.</label>
                </div>

                <input type="submit" className='form-submit' value='Post Comment' />

            </form>

        </div>
    )
}

export default Form
