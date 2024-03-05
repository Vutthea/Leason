import { useState } from "react";
import {AiOutlineArrowLeft,AiOutlineArrowRight} from"react-icons/ai";
function Sibar(){
    const [menu, setMenu] = useState(false);
    
    const [slide, setSlide] = useState([
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg",
        "https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop",
        "/car.jpg",
        // "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg",
        "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD"
    ])

    let [number, setNumber] = useState(0);
    
    function nextSlide() {
        if(number < slide.length){
            setNumber(number=number+1)
        }
        if(number >= slide.length){
            setNumber(0);
        }
    }
    return (
        <>
           <div className="w-[100%] bg-gray-100 flex text-black justify-around p-5">
                 <div onClick={() => setMenu(true)}>Home</div>
                 <div>About</div>
                 <div>Detail</div>
                 <div>Explain</div>
                 <div>Understand</div>
           </div>
           <div className={`bg-transparent backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 duration-500 ${menu==true ? 'block':'hidden'}`}></div>
           <div className={`fixed top-0 left-0 right-[70%] bottom-0 duration-[1s] ${menu==true ? 'translate-x-0' : '-translate-x-full'} bg-white flex-col text-black`}>
                    <div className="w-[100%] flex justify-between ">  
                        <div className="p-5">Money</div>
                        <div className="p-5" onClick={() => setMenu(false)}> Close</div>
                    </div>
                    <div className="p-5">Car</div>
                    <div className="p-5">Motobycle</div>
                    <div className="p-5">Bike</div>
                    <div className="p-5">Phone</div>
                    <div className="p-5">Computer</div>
               </div>
         ​​   <div className={`fixed top-0 left-0 right-0 bottom-0 -z-10 bg-cover bg-center bg-no-repeat flex-none flex`} style={{backgroundImage: `url(${slide[number]})`}}>
                  <div className="absolute top-[50%] left-0 text-[50px] text-white">{<AiOutlineArrowLeft/>}</div>
                  <div className="absolute right-0 top-[50%] text-[50px] text-white">{<AiOutlineArrowRight onClick={() => nextSlide()}/>}</div>
            </div>
​​​
           
        </>
    );

}
export default Sibar;