import { Outlet, ScrollRestoration } from 'react-router'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SmoothScroll } from '../motion/SmoothScroll'

export function RootLayout() {
  return (
    <SmoothScroll>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </SmoothScroll>
  )
}
