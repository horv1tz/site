<script>
    import { t, locale, setLocale } from '$lib/translations.js';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    // Создаём реактивную переменную для текущего языка
    let currentLang = writable('ru');

    // Функция для смены языка
    function changeLanguage(lang) {
        if (typeof document !== 'undefined') {
            document.cookie = `lang=${lang}; path=/; max-age=31536000; SameSite=Lax`; // 1 год
            localStorage.setItem('lang', lang);
        }
        setLocale(lang);
        currentLang.set(lang); // Обновляем реактивную переменную с текущим языком
    }

    // При загрузке страницы проверяем localStorage и cookies
    onMount(() => {
        if (typeof localStorage !== 'undefined') {
            const savedLang = localStorage.getItem('lang') || document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            const defaultLang = savedLang || 'ru';  // Устанавливаем язык по умолчанию, если не найден

            setLocale(defaultLang);
            currentLang.set(defaultLang); // Устанавливаем дефолтный язык в реактивную переменную
        }
    });
</script>

<select name="lang" id="lang-select" bind:value={$currentLang} on:change={e => changeLanguage(e.target.value)}>
    <option value="ru">🇷🇺</option>
    <option value="en">🇺🇸</option>
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