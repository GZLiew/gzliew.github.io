Navbar

```tsx
import React from "react"
const [isOpen, setIsOpen] = React.useState(false)
;<>
  <button onClick={() => setIsOpen(true)}>toggle navbar</button>
  <Navbar
    isOpen={isOpen}
    guestPhoto={{ filename: "https://picsum.photos/200", name: "image" }}
    navLinks={[]}
    handleNavbarClick={() => setIsOpen(false)}
  />
</>
```
