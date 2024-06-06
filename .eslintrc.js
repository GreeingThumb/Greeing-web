module.exports = {
  env: {
    browser: true, // 브라우저 전역 변수를 사용합니다.
    es2023: true, // ES2023 문법을 사용합니다.
  },
  parser: '@typescript-eslint/parser', // TypeScript 파서를 사용합니다.
  plugins: [
    'react', // React 플러그인을 사용합니다.
    'jsx-a11y', // 접근성 관련 플러그인을 사용합니다.
    '@typescript-eslint', // TypeScript 플러그인을 사용합니다.
    'import', // import/export 문법을 검사하고 문제점을 찾기 위해 eslint-plugin-import 를 사용합니다.
    'simple-import-sort', // import 문의 정렬을 자동화하고 일관성 있게 유지하기 위해 eslint-plugin-simple-import-sort 를 사용합니다.
    'prettier', // Prettier 플러그인을 사용합니다.
  ],
  extends: [
    'airbnb', // Airbnb 스타일 가이드를 사용합니다.
    'airbnb/hooks', // Airbnb 의 React Hooks 규칙을 사용합니다.
    'plugin:react/jsx-runtime', // React JSX 런타임 플러그인을 사용합니다.
    'plugin:jsx-a11y/recommended', // JSX 접근성 추천 규칙을 사용합니다.
    'plugin:react-hooks/recommended', // React Hooks 추천 규칙을 사용합니다.
    'eslint:recommended', // ESLint 추천 규칙을 사용합니다.
    'plugin:@typescript-eslint/recommended', // TypeScript 추천 규칙을 사용합니다.
    'plugin:@typescript-eslint/eslint-recommended', // TypeScript 와 관련된 ESLint 권장 규칙을 사용합니다. 기본 ESLint 규칙 중 TypeScript 와 충돌하는 것을 비활성화합니다.
    'prettier', // Prettier 규칙을 사용합니다.
    'plugin:prettier/recommended', // Prettier 규칙을 사용하여 충돌을 방지합니다.
    'plugin:import/errors', // eslint-plugin-import 를 사용하여 잘못된 import 문에 대한 에러를 잡습니다.
    'plugin:import/warnings', // eslint-plugin-import 를 사용하여 잠재적으로 문제가 될 수 있는 import 문에 대한 경고를 잡습니다.
    'plugin:import/typescript', // TypeScript 에서의 eslint-plugin-import 규칙을 사용합니다. TypeScript 와 함께 import/export 문법을 처리합니다.
    'plugin:@next/next/recommended', // Next.js 프레임워크와 관련된 권장 규칙을 사용합니다. Next.js의 특별한 요구 사항과 베스트 프랙티스에 따라 코드를 검사합니다.
  ],
  rules: {
    // 프로젝트의 특성에 따라 필요한 규칙을 정의하거나 기존 규칙을 재정의합니다.
    'react/button-has-type': 'warn',
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/no-array-index-key': 'off',
    'consistent-return': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@next/next/no-img-element': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/jsx-no-duplicate-props': [1, { ignoreCase: false }],
    'react/state-in-constructor': 'off',
    'react-hooks/exhaustive-deps': 0,
    'no-nested-ternary': 0,
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
  parserOptions: {
    ecmaVersion: 'latest', // 최신 ECMAScript 버전을 사용합니다.
    sourceType: 'module', // ECMAScript 모듈을 사용합니다.
  },
  settings: {
    react: {
      version: 'detect', // 설치된 React 버전을 자동 감지합니다.
    },
  },
}
