interface productState{
    id?:number;
    name:string,
    price:number|null,
    category:'',
    stock:number|null,
    description:'',
    image:string;
}
interface productType{
    id:number;
    name:string,
    price:number|null,
    category:'',
    stock:number|null,
    description:'',
    image:string
}
interface ModalProps{
    // modalButtons:{id: number; name: string; ; color: string}[];
    handleModal: ()=>void;
    handleClick: ()=>void;
    productFormArray:{id:number,name:string,type:string,categories?:[]}[];
    setFormData:React.Dispatch<React.SetStateAction<productState>>;
    formData:productState;
}
interface userState{
    email:string;
    password:string;
    phone:string;
    name:string;
}
interface userType{
    id:string;
    email:string;
    password:string;
    phone:number|null;
    name:string;
    userType:string;
}

interface cartState{
    id:number;
    productName:string,
    price:number,
    image:string;
    quantity:number
    userId:string;
}
interface productProps{
    product:productType
}
export type{productState,ModalProps,productType,userType,userState,cartState,productProps}