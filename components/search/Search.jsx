import { useState } from "react"
import { Form, Input, Button } from "./Search.style"
import { useRouter } from "next/router"

export function Search() {
  const [value, setValue] = useState("")

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push({ pathname:`/search/[search]`, query: {search: value}})
  }

  const handleKeyUp = (e) => setValue(e.target.value)

  return (
    <Form
      onSubmit={handleSubmit}
      onChange={handleKeyUp}
    >
      <Input type="text" placeholder="Buscar..."/>

      <Button>
        <img src="/lupa.png" alt="search artist/song"/>
      </Button>
    </Form>
  )
}
