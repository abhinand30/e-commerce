import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userType } from "../../common/type/types";


interface userState{
    users:userType[]
}

const initialState:userState={
    users:[]
}

const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        addUsers:(state,action:PayloadAction<userType>)=>{
            const payload=action.payload;
            state.users.push({
                id:payload.id,
                name:payload.name,
                phone:payload.phone,
                email:payload.email,
                password:payload.password,
                userType:payload.userType
            });
        },
        editUser:(state,action:PayloadAction<userType>)=>{
            const updatedData=action.payload;
            const index=state.users.findIndex(user=>user.id===updatedData.id)
            if(index!==-1){
                state.users[index]=updatedData
            }
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(user => user.id !== action.payload);
          },
    }
});

export const {addUsers,editUser,deleteUser}=userSlice.actions;

export const selectedUsers=(state:{users:userState})=>state.users.users;
export default userSlice.reducer