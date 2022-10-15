import { React } from "react"

const date = new Date().getFullYear()
console.log(date);

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {date}</p>
    </footer>
  )
}

export {Footer}