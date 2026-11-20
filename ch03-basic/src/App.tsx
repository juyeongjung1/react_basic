import { Route, Routes, useMatch } from 'react-router'
import Sample3_1 from './components/Sample3_1'
import Sample3_2 from './components/Sample3_2'

const propsPath = '/sample-3-1'
const lessons = [
  { label: '3.1 コンポーネントの分割とProps', path: propsPath },
  { label: '3.2 React Routerによるルーティング', path: '/' },
]

export default function App() {
  const activePath = useMatch(propsPath) ? propsPath : '/'

  return (
    <>
      <nav className="container mt-3" aria-label="第3章の節を選ぶ">
        <p className="fw-semibold mb-2">第3章の完成サンプル</p>
        <ul className="nav nav-pills gap-2 pb-3 border-bottom">
          {lessons.map((lesson) => (
            <li className="nav-item" key={lesson.path}>
              <button
                type="button"
                className={lesson.path === activePath ? 'nav-link active' : 'nav-link'}
                aria-pressed={lesson.path === activePath}
                onClick={() => window.location.assign(lesson.path)}
              >
                {lesson.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        <Route path={propsPath} element={<Sample3_1 />} />
        <Route path="/*" element={<Sample3_2 />} />
      </Routes>
    </>
  )
}
