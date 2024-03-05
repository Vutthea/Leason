import {FiMoreHorizontal} from "react-icons/fi";
function Navbar(){
    return(
        <>
             <div className="bg-green-200 w-full ">
                <div className="bg-gray-200 w-[20%] ipad:w-[100%]  ipad:bg-green-200  ipad:flex ipad:justify-between ipad:pr-[20px] ipad:pl-[20px] ipad:h-[80px] ipad:rounded-[5px]">
                    <div className="flex items-center justify-center pt-[10px] ipad:flex ipad:items-center ipad:justify-center ipad:text-[25px]">Instagram</div>
                    <div >
                       <button className="bg-[gray] flex justify-center items-center mt-[30px] w-[200px] ml-[80px] hidden ipad:block rounded-[5px]">
                       <span class="material-symbols-outlined  pt-[5px] ml-[140px]">search</span>
                       </button>
                    </div>
                    <div className=" flex items-center justify-center  mt-[35px] ipad:hidden">
                      <span class="material-symbols-outlined pr-[10px] ipad:hidden" >home</span>
                      <p className="ipad:hidden">Home</p>
                    </div>
                    <div className=" flex items-center justify-center  mt-[25px] ipad:hidden">
                      <span class="material-symbols-outlined pr-[10px] ipad:hidden" >search</span>
                      <p className="ipad:hidden">Search</p>
                    </div>
                    <div className=" flex items-center justify-center   mt-[25px] ipad:hidden">
                      <span class="material-symbols-outlined pl-[5px]" >explore</span>
                      <p className="pl-[10px]">Explore</p>
                    </div>
                    <div className=" flex items-center justify-center  mt-[25px] ipad:hidden">
                      <span class="material-symbols-outlined pl-[5px] ipad:hidden" >smart_display</span>
                      <p className="pl-[10px] ipad:hidden">Explore</p>
                    </div>
                    <div className=" flex items-center justify-center  mt-[25px] ipad:hidden">
                      <span class="material-symbols-outlined pl-[14px] ipad:hidden" >offline_bolt</span>
                      <p className="pl-[10px] ipad:hidden">Message</p>
                    </div>
                    <div className=" flex items-center justify-center  mt-[25px] ipad:hidden">
                      <span class="material-symbols-outlined pl-[14px] ipad:hidden" >favorite</span>
                      <p className="pl-[10px] ipad:hidden">Novicatin</p>
                    </div>

                    <div className=" flex items-center justify-center  mt-[25px] ipad:hidden">
                      <span class="material-symbols-outlined pr-[2px] ipad:hidden" >add_circle</span>
                      <p className="pl-[10px] ipad:hidden">Create</p>
                    </div>
                    <div className=" flex items-center justify-center  mt-[25px] ipad:hidden">
                      <span class="material-symbols-outlined pr-[1px] ipad:hidden" >account_circle</span>
                      <p className="pl-[10px] ipad:hidden">Profile</p>
                    </div>
                    <div className=" flex items-center justify-center  mt-[215px] pb-[70px]  ipad:pb-[0px] ipad:mt-[0px] ">
                      {/* <span class="material-symbols-outlined pr-[4px] ipad:pr-[0px] ipad:size-[45px] " >more</span> */}
                      <FiMoreHorizontal className="ipad:pr-[10px] ipad:size-[45px] ipad:text-[32px]" />
                      <p className="pl-[10px] ipad:pl-[0px] ipad:text-[16px]">More</p>
                    </div>
                </div> 
                <div></div>
             </div>
        </>
    )
}
export default Navbar;