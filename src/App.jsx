import styles from './App.module.css';
import me from './assets/me.jpg';
import vkicon from "./assets/vk-icon.svg";

function App() {
  return (
    <div class={styles.App}>
      <div class={styles.profileCard}>
        <div class={styles.profileImage}>
          <img src={me} alt='Профиль'/>
        </div>
        <div class={styles.profileInfo}>
          <h1>Сергей Задорожный (aka. SergeySabbath)</h1>
          <div class={styles.position}>SRE Инженер</div>
          <div class={styles.company}>Центр-инвест 💚</div>
          <div class={styles.socialLinks}>
            <a href="https://t.me/SergeySabbath" class={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/telegram.svg" alt="Telegram" />
            </a>
            <a href="https://github.com/sabbath666" class={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/github.svg" alt="Github" />
            </a>
            <a href="mailto:sergeysabbath@gmail.ru" class={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/envelope-fill.svg" alt="Email" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
