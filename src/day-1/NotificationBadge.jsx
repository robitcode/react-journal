export default function NotificationBadge() {
    return (
        <div className="relative w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center
            cursor-pointer hover:bg-slate-200 transition-colors">

            {/* The Icon (Just a simple bell emoji) or SVG */}
            <span className="text-2xl">🔔</span>

            {/* The Badge:
                    absolute: Moves it freely
                    -top-1 -right-1 Moves it slightly outside the top-right corner
                    flex h-5 w-5: Create a small circle 
                    animate-pulse: A built-in Tailwind animation!
                */}

            <div className="absolute -top-1 -right-1 flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full
                     rounded-full bg-red-400 opacity=75"></span>

                <span className="relative inline-flex rounded-full h5 w-5 bg-red-500 border-2 border-white"></span>
            </div>
        </div>
            
        )
}