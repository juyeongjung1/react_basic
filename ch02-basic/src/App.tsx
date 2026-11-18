import { useState } from 'react'
import Sample2_1 from './components/Sample2_1'
import Sample2_2 from './components/Sample2_2'
import Sample2_3 from './components/Sample2_3'

const lessons = [
  { label: '2.1 ReactコンポーネントとJSXの基本', component: Sample2_1 },
  { label: '2.2 JSXによるデータ表示と属性の設定', component: Sample2_2 },
  { label: '2.3 状態の管理（useState）', component: Sample2_3 },
]

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ActiveLesson = lessons[activeIndex].component

  return (
    <>
      <nav className="container mt-3" aria-label="第2章の節を選ぶ">
        <p className="fw-semibold mb-2">第2章の完成サンプル</p>
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
