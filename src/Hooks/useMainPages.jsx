import  {useState} from 'react'



function useMainPages() {



    

    
    const [navListVisiblaty, setNavListVisiblaty] = useState(true)

    const handleCallback = (childData) =>{
        setNavListVisiblaty( childData)
    }




    const [visible, setVisible]= useState()

    const [toggleVal, setToggleVal]= useState(true)
    const [scrollTopMargin, setScrollTopMargin]= useState(60)

    const [scrollHeader , setScrollHeader] = useState(false)

    const toggle = (e)=> {
        if(toggleVal){
            e.target.innerHTML = '+'
            e.target.style.backgroundColor = '#fff'
            setToggleVal(false)
            setScrollTopMargin(0)
        }else{
            e.target.innerHTML = '-'
            setToggleVal(true)
            e.target.style.backgroundColor = 'transparent'
            setScrollTopMargin(60)
        }
    }

    window.onscroll = ()=> {
        if(window.scrollY <= 800){
            setVisible(0)
        }else{
            setVisible(100)
        }

        if(window.scrollY <= 1000){
            setScrollHeader(false)
        }else{
            setScrollHeader(true)
        }
    };


    const topFunction = () => {
        window.scrollTo({
            top:0 ,
            behavior:'smooth'
        })
    }
    return (
       {  navListVisiblaty , handleCallback , visible , toggleVal , scrollTopMargin , scrollHeader,toggle, topFunction }
    )
}

export default useMainPages
