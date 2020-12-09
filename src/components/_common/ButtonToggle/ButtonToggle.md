ButtonToggle

```tsx padded
import { useState } from "react"
import { useTheme } from "@emotion/react"
const [activeButton, setActiveButton] = useState("1")

const theme = useTheme();

<div style={{ background: theme.colors.bodyBackground, padding: 20 }}>
<ButtonToggle
  onClick={(item) => setActiveButton(item.id)}
  activeItem={activeButton}
  items={[
    { id: "1", label: "Yes" },
    { id: "2", label: "No" }
  ]}
/>
</div>
```

```tsx padded
import { useState } from "react"
import { useTheme } from "@emotion/react"
const [activeButton, setActiveButton] = useState("1")

const theme = useTheme();

<div style={{ background: theme.colors.bodyBackground, padding: 20 }}>
<ButtonToggle
  round
  onClick={(item) => setActiveButton(item.id)}
  activeItem={activeButton}
  items={[
    { id: "1", label: "1" },
    { id: "2", label: "2" },
    { id: "3", label: "3" },
    { id: "4", label: "4+" }
  ]}
/>
</div>
```

```tsx padded
import { useState } from "react"
import { useTheme } from "@emotion/react"
const [activeButton, setActiveButton] = useState("1")

const theme = useTheme();

<div style={{ background: theme.colors.bodyBackground, padding: 20 }}>
<ButtonToggle
  outlineColor={theme.button.notAnimatedBg}
  wrapperBgColor={theme.button.notAnimatedBg}
  onClick={(item) => setActiveButton(item.id)}
  activeItem={activeButton}
  items={[
    { id: "1", label: "Today" },
    { id: "2", label: "Tomorrow" },
  ]}
/>
</div>
```
