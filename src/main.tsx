/* @refresh reload */
import './styles.css'
import { render } from 'solid-js/web'

import App from './App'

const root = document.getElementById('app')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
  )
}

// Register the service worker if supported
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}

render(() => <App />, root!)
