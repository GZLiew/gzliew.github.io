### Standard Buttons

Small

```tsx padded
import { useTheme } from "@emotion/react"

const theme = useTheme();

<div style={{ background: theme.colors.bodyBackground, padding: 20 }}>
  <Button size="small">small</Button>
</div>
```

Medium

```tsx padded
import { useTheme } from "@emotion/react"

const theme = useTheme();

<div style={{ background: theme.colors.bodyBackground, padding: 20 }}>
  <Button size="medium">medium</Button>
</div>
```

Large

```tsx padded
import { useTheme } from "@emotion/react"

const theme = useTheme();

<div style={{ background: theme.colors.bodyBackground, padding: 20 }}>
  <Button size="large">large</Button>
</div>
```

### Button With Icon

medium

```tsx padded
import NextIcon from "@/assets/icons/NextIcon"
import { useTheme } from "@emotion/react"

const theme = useTheme();

<div style={{ background: theme.colors.bodyBackground, padding: 20 }}>
<Button size="medium" withIcon>
  Select <NextIcon fill="currentColor"/>
</Button>
</div>
```

large

```tsx padded
import NextIcon from "@/assets/icons/NextIcon"
import { useTheme } from "@emotion/react"

const theme = useTheme();

<div style={{ background: theme.colors.bodyBackground, padding: 20 }}>
<Button size="large" withIcon>
  Select <NextIcon fill="currentColor"/>
</Button>
</div>
```

small and flat

```tsx padded

import { useTheme } from "@emotion/react"

const theme = useTheme();

<div style={{ background: theme.colors.bodyBackground, padding: 20 }}>
<Button raised={false} size="small" variant="flat" withIcon>
  Edit <span>&#9998;</span>
</Button>
</div>
```

### Other Button Variations

```tsx padded
import { useTheme } from "@emotion/react"

const theme = useTheme();

<div style={{ background: theme.colors.bodyBackground, padding: 20 }}>
<Button raised={false} size="small" variant="flat">
  flat
</Button>
</div>
```

```tsx padded
import { useTheme } from "@emotion/react"

const theme = useTheme();

<div style={{ background: theme.colors.bodyBackground, padding: 20 }}>
<Button raised={false} size="medium" variant="flat" outline>
  outline
</Button>
</div>
```

```tsx padded
import { useTheme } from "@emotion/react"

const theme = useTheme();

<div style={{ background: theme.colors.bodyBackground, padding: 20 }}>
<Button size="medium" disabled>
  disabled
</Button>
</div>
```
