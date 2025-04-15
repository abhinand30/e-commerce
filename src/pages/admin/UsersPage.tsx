import  { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { usersTableHeader } from '../../common/data/dataArray'
import { useSelector } from 'react-redux'
import { selectedUsers } from '../../redux/slice/userSlice'
import {  userType } from '../../common/type/types'

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
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              {usersTableHeader.map((item) => (
                <th
                  key={item.id}
                  className="px-4 py-3 text-left text-gray-600 dark:text-gray-300"
                >
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userArray.length > 0 ? (
              userArray.map((user) => (
                <tr
                  key={user.id}
                  className="buser-b bg-gray-900 hover:bg-black-100 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-3 text-white">{user.name}</td>
                  <td className="px-4 py-3 text-white">{user.email}</td>
                  <td className="px-4 py-3 text-white">{user.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={usersTableHeader.length + 1} className="px-4 py-3 text-center text-gray-500">
                  No users available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      </div>
  )
}

export default UsersPage