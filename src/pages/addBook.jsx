import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Knihovna</h1>
    </header>
    <main>
      <form id="registration">
        <h1>Přihláška na kurz</h1>
        <label class="field">
          {' '}
          Autor: <input type="text" id="firstName" />{' '}
        </label>
        <label class="field">
          {' '}
          Název: <input type="text" id="lastName" />{' '}
        </label>
        <div class="controls">
          <button type="submit">Odeslat</button>
        </div>
      </form>
    </main>
    <footer>
      <p>@Lucie</p>
    </footer>
  </div>,
);
