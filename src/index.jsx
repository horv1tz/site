/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    // 'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    'Корневой элемент не найден. Вы забыли добавить его в index.html? Или, может быть, атрибут id был неправильно написан?'
  );
}

render(() => <App />, root);
