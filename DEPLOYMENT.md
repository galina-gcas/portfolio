# Инструкции по деплою на GitHub Pages

## Настройка репозитория

1. **Создайте репозиторий на GitHub** (если еще не создан)
   - Название репозитория должно совпадать с значением `base` в `vite.config.js`
   - Если название репозитория отличается от `portfolio-1`, обновите строку `base: '/portfolio-1/'` в `vite.config.js`

2. **Настройте GitHub Pages в настройках репозитория:**
   - Перейдите в Settings → Pages
   - В разделе "Source" выберите "GitHub Actions"
   - Сохраните настройки

3. **Загрузите код в репозиторий:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git push -u origin main
   ```

## Автоматический деплой

После настройки репозитория:

1. **При каждом push в ветку `main`** GitHub Actions автоматически:
   - Установит зависимости
   - Соберет проект
   - Задеплоит на GitHub Pages

2. **URL вашего сайта** будет: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

## Локальная разработка

Для локальной разработки с правильными путями:

```bash
npm run dev
```

## Ручной деплой (альтернатива)

Если хотите деплоить вручную:

```bash
npm run build
npm run deploy
```

## Важные замечания

- Убедитесь, что название репозитория совпадает с `base` в `vite.config.js`
- Если используете кастомный домен, обновите `base` на `'/'`
- GitHub Actions требует разрешения на запись в Pages (настраивается автоматически)
