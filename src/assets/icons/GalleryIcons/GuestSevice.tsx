const GuestService = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        opacity="0.6"
        d="M24.9952 24.654C24.996 24.6476 24.9984 24.6416 24.9992 24.6352C25.0012 24.6108 24.9992 24.586 24.9968 24.5616C24.996 24.5536 24.9972 24.5452 24.996 24.5372C24.9924 24.5136 24.984 24.4908 24.976 24.4676C24.9732 24.4592 24.972 24.4504 24.9688 24.442L24.9684 24.4408C24.9684 24.4404 24.9684 24.44 24.968 24.4396L24.96 24.4208L22.7151 19.1824C22.5759 18.8576 22.3027 18.612 21.9647 18.508L21.9427 18.5012C21.9379 18.4996 21.9343 18.4968 21.9295 18.4952L16.1021 16.674L15.4612 15.072L17.3085 12.8552C17.3677 12.784 17.4005 12.6936 17.4005 12.6V11H17.8005C18.4621 11 19.0006 10.4616 19.0006 9.8V8.2C19.0006 7.5384 18.4621 7 17.8005 7H17.4005V6.6C17.4005 6.5948 17.3977 6.5904 17.3973 6.5852C17.3973 6.5796 17.3997 6.5748 17.3993 6.5692L16.9993 1.3692C16.9833 1.1608 16.8093 1 16.6005 1H9.40021C9.1914 1 9.01739 1.1608 9.00139 1.3692L8.60138 6.5692C8.60098 6.5748 8.60338 6.5796 8.60338 6.5852C8.60298 6.5904 8.60018 6.5948 8.60018 6.6V7H8.20016C7.53854 7 7.00012 7.5384 7.00012 8.2V9.8C7.00012 10.4616 7.53854 11 8.20016 11H8.60018V12.6C8.60018 12.6936 8.63298 12.784 8.69298 12.856L10.5334 15.0648L9.80342 16.7048L4.07161 18.496C3.7044 18.6108 3.41238 18.8968 3.30358 19.2288L1.0331 24.4404C0.979495 24.564 0.991496 24.7068 1.0655 24.8192C1.1391 24.932 1.26511 25 1.39991 25H24.6008C24.6344 25 24.6676 24.9956 24.6992 24.9876C24.7124 24.9844 24.724 24.9776 24.7368 24.9728C24.7548 24.966 24.7736 24.9608 24.7904 24.952C24.8068 24.9432 24.8212 24.9304 24.8364 24.9192C24.8476 24.9108 24.86 24.9044 24.8704 24.8952C24.89 24.8776 24.9064 24.8564 24.922 24.8348C24.926 24.8296 24.9312 24.8256 24.9348 24.82C24.9348 24.8196 24.9352 24.8196 24.9356 24.8192C24.9512 24.7952 24.9628 24.7692 24.9728 24.7432C24.9744 24.7392 24.9772 24.7356 24.9788 24.7312C24.9872 24.706 24.9916 24.68 24.9952 24.654ZM11.2091 15.5144L12.8515 16.1712C12.8995 16.1904 12.9499 16.2 13.0003 16.2C13.0507 16.2 13.1011 16.1904 13.1491 16.1716L14.778 15.52L15.3 16.8256L13.0003 18.1392L10.6411 16.7912L11.2091 15.5144ZM13.4004 20.1016V18.832L15.844 17.436L16.2225 17.5624L13.4004 20.1016ZM10.1038 17.4536L12.6003 18.836V20.102L9.77822 17.5624L10.1038 17.4536ZM17.8005 7.8C18.0213 7.8 18.2005 7.9796 18.2005 8.2V9.8C18.2005 10.0204 18.0213 10.2 17.8005 10.2H17.4005V7.8H17.8005ZM16.5717 6.2404L13.4004 6.554V1.8H14.6004V5H15.4004V1.8H16.2301L16.5717 6.2404ZM10.6003 1.8V5H11.4003V1.8H12.6003V6.558L9.42901 6.2408L9.77062 1.8H10.6003ZM8.20016 10.2C7.97975 10.2 7.80015 10.0204 7.80015 9.8V8.2C7.80015 7.9796 7.97975 7.8 8.20016 7.8H8.60018V10.2H8.20016ZM9.40021 7.0424L12.9151 7.398C12.9283 7.3996 12.9419 7.4 12.9551 7.4C12.9683 7.4 12.9815 7.3996 12.9947 7.398C13.0099 7.3984 13.0251 7.3996 13.0403 7.398L16.6005 7.042V12.4552L14.758 14.666L13.0003 15.3692L11.2427 14.666L9.40021 12.4552V7.0424ZM4.05001 19.5148C4.09041 19.3932 4.18761 19.298 4.31002 19.2596L8.88139 17.8312L12.2039 20.8212L8.88539 21.8168C8.71618 21.8676 8.60018 22.0236 8.60018 22.2V24.2H2.01033L4.05001 19.5148ZM9.40021 24.2V22.4976L13.1151 21.3832C13.1195 21.382 13.1223 21.378 13.1263 21.3768C13.1351 21.374 13.1435 21.3712 13.1523 21.3676C13.1555 21.3664 13.1595 21.3668 13.1627 21.3652C13.2007 21.3484 13.2343 21.3256 13.2643 21.2992C13.2651 21.2984 13.2667 21.298 13.2675 21.2972L17.0993 17.8488L21.6955 19.2628C21.8147 19.302 21.9103 19.3956 21.9627 19.548L23.9903 24.2H9.40021Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </svg>
  )
}

export default GuestService
