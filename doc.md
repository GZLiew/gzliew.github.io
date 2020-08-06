# Storyblok

Storyblok is the CMS where the hotels can edit their app content and common configuration. Hotels refrain to the **Content** section.

## Content

This is where all the content and configuration resides on a hotel space. It consists of:

### Hotel Configuration

Change common configuration shared across the app

| Config Option   | Description                  | Possible Values |
| --------------- | ---------------------------- | --------------- |
| Theme           | Choose the theme for the app | light \| dark   |
| Hotel Logo      | Select a logo image          | text            |
| Hotel Name      | Name of the Hotel            | text            |
| Primary Color   | Stub                         | Hex color code  |
| Secondary Color | Stub                         | Hex color code  |

### Layout

Manage the Sidebar navigation links

#### Navigation

All changes in this component are visible when opening the sidebar on the Storyblok editor preview. Navigation links can be added, edited or deleted here.

##### Link

| Field     | Description                            | Possible Values                                    |
| --------- | -------------------------------------- | -------------------------------------------------- |
| Title     | Navigation Link title                  | text                                               |
| URL       | Internal link or external URL          | Internal Link: List of pages \| External URL: text |
| Icon Name | Select from a predefined list of icons | _Icon List_                                        |

##### Icon List:

- Beverages
- Facilities
- Food
- Home
- Hotel Information
- Laundry
- Logout
- My Orders
- Report a Problem
- Room Service
- Weather
- Guest Directory

### Home

Manage content inside the Home page

| Field                  | Description                         | Possible Values |
| ---------------------- | ----------------------------------- | --------------- |
| Primary Welcome Text   |                                     | text            |
| Secondary Welcome Text |                                     | text            |
| Modules                | Add-on Modules                      | _Modules List_  |
| Quick buttons          | Navigation buttons for quick access | _Quick Button_  |

#### Modules List:

- Weather
- Cart
- Home Popup
- Toaster

#### Quick Button:

| Field | Description | Possible Values |
| --- | --- | --- |
| Text | Button text | text |
| Link | Internal link or external URL | Internal Link: List of pages \| External URL: text |
| Icon Name | Select from a predefined list of icons | _Icon List_ |
| Background Color | Color for the button | _Color List_ |

### Hotel Information

Manage the content of the Hotel Information page.

| Field               | Description                                   | Possible Values                   |
| ------------------- | --------------------------------------------- | --------------------------------- |
| Hotel Photos        | Manage all the photos of the hotel.           | Image file                        |
| Hotel Rating        | Rating in stars                               | Star Number & Total Stars number  |
| Location            | Specify the city where's the hotel is located | City name & lat, long coordinates |
| Welcome Text        |                                               | text                              |
| About section       | General information about the Hotel           | Rich text                         |
| Scrolling Icons     | Manage all hotel highlights                   | Name & Icon name                  |
| Categories          | Manage all hotel details                      | _Category_                        |
| Sub Category Popup  |                                               |
| Review              |                                               | text                              |
| Missing Information |                                               | text                              |

#### CROPPING PHOTOS \*VERY IMPORTANT*
To crop a photo added inside Hotel Photos, click the image preview and a crop window will appear. There are several available presets: **Original** with free crop, **16x9** for landscape crop, **2x3** for portrait crop, and **1x1** for square crop.

#### Category

Title: text

**Sub Sections:**

| Field       | Description                                                      | Possible Values |
| ----------- | ---------------------------------------------------------------- | --------------- |
| Title       | Subsection title                                                 | text            |
| Description | Subsection description                                           | Rich Text       |
| Icon        | _Optional_ Subsection Icon                                       | Asset           |
| Is Dropdown | _Optional_ Make Subsection a dropdown with collapsed description | Checkmark       |


