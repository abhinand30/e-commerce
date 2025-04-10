interface productState{
    id?:number;
    name:string,
    price:number|null,
    category:'',
    stock:number|null,
    description:''
}
interface productType{
    id:number;
    name:string,
    price:number|null,
    category:'',
    stock:number|null,
    description:''
}
interface ModalProps{
    modalButtons:{id: number; name: string; onClick: ()=>void; color: string}[];
    productFormArray:{id:number,name:string,type:string,categories?:[]}[];
    setFormData:React.Dispatch<React.SetStateAction<productState>>;
    formData:productState;
}
export type{productState,ModalProps,productType}