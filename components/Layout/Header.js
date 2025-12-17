"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link href="/" className="header__logo">
          <img src="/logo-perfuchic.png" alt="Logo de la empresa" />
        </Link>
      </div>
    </header>
  )
}
