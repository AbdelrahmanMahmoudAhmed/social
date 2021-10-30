import {useEffect , useState} from 'react'

function useFeach(url, kind  , filter) {
 



    const [data, setData]=useState(null)
    const [isLoading, setisLoading]=useState(true)
    const [errorMsg, setErrorMsg]=useState(null)

    useEffect(() => {
        fetch(url)
        .then(response => { 

            if(response.ok){

                return response.json();

            }else{
                throw Error('Data Not Found') 
            }

        })
      .then(data => {
        if(kind === "category"){

            var afterfilter = data.filter((data) => data.postCategory.includes(filter))


        }else if (kind === "post"){ 
             afterfilter = data.filter((data) => data.id === parseInt(filter)  )


        }else if (kind === "author"){ 
             afterfilter = data.filter((data) => data.userName.includes(filter) )

        }else if (kind === "Date"){ 
             afterfilter = data.filter((data) => data.postDate === filter )

        }else{  
             afterfilter = data;

        }
        

       

           

        setData( afterfilter ) ;
        setisLoading(false);
        
      }
         
        )
      
        .catch(err => {
            setisLoading(false);
            setErrorMsg(err.message)
        })
     


    }, [url ,kind , filter ] )
    return (
        {data , isLoading , errorMsg }
    )
}

export default useFeach
