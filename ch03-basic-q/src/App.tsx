import { useState } from 'react'
import Q3_1 from './components/Q3_1'

const lessons = [
  { label: '3.1 コンポーネントの分割とProps', component: Q3_1 },
]

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ActiveLesson = lessons[activeIndex].component

  return (
    <>
      <nav className="container mt-3" aria-label="第3章の節を選ぶ">
        <p className="fw-semibold mb-2">第3章の確認演習</p>
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
