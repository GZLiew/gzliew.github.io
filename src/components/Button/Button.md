Button:
```tsx padded
<Button bgColor="pink">hello</Button>
```

Button with height and max width
```tsx padded
<Button height="40px" maxWidth={`100%`} variant="flat">
  Late Check Out is available
</Button>
```

Icon button
```tsx padded
import NotificationIcon from "@/assets/icons/wt-ic-notification.svg"
;<Button bgColor="white">
  <NotificationIcon />
</Button>
```
```tsx padded
import CloseIcon from "@/assets/icons/CloseIcon"
;<Button bgColor="white">
  <CloseIcon />
</Button>
```
