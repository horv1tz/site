# Используем официальный образ Node.js как базовый
FROM node:22-alpine
LABEL authors="horvitz"

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если он есть) в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

# Строим проект для продакшн
RUN npm run build

# Экспонируем порт, на котором приложение будет доступно
EXPOSE 4173

# Запускаем приложение
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]