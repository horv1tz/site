<script>
    import { t, locale, setLocale } from '$lib/translations.js';
    import { onMount } from 'svelte';

    // Функция для смены языка
    function changeLanguage(lang) {
        if (typeof document !== 'undefined') {
            // Сохраняем язык в cookies и localStorage
            document.cookie = `lang=${lang}; path=/; max-age=31536000; SameSite=Lax`; // 1 год
            localStorage.setItem('lang', lang);
        }
        setLocale(lang);
    }

    // При загрузке страницы проверяем localStorage
    onMount(() => {
        if (typeof localStorage !== 'undefined') {
            const savedLang = localStorage.getItem('lang');
            if (savedLang) {
                setLocale(savedLang);
            }
        }
    });
</script>

<select name="lang" id="lang-select" on:change={e => changeLanguage(e.target.value)}>
    <option value="ru">Русский</option>
    <option value="en">English</option>
</select>
<div class="app">
    <div class="profile-card">
        <div class="profile-image">
            <img src="/images/cat.jpg" alt="Profile photo" />
        </div>
        <div class="profile-info">
            <h1>{$t('main.name')}</h1>
            <div class="position">{$t('main.position')}</div>
            <a href="https://centrinvest.ru/" class="company">{$t('main.company')}</a>
            <div class="social-links">
                <a href="https://t.me/horvitz" class="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/telegram.svg" alt="Telegram">
                </a>
                <a href="https://github.com/horv1tz" class="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/github.svg" alt="Github">
                </a>
                <a href="https://vk.com/horvitz" class="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="/images/vk-icon.svg" alt="VK">
                </a>
                <a href="mailto:horvitz@dvorfs.ru" class="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/envelope-fill.svg" alt="Email">
                </a>
            </div>
        </div>
    </div>
</div>

<style>
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
        overflow-y: hidden;
        overflow-x: hidden;
    }

    .app {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #1E1E1E;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 20px;
    }

    .profile-card {
        background-color: #2A2A2A;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 800px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }

    .profile-image {
        width: 100%;
        max-height: 300px;
        overflow: hidden;
    }

    .profile-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .profile-info {
        padding: 20px;
        color: #E0E0E0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .profile-info h1 {
        font-size: 24px;
        margin-bottom: 10px;
        color: #FFFFFF;
    }

    .profile-info .position,
    .profile-info .company {
        font-size: 16px;
        color: #A0A0A0;
        margin-bottom: 10px;
        text-decoration: none !important;
        border: none !important;
    }

    .profile-info .position {
        font-weight: bold;
        color: #FFFFFF;
    }

    .social-links {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-top: 20px;
    }

    .social-link {
        background-color: #565656;
        color: #E0E0E0;
        text-decoration: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.3s ease;
    }

    .social-link:hover {
        background-color: #4A4A4A;
    }

    .social-link img {
        width: 20px;
        height: 20px;
    }

    /* Медиазапросы */
    @media (min-width: 768px) {
        .profile-card {
            flex-direction: row;
        }

        .profile-image {
            width: 33.33%;
            max-height: none;
        }

        .profile-info {
            width: 66.66%;
            padding: 30px;
            text-align: left;
            align-items: flex-start;
        }

        .profile-info h1 {
            font-size: 28px;
        }

        .profile-info .position,
        .profile-info .company {
            font-size: 18px;
        }

        .social-links {
            justify-content: flex-start;
        }
    }
    #lang-select {
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: #2A2A2A;
        color: #E0E0E0;
        border: 1px solid #565656;
        border-radius: 5px;
        padding: 8px 12px;
        font-size: 16px;
        outline: none;
        cursor: pointer;
        transition: background-color 0.3s ease, border-color 0.3s ease;
    }

    #lang-select:hover {
        background-color: #3A3A3A;
        border-color: #7A7A7A;
    }

    #lang-select:focus {
        border-color: #A0A0A0;
    }

    #lang-select option {
        background-color: #2A2A2A;
        color: #E0E0E0;
    }
</style>