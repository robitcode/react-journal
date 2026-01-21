// Status card
export default function StatusCard() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg flex item-center gap-4 hover:border-slate-500 hover:bg-gray-200 transition-colors-100 
        border border-slate-100">
            {/* Icon Container w-12 h-12 (48px square) */}
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">R</span>
            </div>

            <div>
                {/* Text-slate-900: Dark gray text font-bold : Thick text*/}
                <h3 className="text-slate-900 font-bold text-lg"> Payment Succesfull</h3>

                {/* text-slate-500: Lighter gray for secondary info */}
                <p className="text-slate-500 text-sm">Transaction ID: #12345</p>
            </div>
        </div>
    )
}