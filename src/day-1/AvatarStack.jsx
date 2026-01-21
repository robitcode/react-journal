export default function AvatarStack(){
    const users = [
    { id: 1, color: 'bg-red-500' },
    { id: 2, color: 'bg-blue-500' },
    { id: 3, color: 'bg-green-500' },
    { id: 4, color: 'bg-yellow-500' },
  ];
    return(
        <div className="flex items-center">
            {/* -space-x-3: This is a Tailwind magic utility that adds negative margin to 
            all children automatically!! */}
            <div className="flex -space-x-3">
                {
                    users.map((user)=>(
                        <div
                        key={user.id}
                        className={`w-10 h-10 font-large rounded-full border-2 border-white ${user.color}`}
                        >
                            U{user.id}
                        </div>
                    ))
                }
                {/* Changed {} to () */}
            </div>

            <span className="ml-4 text-sm text-slate-600 font-small">
                +12 others joined
            </span>
        </div>
    );
};