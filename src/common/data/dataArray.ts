const tableHeader=[{id:1,name:'Product Id'},
    {id:2,name:'Product Name'},
    {id:3,name:'Price'},
    {id:4,name:'Stock'},
    {id:5,name:'Action'}
  ]

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
const orderTableHeader=[{id:1,name:'Order Id'},
  {id:2,name:'Total Price'},
  {id:3,name:'user name'},
  {id:4,name:'Action'}
]
const usersTableHeader=[{id:1,name:'name'},
  {id:2,name:'email'},
  {id:3,name:'phone'},
  // {id:4,name:'Action'}
]
const forgotPasswordData=[
  {id:1,name:'email',type:'email'},
  {id:2,name:'password',type:'password'}
]
  export {tableHeader,forgotPasswordData,productFormArray,userFormArray,loginData,orderTableHeader,usersTableHeader}