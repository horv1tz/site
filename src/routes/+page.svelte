<script>
    import { t, setLocale, loadTranslations } from '$lib/translations.js';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    const currentLang = writable('ru');
    let ready = writable(false); // Флаг завершения загрузки

    // Функция для смены языка
    async function changeLanguage(lang) {
        if (typeof document !== 'undefined') {
            document.cookie = `lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
            localStorage.setItem('lang', lang);
        }
        await setLocale(lang);
        currentLang.set(lang);
    }

    // Функция для загрузки изображения и ожидания его загрузки
    function loadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
        });
    }

    // Загрузка переводов и изображений
    onMount(async () => {
        // Загружаем переводы
        const cookieLang = document.cookie.split('; ').find(row => row.startsWith('lang='))?.split('=')[1];
        const savedLang = cookieLang || localStorage.getItem('lang') || 'ru';

        currentLang.set(savedLang);
        await setLocale(savedLang); // Устанавливаем язык
        await loadTranslations(savedLang, '/'); // Загружаем переводы

        // Загружаем иконку VK
        try {
            await loadImage('https://s3.dvorfs.com/horvitz-site/vk-icon.svg');
        } catch (error) {
            console.error('Ошибка загрузки иконки VK', error);
        }

        // Когда все ресурсы загружены, показываем контент
        ready.set(true);
    });
</script>

{#if !$ready}
    <!-- Загрузка с анимацией -->
    <div class="loading-screen">
        <div class="spinner"></div>
    </div>
{:else}
    <!-- Основной контент страницы -->
    <select name="lang" id="lang-select" bind:value={$currentLang} on:change={() => changeLanguage($currentLang)}>
        <option value="ru">🇷🇺</option>
        <option value="en">🇺🇸</option>
        <option value="de">🇩🇪</option>
        <option value="fr">🇫🇷</option>
    </select>

    <div class="app">
        <div class="profile-card">
            <div class="profile-image">
                <img src="https://s3.dvorfs.com/horvitz-site/cat.jpg" alt="Profile of a cat" />
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
                        <img src="https://s3.dvorfs.com/horvitz-site/vk-icon.svg" alt="VK">
                    </a>
                    <a href="mailto:horvitz@dvorfs.ru" class="social-link" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/envelope-fill.svg" alt="Email">
                    </a>
                </div>
            </div>
        </div>
        <div class="documentation">
            <h1>{$t('main.documentation_name')}</h1>
            <a href="https://docs.horvitz.ru">{$t('main.documentation_button')}</a>
        </div>
    </div>
{/if}

<!-- Стиль для загрузочного экрана -->
<style>
    /* Стиль body */
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #1E1E1E url("https://s3.dvorfs.com/horvitz-site/background.png") no-repeat center/cover;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        overflow: hidden;
    }

    /* Анимация загрузки */
    .loading-screen {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(30, 30, 30, 0.8); /* Тёмный фон с прозрачностью */
        z-index: 9999;
        flex-direction: column;
    }

    .spinner {
        border: 8px solid #f3f3f3;
        border-top: 8px solid #5a1c36; /* Цвет спиннера */
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
