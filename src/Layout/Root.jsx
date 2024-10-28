import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Root = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <Outlet></Outlet>
    </div>
  )
}

export default Root
