HotelFacility

```tsx
import HotelFacility from './'
const amenities = `[{"_uid":"23d40f80-a92b-412a-9621-15205e8ce476","name":"Free Wifi","iconName":"wifi","component":"scrolling_icon"},{"_uid":"e12f7fb0-3e82-447e-9367-bd2b76c7a0ae","name":"Free Parking","iconName":"parking","component":"scrolling_icon"},{"_uid":"8ba9c0f9-85e2-4dfd-8957-e36e3171cf92","name":"Conference Room","iconName":"conferenceRoom","component":"scrolling_icon"},{"_uid":"96a47e0f-3910-4ff9-bbdd-116937800d1e","name":"Elevator/ Lift","iconName":"elevator","component":"scrolling_icon"}]` 
const categoriesCount = 28
;
<HotelFacility amenities={JSON.parse(amenities)} categoriesCount={categoriesCount} />
```