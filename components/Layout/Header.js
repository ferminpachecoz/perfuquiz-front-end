"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link href="/" className="header__logo">
          Perfuchic <span>Diagnóstico Capilar</span>
        </Link>
      </div>
    </header>
  )
}
