export default function StudyCard() {
    const dayOneNotes = [
        {
            "topic": "Absolute Positioning",
            "concepts": ["relative", "absolute", "inset-0"],
            "explanation": "Used to pull elements out of the document flow. Parent must be 'relative'.",
            "exampleCode": "<div className='relative'><div className='absolute top-0'></div></div>"
        },
        {
            "topic": "Flexbox Column",
            "concepts": ["flex-col", "items-center", "justify-between"],
            "explanation": "Swaps the main axis to vertical. 'items-center' now handles horizontal centering.",
            "exampleCode": "<div className='flex flex-col items-center'>...</div>"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {
                dayOneNotes.map((note, index) => (
                    <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">

                            <h3 className="text-xl font-bold text-zinc-900">{note.topic}</h3>
                            <span className="text-xs font-mono bg-zinc-100 text-zinc-500 px-2 py-1 rounded">Day 1</span>
                        </div>

                        {/* Keywords/Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {
                                note.concepts.map((concept) => (
                                    <code key={concept} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-bold">
                                        #{concept}
                                    </code>
                                ))
                            }
                        </div>

                        {/* Explanation */}
                        <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                            {note.explanation}
                        </p>

                        {/* MiniCode Preview */}
                        <div className="bg-zinc-900 rounded-xl p-4 overflow-x-auto">
                            <pre className="text-pink-400 text-xs  tracking-tight font-mono">
                                <code>{note.exampleCode}</code>
                            </pre>
                        </div>
                    </div>
                ))

            }
        </div>
    )
}