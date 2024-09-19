import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './component/Router/Router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <RouterProvider router={router} />
      <Toaster />
    </StrictMode>
  </QueryClientProvider>

)
