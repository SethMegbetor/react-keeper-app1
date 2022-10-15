import { React } from "react"

const date = new Date().getFullYear

function Footer() {
  return (
    <footer>
      &copy; {date}
    </footer>
  )
}

export {Footer}