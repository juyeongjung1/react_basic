import { useState } from 'react'
import Q2_1 from './components/Q2_1'
import Q2_2 from './components/Q2_2'
import Q2_3 from './components/Q2_3'
import Q2_4 from './components/Q2_4'
import Q2_5 from './components/Q2_5'
import Q2_6 from './components/Q2_6'
import Q2_7 from './components/Q2_7'

const lessons = [
  { label: '2.1 ReactコンポーネントとJSXの基本', component: Q2_1 },
  { label: '2.2 JSXによるデータ表示と属性の設定', component: Q2_2 },
  { label: '2.3 状態の管理（useState）', component: Q2_3 },
  { label: '2.4 イベント処理', component: Q2_4 },
  { label: '2.5 条件に応じた表示', component: Q2_5 },
  { label: '2.6 配列データの一覧表示', component: Q2_6 },
  { label: '2.7 フォーム入力と状態の連動', component: Q2_7 },
]

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ActiveLesson = lessons[activeIndex].component

  return (
    <>
      <nav className="container mt-3" aria-label="第2章の節を選ぶ">
        <p className="fw-semibold mb-2">第2章の確認演習</p>
        <ul className="nav nav-pills gap-2 pb-3 border-bottom">
          {lessons.map((lesson, index) => (
            <li className="nav-item" key={lesson.label}>
              <button
                type="button"
                className={index === activeIndex ? 'nav-link active' : 'nav-link'}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              >
                {lesson.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <ActiveLesson />
    </>
  )
}
