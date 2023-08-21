import NavBar from './components/NavBar'
import './globals.css'
// import styles from './page.module.css'
import './page.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className="main">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  )
}
