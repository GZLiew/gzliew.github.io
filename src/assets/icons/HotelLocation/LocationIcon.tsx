import React from 'react'

const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.61663818 15.6771738C13.157196 9.09472006 14 8.41915291 14 6c0-3.31372262-2.6862793-6-6-6S2 2.68627738 2 6c0 2.41915291.84280396 3.09472006 5.38336182 9.6771738.29794311.4304197.93530273.4304502 1.23327636 0zM8 8.4999975c-1.38070679 0-2.5-1.11929599-2.5-2.5 0-1.38070759 1.11929321-2.5 2.5-2.5s2.5 1.11929241 2.5 2.5c0 1.38070401-1.11929321 2.5-2.5 2.5z"
        fill="#E1245E"
        fillRule="nonzero"
      />
    </svg>
  )
}

export default LocationIcon
