import orderIcon from '../../assets/order.png'
import usersIcon from '../../assets/users.png';
import productIcon from '../../assets/product.png'


const productFormArray=[
  {id:1,name:'name',type:'text'},
  {id:2,name:'price',type:'number'},
  {id:3,name:'category',type:'select',categories:['cloth','grocery']},
  {id:4,name:'stock',type:'number'},
  {id:5,name:'description',type:'textArea'},
  {id:6,name:'image',type:'file'}
]

const userFormArray=[
  {id:1,name:'name',type:'text'},
  {id:3,name:'phone',type:'number'},
  {id:2,name:'email',type:'email'},
  {id:4,name:'password',type:'password'}
]

const loginData=[
  {id:2,name:'email',type:'email'},
  {id:4,name:'password',type:'password'}
]
const orderTableHeader=[
  {id:1,name:'id',title:'Order Id'},
  {id:2,selector:'totalPrice',title:'Total Price'},
  {id:3,selector:'userName',title:'User Name'},
  {id:4,selector:'Action',title:'Action'}
]
const usersTableHeader=[
  {id:1,selector:'name',title:'Name'},
  {id:2,selector:'email',title:'Email'},
  {id:3,selector:'phone',title:'Phone'},
  // {id:4,name:'Action'}
]
const forgotPasswordData=[
  {id:1,name:'password',type:'password'},
  {id:2,name:'confirmPassword',type:'password'}
]
const emailData=[
  {id:1,name:'email',type:'email'},

]
const cardArray = [
  // { id: 1, name: "Dashboard", nav: "dashboard",icon: },
  { id: 2, name: "Products", nav: "products",icon:productIcon },
  { id: 3, name: "Users", nav: "users",icon:usersIcon },
  { id: 4, name: "Orders", nav: "orders",icon:orderIcon },
];
  export {cardArray,forgotPasswordData,emailData,productFormArray,userFormArray,loginData,orderTableHeader,usersTableHeader}