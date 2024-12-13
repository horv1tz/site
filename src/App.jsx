import styles from './App.module.css';
import vkicon from "./assets/vk-icon.svg";

const cat = "https://s3.dvorfs.com/horvitz-site/cat.webp";

function App() {
  new Snow(
    {
      snowBallIterationsInterval: 250
    }
  );
  
  return (
    <div class={styles.App}>
      <div class={styles.profileCard}>
        <div class={styles.profileImage}>
          <img src={cat} alt="Профиль" />
        </div>
        <div class={styles.profileInfo}>
          <h1>Леонид Дьяченко (aka. Horvitz)</h1>
          <div class={styles.position}>SRE Инженер</div>
          <a href="https://centrinvest.ru/" class={styles.company}>Центр-инвест 💚</a>
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
