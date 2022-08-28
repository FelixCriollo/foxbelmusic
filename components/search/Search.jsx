import { Form, Input, Button } from "./Search.style"

export function Search() {
  return (
    <Form>
      <Input type="text" placeholder="Buscar..."/>

      <Button>
        <img src="/lupa.png" alt="search artist/song"/>
      </Button>
    </Form>
  )
}
