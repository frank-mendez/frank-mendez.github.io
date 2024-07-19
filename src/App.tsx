import {
    RouterProvider,
} from "react-router-dom";
import { router } from './routes/router.tsx'
import AppLayout from './layout/AppLayout.tsx'

function App() {

  return (
      <AppLayout>
          <RouterProvider router={router} />
      </AppLayout>
  )
}

export default App
