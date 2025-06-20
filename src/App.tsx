import type { Component } from 'solid-js'
import Navbar from './components/Navbar'

const App: Component = () => {
  return (
    <>
      <div class='drawer'>
        <input id='my-drawer-3' type='checkbox' class='drawer-toggle' />
        <div class='drawer-content flex flex-col'>
          <Navbar />

          <main>
            <p class='text-4xl text-green-700 text-center py-20'>Hello tailwind!</p>
          </main>
        </div>
        <div class='drawer-side'>
          <label for='my-drawer-3' aria-label='close sidebar' class='drawer-overlay'></label>
          <ul class='menu bg-base-200 min-h-full w-80 p-4'>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
