
# Динамические компоненты для Next.js

Этот репозиторий содержит набор динамических и переиспользуемых компонентов, предназначенных для ваших веб-приложений на Next.js. Каждый компонент организован и задокументирован для быстрой интеграции и кастомизации.

## Примеры

Все примеры использования компонентов находятся в файлах `src/app/*/page.tsx`, где `*` — это название компонента. Вы можете обратиться к этим файлам, чтобы узнать, как использовать каждый компонент на практике в вашем приложении.

## Установка

Чтобы использовать эти компоненты в вашем проекте на Next.js, выполните следующие шаги:

1. **Склонируйте репозиторий**  
   Скачайте или склонируйте репозиторий:
   ```bash
   git clone https://github.com/yoonost/components.git
   ```

2. **Скопируйте необходимые файлы**  
   Скопируйте папки `components` и `libs` из этого репозитория в ваш проект Next.js.

3. **Настройте TailwindCSS**  
   Настройте файлы `tailwind.config.ts` и `globals.css` в вашем проекте, чтобы они соответствовали конфигурации, предоставленной в этом репозитории. Это необходимо для корректной работы стилей и утилит, используемых в компонентах.

## Структура папок

- `components/` – содержит все динамические компоненты.
- `libs/` – содержит вспомогательные библиотеки и утилиты, используемые компонентами.
- `tailwind.config.ts` – пример конфигурации Tailwind, которую нужно объединить с вашей текущей.
- `globals.css` – пример глобальных стилей для вашего проекта.

## Использование

После копирования необходимых файлов и настройки конфигурации, вы можете импортировать и использовать компоненты в страницах вашего приложения Next.js следующим образом:

```tsx
import { MyComponent } from '@/components/MyComponent';

export default function HomePage() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}
```

## Кастомизация

Вы можете свободно настраивать компоненты и конфигурацию TailwindCSS в соответствии с требованиями вашего проекта и дизайна.