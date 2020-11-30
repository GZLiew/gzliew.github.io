LoadingOverlay

```tsx
import React from "react"
import Button from "@/components/_common/Button"
import LoadingIndicator from "@/components/_common/LoadingIndicator"
const [isOpen, setIsOpen] = React.useState(false)
;
<>
  <Button onClick={() => setIsOpen(true)}>Toggle</Button>
  <Overlay isOpen={isOpen} onOverlayClick={() => setIsOpen(false)}>
    <LoadingIndicator size="lg" />
  </Overlay>
</>
```
