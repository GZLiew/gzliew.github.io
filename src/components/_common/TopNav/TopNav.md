TopNav

```tsx
import React from "react"
import Button from "@/components/Button"
import ButtonTab from "@/components/_common/ButtonTab"

const [isOpen, setIsOpen] = React.useState()
const fakeItems = [
  {
    id: "sometandom12132",
    title: "Food"
  },
  {
    id: "alkdnc212321312",
    title: "Beverage"
  }
]
;<div>
  <TopNav isOpen={isOpen} handleNavbarClick={() => setIsOpen(false)}>
    {(callback) => (
      <>
        <div
          style={{
            padding: 10,
            fontWeight: "bold",
            fontSize: "1rem",
            textAlign: "center",
            borderBottomWidth: 1,
            borderColor: "#ddd"
          }}>
          In-Room Dining
        </div>
        <div
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column"
          }}>
          <div style={{ paddingBottom: 10, textAlign: "center", fontSize: "0.6rem", color: "#333" }}>
            CHOOSE CATEGORY
          </div>
          <div style={{ margin: "0 auto" }}>
            <ButtonTab
              items={fakeItems}
              initialIndex={1}
              onChange={(item) => {
                console.log(item)
              }}
            />
          </div>
        </div>
      </>
    )}
  </TopNav>
  <Button onClick={() => setIsOpen(true)}>Toggle Nav</Button>
</div>
```
