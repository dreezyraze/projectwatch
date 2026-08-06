import { Toaster } from "react-hot-toast";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <App />
  <Toaster
    position="top-center"
    toastOptions={{
      duration: 2500,
      style: {
        background: "#18181b",
        color: "#fff",
        border: "1px solid #eab308",
      },
    }}
  />
</QueryClientProvider>
)
