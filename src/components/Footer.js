import React from 'react'

export const Footer = () => {
    let footerStyle = {
        height: "70px",
        lineHeight: "70px",
    }
  return (
    <footer className="footer bg-dark text-light" style={footerStyle}>
        <p className="text-center">&copy;todo list</p>
    </footer>
  )
}
