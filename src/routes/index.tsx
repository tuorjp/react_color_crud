/* eslint-disable prettier/prettier */
import { Route, Routes } from 'react-router'
import { DefaultLayout } from '../layout/App'
import { Home } from '../pages/Home'
import { TablePage } from '../pages/TablePage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<TablePage />} />
      </Route>
    </Routes>
  )
}
