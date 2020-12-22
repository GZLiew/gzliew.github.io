CheckList

```tsx
const data = [
  { id: "02312", label: "Tempur Pillow" },
  { id: "1", label: "Micro-gel Pillow" },
  { id: "2", label: "Latex Pillow" },
  { id: "3", label: "Feather - firm Pillow " },
  { id: "4", label: "Honey Chilli Potato" },
  { id: "5", label: "Exotic Veg Thai Style" },
  { id: "6", label: "Mushroom & Babycorn Schezwan" },
  { id: "7", label: "Veg Starter" },
]
;
<div style={{ background: "linear-gradient(180deg, #EAEAEA 0%, #CED1D5 100%)", padding: "10px" }}>
  <CheckList
    items={data}
    onChange={(changes) => console.log(changes)}
    limit={4}
    errorMsg="Limit of 4 items only"
  />
</div>
```
