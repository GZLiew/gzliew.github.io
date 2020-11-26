CheckList

```tsx
const data = [
  { id: "02312", title: "Tempur Pillow" },
  { id: "1", title: "Micro-gel Pillow" },
  { id: "2", title: "Latex Pillow" },
  { id: "3", title: "Feather - firm Pillow " },
  { id: "4", title: "Honey Chilli Potato" },
  { id: "5", title: "Exotic Veg Thai Style" },
  { id: "6", title: "Mushroom & Babycorn Schezwan" },
  { id: "7", title: "Veg Starter" },
]
;
<CheckList
  items={data}
  onChange={(changes) => console.log(changes)}
  limit={2}
  errorMsg="Limit of 2 items only"
/>
```
