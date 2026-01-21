export default function SecondComponent() {
    return (
        <div className="min-h-svh flex items-center justify-center bg-zinc-50">

            {/* group: This allows us to style children based on parent state */}
            <div className="group p-10 bg-white shadow-xl rounded-2xl border border-zinc-200 
            hover:border-blue-500 hover:bg-blue-200 transition-colors-100 cursor-pointer">

                <h1 className="text-4xl font-black text-zinc-900 tracking-tight text-balance">
                    Tailwind <span className="text-blue-600 group-hover:italic transition-all">v4</span>
                </h1>
                <p className="mt-4 text-zinc-500 max-w-xs">
                    Notice how the blue text turns italic when you hover the card? That's the 'group' utility in action.
                </p>
            </div>
        </div>
    )
}