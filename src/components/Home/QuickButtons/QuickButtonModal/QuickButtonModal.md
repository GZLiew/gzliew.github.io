QuickButtonModal

```tsx
import useToggle from "@/lib/hooks/useToggle"
import useLockBodyScroll from "@/lib/hooks/useLockBodyScroll"
const [isActive, toggle] = useToggle(false)
const modalRef = React.useRef(null)
useLockBodyScroll(isActive, modalRef)
;(
  <>
    <button onClick={toggle}>toggle</button>
    {isActive && (
        <QuickButtonModal divRef={modalRef} closeModal={toggle}>
          <div>my content</div>
        </QuickButtonModal>
      )
    }
  </>
)
```
