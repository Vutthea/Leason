import { useState } from "react";
import {BiShow,BiHide} from "react-icons/bi";
import {AiOutlineMenu} from "react-icons/ai";
function Remind(){
   const [icon, setIcon] = useState(false);
   const [changeColor, setChangeColor] = useState(false);
   const [onChange,setonChange] = useState(false);
   const [menu, setMenu] = useState(false);
    return(
       <>
          <div className={`w-[100%] ${changeColor == true ? 'bg-red-500' : 'bg-black'} flex text-white`}>
            <div className="w-[20%] justify-around items-center pl-[8%] pt-4 ipad:pb-2">Home </div>
            <div className="w-[70%]  flex justify-around items-center  text-white">
                <div className="p-4 text-white ipad:hidden">Suck </div>
                <div className="p-4 text-white ipad:hidden">Fuck </div>
                <div className="p-4 text-white ipad:hidden">Sex </div>
           </div>
            <div className="w-[10%] justify-around items-center pl-[5%] pt-4">
            {icon === true ? <BiHide onClick={() => setIcon(!icon)}/> : <BiShow onClick={() => setIcon(!icon)}/>} 
            </div>
          </div>
          <div className="p-5 m-5 bg-red-500 w-fit cursor-pointer" onClick={() => setChangeColor(!changeColor)}>Change Color</div>  

          <div className="w-[100%] bg-pink-50 flex">
          <div className={`w-[40%] ${onChange== true ? 'bg-yellow-200 h-[200px] ' : 'h-fit bg-gray-500 '} duration-[1s] bg-gray-500 p-5`}>change size and change color</div>
          <div className="w-[10%] p-5 bg-gray-400" onClick={() => setonChange(!onChange)}>onClick</div>
         </div> 
         <div className="w-[100%] bg-slate-400 flex mt-[10px]">
               <div className="w-[92%] bg-pink-400 flex justify-around items-center p-4">
                  <div>Me</div>
                  <div>You </div>
                  <div>One</div>
                  <div>Night</div>
                  <div>Stand</div>
               </div>
               <div className="w-[8%] bg-blue-100 p-4 pl-4" onClick={()=>setMenu(!menu)}> {<AiOutlineMenu />}</div>
         </div>
            <div className={`w-[20%] h-[455px] ml-[80%] bg-black text-white duration-[0.5s] ${menu && '-translate-x-full'}`}>
               
            <div className="pt-[20px]">hh</div>
            <div className="pt-[20px]">hh</div>
            <div className="pt-[20px]">hh</div>
            <div className="pt-[20px]">hh</div>
         </div>
       </> 
    );
}
export default Remind;