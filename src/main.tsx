import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Expenses from './routes/Expenses'
import Invoice from './routes/Invoice'
import Invoices from './routes/Invoices'
import NotFound from './routes/NotFound'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Route>
      
    </Routes>
  </BrowserRouter>
)
