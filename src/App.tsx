import type { Component } from 'solid-js'
import Navbar from './components/Navbar'

const App: Component = () => {
  return (
    <>
      <div class='drawer'>
        <input id='nav-drawer' type='checkbox' class='drawer-toggle' />
        <div class='drawer-content flex flex-col'>
          <Navbar />

          <main>
            {/* Main content goes here... */}
            <div class='flex justify-center'>
              <img src='/icons/icon-512.png'></img>
            </div>
          </main>
        </div>
        <div class='drawer-side'>
          <label for='nav-drawer' aria-label='close sidebar' class='drawer-overlay'></label>
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
