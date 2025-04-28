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

## useContex
***ReactのContext（共有データの仕組み）を、コンポーネント内で簡単に使えるようにするためのHook***
「親からpropsをたくさん渡さなくても、どこでも共通データが取れる」感じ

### ①Contex作成
```jsx
import { createContext } from 'react';
export const UserContext = createContext(null);
```

### ②Providerでデータを渡す
```jsx
<UserContext.Provider value={{ name: "山田", age: 20 }}>
  <App />
</UserContext.Provider>
```

### ③useContextで取り出す
```jsx
import { useContext } from 'react';
import { UserContext } from './UserContext';

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      名前: {user.name}, 年齢: {user.age}
    </div>
  );
}
```

- `createContext()`	Contextを作る
- `Provider`	データを渡す役割（親側）
- `useContext()`	データを取り出す役割（子側）

## useReducer
**状態管理をもうちょっと「ロジック分離して」「きれいに整理する」ためのHook**

### ①reducer関数を作る（状態をどう変えるか）
```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

### ②useReducerを使う
```jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>カウント: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
```

## useCallback
- 親コンポーネントから子コンポーネントへ「関数」を渡すとき
- 子側で React.memo（または PureComponent） を使っているとき
- 再レンダーのたびに同じ関数リテラルが生成され、子が無駄に再描画されるのを抑制したい場合
**※src/components/MyuseCallback.jsxを参照**

## useMemo
- 高コストな計算結果をキャッシュしたいとき
- 配列のフィルタ・ソート結果、複雑なオブジェクト生成など
- 依存配列が変わらない限り再計算をスキップしてパフォーマンス向上
```jsx
import React, { useState, useMemo } from 'react';

export default function FilteredList() {
  const [search, setSearch] = useState('');
  const items = ['apple', 'banana', 'grape', 'orange'];

  // items フィルタ結果をメモ化
  const filtered = useMemo(() => {
    console.log('Filtering items…');
    return items.filter(item => item.includes(search));
  }, [search]); // search が変わるときだけ再計算

  return (
    <div>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search…"
      />
      <ul>
        {filtered.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

## useRef
- DOM 参照
  - `<input ref={myRef} />` のように直接フォーカス制御・値取得したいとき
- 再レンダー不要な mutable 値
  - タイマー ID、前回の状態保持、アニメーションフレーム ID などを保持したいが、値更新で再レンダーは起こしたくないとき


### DOM操作
```jsx
import React, { useRef } from 'react';

export default function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // 再レンダーなしで input をフォーカス
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" placeholder="ここをフォーカス" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}

```

### mutable 値保持での useRef
```jsx
import React, { useRef, useState } from 'react';

export default function Stopwatch() {
  const timerId = useRef(null);    // タイマー ID を保持
  const [seconds, setSeconds] = useState(0);

  const start = () => {
    if (timerId.current === null) {
      timerId.current = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };

  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
```

# props と state
| 項目         | props                                     | state                                      |
|--------------|-------------------------------------------|--------------------------------------------|
| 定義         | 親コンポーネントから渡される読み取り専用データ | コンポーネント自身が保持・更新できる内部データ |
| データの出所 | 親コンポーネント                             | 自コンポーネント                             |
| 更新方法     | 親から渡される（子では直接更新不可）          | `useState` フックのセッター関数で更新         |
| 読み書き     | 読み取りのみ                               | 読み書き可能                                 |
| 再レンダー   | 親の再レンダー時に再評価                     | state 更新時に再レンダー                      |
| 主な用途     | 親→子へのデータ／コールバック関数渡し        | ユーザー入力・サーバ応答・タイマーなど動的変化管理 |
