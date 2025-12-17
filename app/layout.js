import "../styles/main.scss"
import "./globals.css"
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"

export const metadata = {
  title: "Perfuchic - Diagnóstico Capilar",
  description: "Descubrí tu tipo de cabello y recibí recomendaciones personalizadas para tu rutina capilar.",
  generator: 'v0.app',
  icons: {
    icon: "/favicon-perfuchic.png",
    shortcut: "/favicon-perfuchic.png",
    apple: "/favicon-perfuchic.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="app-container">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
