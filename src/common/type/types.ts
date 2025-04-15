import { ReactNode } from "react";

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
    category:string,
    stock:number,
    description:'',
    image:string
}
// interface productArrayTypes{
//     productType[]
// }
interface ModalProps{
    // modalButtons:{id: number; name: string; ; color: string}[];
    handleModal: ()=>void;
    handleClick: React.FormEventHandler<HTMLFormElement>;
    productFormArray:{id:number,name:string,type:string,categories?: string[]|undefined}[];
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
    productId:number,
    price:number,
    image:string;
    quantity:number
    userId?:string;
    userName?:string;
}
interface cartProps{
    cart:cartState
}
interface cartStateProps{
    carts:cartState[]
    deliveryCharge:number;
    totalPrice:number;
    handleCheckOut:() => void
}
interface productProps{
    product:productType
}
interface errorType {
    [key: string]: string;

}
interface orderStates{
    id:string;
    products: {productId:number,productName:string;quantity:number;price:number;}[];
    userId:string;
    userName:string;
    totalPrice:number
}
interface routeProps{
    roles:string;
    children: ReactNode
}
interface formType {
    email: string;
    password: string
}
export type{formType,orderStates,routeProps,productState,ModalProps,productType,userType,userState,cartState,productProps,errorType,cartProps,cartStateProps}