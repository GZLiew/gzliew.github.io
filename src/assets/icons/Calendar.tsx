import React from "react"

const Calendar = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g opacity="0.5">
        <path
          d="M13.2748 0H3.72477C2.86886 0 2.048 0.340009 1.44279 0.945227C0.837567 1.55045 0.497559 2.3713 0.497559 3.22721V12.3428C0.497559 13.1987 0.837567 14.0196 1.44279 14.6248C2.048 15.23 2.86886 15.57 3.72477 15.57H13.2748C14.1307 15.57 14.9516 15.23 15.5568 14.6248C16.162 14.0196 16.502 13.1987 16.502 12.3428V3.22721C16.502 2.3713 16.162 1.55045 15.5568 0.945227C14.9516 0.340009 14.1307 0 13.2748 0ZM3.72477 1.48948H13.2748C13.7357 1.48948 14.1777 1.67256 14.5036 1.99845C14.8295 2.32434 15.0125 2.76633 15.0125 3.22721V4.96493H1.98704V3.22721C1.98704 2.76633 2.17012 2.32434 2.49601 1.99845C2.82189 1.67256 3.26389 1.48948 3.72477 1.48948ZM13.2748 14.0806H3.72477C3.26389 14.0806 2.82189 13.8975 2.49601 13.5716C2.17012 13.2457 1.98704 12.8037 1.98704 12.3428V6.45193H15.0125V12.3428C15.0125 12.8037 14.8295 13.2457 14.5036 13.5716C14.1777 13.8975 13.7357 14.0806 13.2748 14.0806Z"
          fill="inherit"
        />
        <path
          d="M4.90148 3.908C5.099 3.908 5.28842 3.82953 5.42809 3.68987C5.56776 3.5502 5.64622 3.36077 5.64622 3.16326V3.04162C5.64622 2.8441 5.56776 2.65467 5.42809 2.515C5.28842 2.37534 5.099 2.29688 4.90148 2.29688C4.70396 2.29688 4.51453 2.37534 4.37487 2.515C4.2352 2.65467 4.15674 2.8441 4.15674 3.04162V3.16326C4.15674 3.36077 4.2352 3.5502 4.37487 3.68987C4.51453 3.82953 4.70396 3.908 4.90148 3.908Z"
          fill="inherit"
        />
        <path
          d="M12.0958 3.908C12.2933 3.908 12.4828 3.82953 12.6224 3.68987C12.7621 3.5502 12.8406 3.36077 12.8406 3.16326V3.04162C12.8406 2.8441 12.7621 2.65467 12.6224 2.515C12.4828 2.37534 12.2933 2.29688 12.0958 2.29688C11.8983 2.29688 11.7089 2.37534 11.5692 2.515C11.4295 2.65467 11.3511 2.8441 11.3511 3.04162V3.16326C11.3511 3.36077 11.4295 3.5502 11.5692 3.68987C11.7089 3.82953 11.8983 3.908 12.0958 3.908Z"
          fill="inherit"
        />
      </g>
    </svg>
  )
}

export default Calendar
