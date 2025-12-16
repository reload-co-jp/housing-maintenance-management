"use client"

import { FC } from "react"
import Link from "next/link"

export const Header: FC = () => {
  return (
    <header
      style={{
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "space-between",
        padding: ".5rem",
        position: "relative",
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          margin: 0,
        }}
      >
        公共賃貸住宅維持管理
      </Link>
      <p
        aria-hidden="true"
        style={{
          fontSize: ".75rem",
          cursor: "pointer",
        }}
        onClick={() => {}}
      >
        設定
      </p>
    </header>
  )
}
