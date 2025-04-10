import { useNavigate } from "react-router-dom"


function CardComponent() {
    const navigate=useNavigate();
    const cardArray= [
        {id:1,name:'Dashboard',nav:'/dashboard'},
        {id:2,name:'Products',nav:'/products'},
        {id:3,name:'Users',nav:'/users'},
        {id:4,name:'Orders',nav:'/order'}
    ]
  return (
    <div>
        <div className="grid grid-cols-2 sm:grid-cols-2 items-center justify-center">
        {cardArray.map((item,index)=>(
             <div key={index} onClick={()=>navigate(item.nav)}className="w-75 h-50 m-5 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ">
             <div>
               <span className="inline-flex  items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                 <svg
                   className="h-6 w-6 text-white"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   aria-hidden="true"
                 >
                    <div className='z-index-1'>+</div>
                 </svg>
               </span>
             </div>
             <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">{item.name}</h3>
           </div>
              
        ))}
        </div>
    </div>
  )
}

export default CardComponent