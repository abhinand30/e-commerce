import  { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Header from '../../components/Header'
import { usersTableHeader } from '../../common/data/dataArray'
import { selectedUsers } from '../../redux/slice/userSlice'
import {  userType } from '../../common/type/types'
import CommonTable from '../../components/CommonTable'

const UsersPage = () => {
  const usersList=useSelector(selectedUsers);

  const [userArray, setUserArray] = useState<userType[]>([]);

  useEffect(() => {
    const users:userType[]=usersList.filter((user)=>user.userType==='user')
  setUserArray(users)
  }, [usersList])

  return (
    <div>
         <Header/>
         <div className="overflow-x-auto mt-6">
       
        <CommonTable data={userArray} header={usersTableHeader}/>
      </div>
      </div>
  )
}

export default UsersPage