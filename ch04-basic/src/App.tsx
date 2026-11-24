import { Route, Routes, useMatch } from 'react-router'
import Sample4_1 from './components/Sample4_1'

const samplePath = '/sample-4-1'

export default function App() {
  const active = Boolean(useMatch(samplePath))

  return (
    <>
      <nav className="container mt-3" aria-label="第4章の節を選ぶ">
        <p className="fw-semibold mb-2">第4章の完成サンプル</p>
        <ul className="nav nav-pills gap-2 pb-3 border-bottom">
          <li className="nav-item">
            <button
              type="button"
              className={active ? 'nav-link active' : 'nav-link'}
              aria-pressed={active}
              onClick={() => window.location.assign(samplePath)}
            >
              4.1 AxiosによるHTTP通信
            </button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={null} />
        <Route path={samplePath} element={<Sample4_1 />} />
      </Routes>
    </>
  )
}
