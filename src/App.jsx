import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FirstComponent from './day-1/FirstComponent'
import './App.css'
import SecondComponent from './day-1/SecondComponent'
import StatusCard from './day-1/StatusCard'
import NotificationBadge from './day-1/NotificationBadge'
import SearchInput from './day-1/SearchInput'
import AvatarStack from './day-1/AvatarStack'
import ExpandingAvatars from './day-1/ExpandingAvatars'
import UserTable from './day-1/UserTable'
import ToDoComponent from './day-1/ToDoComponent'
import StudyCard from './day-2/StudyCard'

function App() {
  const [selectedId, setSelectedId] = useState("todo");

  // 1. DATA STRUCTURE: Categorize your components by day 
  const menu = [
    {
      "day": "Day 1",
      "components": [
        { "id": "todo", "name": "Todo List", "component": <ToDoComponent />},
        { "id": "card", "name": "Status Card", "component": <StatusCard /> },
        { "id": "first", "name": "First Component", "component": <FirstComponent /> },
        { "id": "second", "name": "Second Component", "component": <SecondComponent /> },
        { "id": "stack", "name": "Avatar Stack", "component": <AvatarStack /> },
        { "id": "expand-avatars", "name": "Expanding Avatars Component", "component": <ExpandingAvatars /> },
        { "id": "notif", "name": "Notification Badge", "component": <NotificationBadge /> },
        { "id": "table", "name": "User Table", "component": <UserTable /> },
        { "id": "searchinp", "name": "Search Input", "component": <SearchInput /> },
        { "id": "studycard", "name": "StudyCard", "component": <StudyCard /> }
      ]
    }
  ];

  const ActivePreview = menu.flatMap(day => day.components).find(c => c.id === selectedId)?.component;

  return (
    <div className='flex h-screen bg-zinc-100 font-sans antialiased text-zinc-900'>
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-zinc-200 flex flex-col">
        <div className='p-6 border-b border-zinc-100'>
          <h1 className='text-xl font-black tracking-tight text-yellow-500'>React Journal</h1>
          <p className='text-xs text-zinc-400 font-medium'>React + Tailwind v4</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-8">
          {
            menu.map((group) => (
              <div key={group.day}>
                <h2 className="px-3 text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                  {group.day}
                </h2>
                <div className="space-y-1">
                  {
                    group.components.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all
                          ${selectedId == item.id
                            ? 'bg-blue-50 text-blue-700 shadow-sm'
                            : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'}`}>
                        {item.name}
                      </button>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </nav>
      </aside>

      {/* Preview Pane */}
      <main className='flex-1 flex flex-col overflow-hidden'>
        <header className="h-16 bg-white border-b border-zinc-200 flex items-center px-8 justify-between">
          <span className='text-sm font-bold text-zinc-500'>
            Previewing: <span className="text-zinc-900">{selectedId}</span>
          </span>
          <div className='flex gap-2'>
            <div className='w-3 h-3 rounded-full bg-red-400' />
            <div className='w-3 h-3 rounded-full bg-yellow-400' />
            <div className='w-3 h-3 rounded-full bg-green-400' />
          </div>
        </header>

        <section className='flex-1 overflow-auto p-12 
          bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'>

          <div className='max-w-5xl mx-auto'>
            {/* THE RENDER ZONE */}
            {ActivePreview || <div className='text-zinc-400'>Select a component</div>}
          </div>
        </section>
      </main>
    </div>

  )
}

export default App
