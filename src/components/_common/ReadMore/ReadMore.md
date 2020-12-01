ReadMore

```tsx
import RichTextField from "@/components/RichTextField"
const dataAbout = `{"type":"doc","content":[{"type":"paragraph","content":[{"text":"The Grade I-listed building was designed by Sir Edwin De Pfeiffer in 1924. Each bedroom at Stonyhurt features elements of design specific to the 1920's and 1930’s and includes vintage pieces, richly patterned furnishings and rainforest showers.  --","type":"text"}]},{"type":"paragraph","content":[{"text":"Melbourne's most exciting hotel. A glamorous architecture, grandeur spaces and a relaxed atmosphere. Something to discover at every corner from the rooftop to the basement. Time-honoured classic and modern cocktails. Attentive staff. Stonyhurt is different.","type":"text"}]}]}`
;
<ReadMore>
  <RichTextField data={JSON.parse(dataAbout)} />
</ReadMore>
```
