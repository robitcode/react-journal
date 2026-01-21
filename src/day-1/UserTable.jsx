import { useState } from "react";

export default function UserTable() {

    const [users,setUsers] = useState([
        { "id": 1, "name": "robit", "email": "robit@mail.com", "role": "Web Developer", "status": "Online" },
        { "id": 2, "name": "hen", "email": "hen@mail.com", "role": "SDE", "status": "Offline" },
        { "id": 3, "name": "kibi", "email": "kibit@mail.com", "role": "UI/UX", "status": "Online" }
    ]);

    return (
        <div className="p-8 bg-slate-50 min-h-screen">
            {/* Container with overflow-x-auto handles small screens */}

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">

                <table className="w-full text-left border-collapse">

                    {/* Table Header */}
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-slate-700">User</th>
                            <th className="px-6 py-4 text-sm font-semibold text-slate-700">Role</th>
                            <th className="px-6 py-4 text-sm font-semibold text-slate-700">Status</th>
                            <th className="px-6 py-4 text-sm font-semibold text-slate-700">Action</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-slate-100">
                        {users.map((user)=>(
                            <tr key={user.id} className="hover:bg-slate-50 transition-colors">

                                {/* User Info Column */}
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="font-medium text-slate-900">{user.name}</span>
                                        <span className="text-xs text-slate-900">{user.email}</span>
                                    </div>
                                </td>

                                {/* Role Column */}
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    {user.role}
                                </td>

                                {/* Status Column */}
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                        ${user.status === 'Online'? 'bg-green-100 text-green-700':'bg-slate-100 text-slate-600'}`}>
                                            {user.status}
                                    </span>
                                </td>
                    
                                {/* Action Column */}
                                <td className="px-6 py-4 text-sm">
                                        <button 
                                        className="text-blue-500 hover:text-blue-800 font-medium"
                                        onClick={()=>setUsers(users.filter(u=>!(u.id===user.id)))}>Delete</button>
                                </td>
                            </tr>
                        ))

                        }
                    </tbody>
                </table>

            </div>

        </div>
    );
}