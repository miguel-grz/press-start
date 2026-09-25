import { createBrowserRouter } from 'react-router'
import { NotFound } from '../features/NotFound'
import { RootLayout } from './RootLayout'

/** Each route is its own chunk: a console page only downloads its scene when visited. */
export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        { index: true, lazy: () => import('../features/catalog/CatalogPage') },
        { path: 'console/:slug', lazy: () => import('../features/console/ConsolePage') },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
