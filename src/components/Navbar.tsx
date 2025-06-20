export default function Navbar() {
  return (
    <nav class='navbar bg-base-300 w-full min-h-[40px]'>
      <div class='flex-none'>
        <label for='nav-drawer' class='btn btn-square btn-ghost' aria-label='open sidebar'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            class='inline-block h-6 w-6 stroke-current'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </label>
      </div>
      <div class='mx-2 flex-1 px-2'>Navbar</div>
      <div class='hidden flex-none lg:block'>
        <ul class='menu menu-horizontal'>
          <li>
            <a>Navbar Item 1</a>
          </li>
          <li>
            <a>Navbar Item 2</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
