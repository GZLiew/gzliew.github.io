ButtonToggle

```tsx
import { useState } from "react"
const [activeButton, setActiveButton] = useState("1");

 <ButtonToggle 
    onClick={(item) => setActiveButton(item.id)}
    activeItem={activeButton}
    items={[
      {id: "1", label: "Yes"},
      {id: "2", label: "No"}
    ]} 
  />
```
