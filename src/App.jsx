import styles from './App.module.css';
import cat from './assets/cat.jpg';
import vkicon from "./assets/vk-icon.svg";

function App() {
  return (
    <div class={styles.App}>
      <div class={styles.profileCard}>
        <div class={styles.profileImage}>
          <img src={cat} alt="Профиль" />
        </div>
        <div class={styles.profileInfo}>
          <h1>Леонид Дьяченко (aka. Horvitz)</h1>
          <div class={styles.age}>18 лет</div>
          <div class={styles.position}>SRE Инженер</div>
          <div class={styles.company}>Центр-инвест ❤️</div>
          <div class={styles.socialLinks}>
            <a href="https://t.me/horvitz" class={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/telegram.svg" alt="Telegram" />
            </a>
            <a href="https://github.com/horv1tz" class={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/github.svg" alt="Github" />
            </a>
            <a href="https://vk.com/horvitz" class={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <img src={vkicon} alt="VK" />
            </a>
            <a href="mailto:horvitz@dvorfs.ru" class={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/envelope-fill.svg" alt="Email" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
