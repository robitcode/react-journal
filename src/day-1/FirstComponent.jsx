export default function FirstComponent() {
    return (
        <div className="min-h-screen grid place-items-center">

            <div className="p-10 bg-white rounded-3xl shadow-2xl">
                <h1 className="text-3xl font-bold 
                text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    Tailwind is ready
                </h1>

                <p className="mt-4 text-slate-600 font-medium">
                    If you see a gradient title and centered card, your setup is perfect.
                </p>
            </div>
        </div>
    );
}