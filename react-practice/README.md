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

# ⚓️ React Hooks
## useState
***コンポーネント内で状態（state）を管理するためのフック***

```jsx
import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0); 
  // count: 現在の値
  // setCount: 値を更新する関数

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```
- useState(初期値) に初期値を渡して使う
- set〇〇 を呼び出すと再レンダリングされる
- 何回でも使える（複数 state 管理できる）

## useEffect
***副作用（データ取得、DOM操作、タイマー設定など）を扱うためのフック***

```jsx
import { useEffect } from "react";

const Example = () => {
  useEffect(() => {
    console.log("Component mounted!");

    return () => {
      console.log("Component will unmount!");
    };
  }, []); // ← 第2引数：依存配列（空なら初回マウント時のみ実行）

  return <div>Hello World</div>;
};
```
- useEffect(callback, [dependencies])
- 依存配列が空なら「初回マウント時だけ」実行
- 依存配列に値を渡すと、その値が変わるたびに再実行
- return でクリーンアップ処理も書ける（例：タイマー解除など）