import './navigation.css';

export const Navigation = () => {
  return (
    <nav>
      <div className="hamburger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className="nav-list toggle-class">
        <li>
          <a href="/">Domů</a>
        </li>
        <li>
          <a href="/pridat-knihu">Přidat knihu</a>
        </li>
        <li>
          <a href="/oblibene">Oblíbené</a>
        </li>
        <li>
          <a href="/hledani">Hledání</a>
        </li>
        <li>
          <a href="/o-aplikaci">O aplikaci</a>
        </li>
      </ul>
    </nav>
  );
};

// const hamburgerElm = document.querySelector('.hamburger-menu');
// hamburgerElm.addEventListener('click', () => {
//   const navElm = document.querySelector('.navlist');
//   navElm.classList.toggle('toggle-class');
// });
