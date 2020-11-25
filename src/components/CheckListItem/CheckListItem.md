CheckListItem:

```tsx
import React from "react"
const [isSelected, setIsSelected] = React.useState(false)
;
<div style={{ background: "linear-gradient(180deg, #EAEAEA 0%, #CED1D5 100%)", padding: "10px" }}>
  <CheckListItem 
    label="Tempur Pillow" 
    selected={isSelected} 
    onClick={() => setIsSelected(prev => !prev)} 
  />
</div>
```
