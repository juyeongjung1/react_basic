import { Route, Routes, useMatch } from 'react-router'
import Q4_2 from './components/Q4_2'
import Q4_3 from './components/Q4_3'
import Q4_4 from './components/Q4_4'

const samplePath = '/sample-4-2'
const productListPath = '/sample-4-3'
const effectSamplePath = '/sample-4-4'

export default function App() {
  const active = Boolean(useMatch(samplePath))
  const productListActive = Boolean(useMatch(productListPath))
  const effectSampleActive = Boolean(useMatch(effectSamplePath))

  return (
    <>
      <nav className="container mt-3" aria-label="第4章の節を選ぶ">
        <p className="fw-semibold mb-2">第4章の確認演習</p>
        <ul className="nav nav-pills gap-2 pb-3 border-bottom">
          <li className="nav-item">
            <button
              type="button"
              className={active ? 'nav-link active' : 'nav-link'}
              aria-pressed={active}
              onClick={() => window.location.assign(samplePath)}
            >
              4.2 AxiosによるHTTP通信
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className={productListActive ? 'nav-link active' : 'nav-link'}
              aria-pressed={productListActive}
              onClick={() => window.location.assign(productListPath)}
            >
              4.3 取得したデータの画面表示
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className={effectSampleActive ? 'nav-link active' : 'nav-link'}
              aria-pressed={effectSampleActive}
              onClick={() => window.location.assign(effectSamplePath)}
            >
              4.4 useEffectによる処理の実行
            </button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={null} />
        <Route path={samplePath} element={<Q4_2 />} />
        <Route path={productListPath} element={<Q4_3 />} />
        <Route path={effectSamplePath} element={<Q4_4 />} />
      </Routes>
    </>
  )
}
