# 🧑🏼‍💻 Study React !
## Setup React Project
### 1. Vite + Reactのプロジェクトを新規作成
```sh
npm create vite@latest react-practice -- --template react
```

```sh
cd react-practice
npm install
npm run dev
```

# 三項演算子
## 基本構文
```jsx
条件式 ? 真のときの値 : 偽のときの値
```

## 例
```jsx
const isLoggedIn = true;

return (
  <div>
    {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
  </div>
);
```