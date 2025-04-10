const tableHeader=[{id:1,name:'Product Id'},
    {id:2,name:'Product Name'},
    {id:3,name:'Price'},
    {id:4,name:'Stock'},
    {id:5,name:'Action'}
  ]

const productFormArray=[
  {id:1,name:'name',type:'text'},
  {id:2,name:'price',type:'number'},
  {id:5,name:'category',type:'select',categories:['cloth','grocery']},
  {id:3,name:'stock',type:'number'},
  {id:4,name:'description',type:'textArea'},

]


  export {tableHeader,productFormArray}