import AuthProvider from './components/AuthProvider/page'
import NavBar from './components/NavBar'
import './globals.css'
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
          <AuthProvider>
            <NavBar />
            {children}
          </AuthProvider>
        </main>
      </body>
    </html>
  )
}
