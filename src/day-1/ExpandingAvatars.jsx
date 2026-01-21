import { useState } from "react";

export default function ExpandingAvatars() {
    const users = [
        { id: 1, color: 'bg-rose-500' },
        { id: 2, color: 'bg-sky-500' },
        { id: 3, color: 'bg-emerald-500' },
        { id: 4, color: 'bg-amber-500' },
    ];

    const [isOnline, setIsOnline] = useState(true);
    

    return (
        <div className="p-20 flex flex-col items-center justify-center bg-slate-50">
            {/* 
                group: Tells tailwind to track hovers on this container
                flex: Aligns children in a row
                -space-x-4: Default state (overlapping).
                hover:space-x-2:Hover state (Expanding apart).
                transition-all duration-500: Makes the space-x change smooth
            */}

            <div className="group flex w-fit -space-x-4 hover:space-x-2 transition-all duration-500 ease-in-out
            cursor-pointer p-4 bg-white rounded-full shadow-sm">

                {
                    users.map((user)=>(
                        <div>
                            <div
                             key={user.id}
                             className={`
                                relative w-12 h-12 rounded-full border-4 border-white flex items-center
                                justify-center text-white font-bold shadow-sm ${user.color}
                                hover:scale-110 hover:z-50 transition-transform
                                `}
                            >
                                {isOnline && (
                                <span className="absolute top-0 right-0 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                )}
                                U{user.id}
                            </div>
                        </div>
                    ))
                }
                
            </div>
            <button 
                className="mt-8 px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold
                           hover:bg-blue-700 active:scale-95 transition-all
                           focus:outline-none focus:ring-4 focus:ring-blue-200"
                onClick={()=>setIsOnline(!isOnline)}
            >Toggle Status</button>
        </div>
    );
}