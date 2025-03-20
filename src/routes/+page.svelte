<script>
    import { t, setLocale, loadTranslations } from '$lib/translations.js';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    const currentLang = writable('ru');
    let ready = writable(false);

    async function changeLanguage(lang) {
        if (typeof document !== 'undefined') {
            document.cookie = `lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
            localStorage.setItem('lang', lang);
        }
        await setLocale(lang);
        currentLang.set(lang);
    }

    // Загружаем только важные изображения (фон, фото, VK)
    async function loadImages(urls) {
        await Promise.all(urls.map(src => new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
        })));
    }

    onMount(async () => {
        const cookieLang = document.cookie
            .split('; ')
            .find(row => row.startsWith('lang='))?.split('=')[1];
        const savedLang = cookieLang || localStorage.getItem('lang') || 'ru';

        currentLang.set(savedLang);

        await Promise.all([
            setLocale(savedLang),
            loadTranslations(savedLang, '/'),
            loadImages([
                'https://s3.dvorfs.com/horvitz-site/cat.jpg',
                'https://s3.dvorfs.com/horvitz-site/vk-icon.svg',
                'https://s3.dvorfs.com/horvitz-site/background.png'
            ])
        ]).catch(error => console.error('Ошибка загрузки ресурсов', error));

        if (document.readyState !== 'complete') {
            await new Promise(resolve => window.addEventListener('load', resolve));
        }

        ready.set(true);
    });
</script>

{#if !$ready}
    <div class="loading-screen">
        <div class="spinner"></div>
    </div>
{:else}
    <select name="lang" id="lang-select" bind:value={$currentLang} on:change={() => changeLanguage($currentLang)}>
        <option value="ru">🇷🇺</option>
        <option value="kz">🇰🇿</option>
        <option value="en">🇺🇸</option>
        <option value="de">🇩🇪</option>
        <option value="fr">🇫🇷</option>
        <option value="ar">🇲🇦</option>
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

<style>
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        background: #121212 url("https://s3.dvorfs.com/horvitz-site/background.png") no-repeat center/cover;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        overflow: hidden;
    }

    .loading-screen {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(18, 18, 18, 0.9);
        z-index: 9999;
        flex-direction: column;
        backdrop-filter: blur(10px);
    }

    .spinner {
        border: 6px solid rgba(255, 255, 255, 0.2);
        border-top: 6px solid #e63946;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        animation: spin 1.5s cubic-bezier(0.6, 0.2, 0.4, 0.8) infinite;
        box-shadow: 0 0 15px rgba(230, 57, 70, 0.6);
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
