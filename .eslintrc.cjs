module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // Добавляет рекомендуемые правила React
    'plugin:react-hooks/recommended' // Добавляет рекомендуемые правила хуков
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react', // Указывает ESLint использовать плагин React
    'react-hooks' // Указывает ESLint использовать плагин хуков React
  ],
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect', // Говорит eslint-plugin-react автоматически определять версию React
    }
  },
  rules: {
    // Основные правила JavaScript:
    'indent': ['error', 2], // Отступ в 2 пробела
    'linebreak-style': ['error', 'unix'], // Переводы строк в Unix-стиле (LF)
    'quotes': ['error', 'single'], // Используйте одинарные кавычки
    'semi': ['error', 'always'], // Всегда ставьте точку с запятой

    // Правила для TypeScript через @typescript-eslint/eslint-plugin:
    '@typescript-eslint/explicit-function-return-type': 'off', // Не требовать явного возвращаемого типа у функций
    '@typescript-eslint/no-unused-vars': 'warn', // Предупреждение для неиспользованных переменных
    '@typescript-eslint/no-explicit-any': 'off', // Разрешить использование типа any

    // Правила React:
    'react/jsx-filename-extension': ['warn', { 'extensions': ['.jsx', '.tsx'] }], // Разрешить jsx в файлах с расширением .jsx и .tsx
    'react/react-in-jsx-scope': 'off', // Для React 17+ не нужно импортировать React при использовании JSX
    'react/prop-types': 'off', // Если вы используете TypeScript, propTypes не нужны

    // Правила хуков React:
    'react-hooks/rules-of-hooks': 'error', // Проверка правил хуков
    'react-hooks/exhaustive-deps': 'warn', // Проверять зависимости эффектов

    // Стиль для JSX:
    'react/jsx-indent': ['error', 2], // Отступ в 2 пробела для JSX
    'react/jsx-indent-props': ['error', 2], // Отступ в 2 пробела для пропсов в JSX
    'react/jsx-curly-spacing': ['error', { 'when': 'never', 'children': true }], // Пробелы внутри фигурных скобок JSX: не использовать

    // Осторожно с этими правилами, они могут конфликтовать с форматированием или предпочтениями в стиле:
    'react/jsx-wrap-multilines': ['error', { // Многострочные JSX элементы должны быть обернуты в скобки
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line'
    }],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'], // Закрывающая скобка JSX должна быть выровнена с открывающей
    'react/self-closing-comp': 'error', // Должны использоваться самозакрывающиеся теги, если компоненты не имеют children
    'react/jsx-uses-react': 'off', // Не отмечать React как используемый, если он не используется в файле (устарело в React 17+)
    'react/jsx-uses-vars': 'error' // Предотвратить ошибки неиспользованных переменных для компонентов JSX
  },
};
