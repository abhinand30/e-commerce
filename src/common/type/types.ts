import React, { ReactNode } from "react";

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
    stock:number,
    description:'',
    image:string;
    selected?:boolean;
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
    product:{
        id:number;
        name:string,
        price:number|null,
        category?:string,
        stock?:number,
        description?:'',
        image:string;
        selected?:boolean;
    }
}
interface favoriteProps{
    product:favoriteItem
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
interface forgotPasswordFormType {
    email: string;
    password: string;
    confirmPassword:string;
}
interface favoriteItem{
    id:number;
    productName:string,
    productId:number,
    price:number|null,
    image:string;
    userId?:string;
    userName?:string;
}
interface orderDetailProps{
  handleModal:() => void;
  order:orderStates|undefined
}

interface column<T>{
    id:number;
    selector?:string;
    title:string;
    cell?:(arg: T) => React.ReactNode
}
interface commonTableProps{
    header:column<T>[];
    data:productType[]|userType[]|orderStates[]
}
export type{column,commonTableProps,favoriteProps,orderDetailProps,favoriteItem,forgotPasswordFormType,formType,orderStates,routeProps,productState,ModalProps,productType,userType,userState,cartState,productProps,errorType,cartProps,cartStateProps}