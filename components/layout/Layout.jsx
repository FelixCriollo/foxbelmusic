import { AsideNav } from "../aside"
import { Header } from "../header"
import { Container, Content } from "./Layout.style"

export const Layout = ({ children }) => {
  return (
    <Container>
      <AsideNav />
      
      <Content>
        <Header />
        <main>
          {children}
        </main>
      </Content>
    </Container>
  )
}