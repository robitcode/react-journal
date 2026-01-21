export default function SearchInput(){
    return(
        <div className="w-full max-w-sm">
            <label className="block text-sm font-medium text-slate-700 mb-1">
                Search Projects
            </label>

            <input 
            type="text"
            placeholder="Type something..." 
            /* outline-none: Removes the default browser "blue ring"
               focus:ring-2: Adds a custom Tailwind ring on click
               focus:border-blue-500: Changes border color on click
            */
            className="w-full px-4 py-2 bg-white border-slate-300 rounded-lg outline-none transition-all 
                       focus:ring-2 focus:ring-blue-100 placeholder:text-slate-400"   
            />
        </div>
    )
}