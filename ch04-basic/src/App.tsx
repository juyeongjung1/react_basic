import { Route, Routes, useMatch } from 'react-router'
import Sample4_2 from './components/Sample4_2'
import Sample4_3 from './components/Sample4_3'
import Sample4_4 from './components/Sample4_4'
import Sample4_5 from './components/Sample4_5'

const samplePath = '/sample-4-2'
const productListPath = '/sample-4-3'
const effectSamplePath = '/sample-4-4'
const errorSamplePath = '/sample-4-5'

export default function App() {
  const active = Boolean(useMatch(samplePath))
  const productListActive = Boolean(useMatch(productListPath))
  const effectSampleActive = Boolean(useMatch(effectSamplePath))
  const errorSampleActive = Boolean(useMatch(errorSamplePath))

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
          <li className="nav-item">
            <button
              type="button"
              className={errorSampleActive ? 'nav-link active' : 'nav-link'}
              aria-pressed={errorSampleActive}
              onClick={() => window.location.assign(errorSamplePath)}
            >
              4.5 通信エラーへの対応
            </button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={null} />
        <Route path={samplePath} element={<Sample4_2 />} />
        <Route path={productListPath} element={<Sample4_3 />} />
        <Route path={effectSamplePath} element={<Sample4_4 />} />
        <Route path={errorSamplePath} element={<Sample4_5 />} />
      </Routes>
    </>
  )
}
