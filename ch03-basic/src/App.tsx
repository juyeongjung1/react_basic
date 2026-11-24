import { Navigate, Route, Routes, useMatch } from 'react-router'
import Sample3_1 from './components/Sample3_1'
import Sample3_2 from './components/Sample3_2'
import Sample3_3 from './components/Sample3_3'
import Sample3_4 from './components/Sample3_4'
import Sample3_5 from './components/Sample3_5'
import Sample3_6 from './components/Sample3_6'

const propsPath = '/sample-3-1'
const routingPath = '/sample-3-2'
const layoutPath = '/sample-3-3'
const navigationPath = '/sample-3-4'
const detailPath = '/sample-3-5'
const registerPath = '/sample-3-6'
const lessons = [
  { label: '3.1 コンポーネントの分割とProps', path: propsPath },
  { label: '3.2 React Routerによるルーティング', path: routingPath },
  { label: '3.3 共通レイアウトの作成', path: layoutPath },
  { label: '3.4 SPAの画面遷移（LinkとNavLink）', path: navigationPath },
  { label: '3.5 URLパラメータの取得', path: detailPath },
  { label: '3.6 プログラムによる画面遷移', path: registerPath },
]

export default function App() {
  const defaultPath = useMatch(propsPath) ? propsPath : routingPath
  const layoutMatch = useMatch(layoutPath + '/*')
  const navigationMatch = useMatch(navigationPath + '/*')
  const detailMatch = useMatch(detailPath + '/*')
  const registerMatch = useMatch(registerPath + '/*')
  const activePath = (layoutMatch && layoutPath)
    || (navigationMatch && navigationPath)
    || (detailMatch && detailPath)
    || (registerMatch && registerPath)
    || defaultPath

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
        <Route path={routingPath + '/*'} element={<Sample3_2 />} />
        <Route path={layoutPath + '/*'} element={<Sample3_3 />} />
        <Route path={navigationPath + '/*'} element={<Sample3_4 />} />
        <Route path={detailPath + '/*'} element={<Sample3_5 />} />
        <Route path={registerPath + '/*'} element={<Sample3_6 />} />
        <Route path="/" element={<Navigate to={routingPath} replace />} />
      </Routes>
    </>
  )
}
