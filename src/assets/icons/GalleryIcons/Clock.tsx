const Clock = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="inherit" fillRule="evenodd">
        <g fillRule="nonzero">
          <path d="M6.453 11.275c.123 0 .247-.048.34-.142l2.195-2.215.001-.001c.006-.006.008-.013.013-.02.036-.04.069-.085.09-.136.019-.046.025-.095.03-.144 0-.013.007-.025.007-.038V4.064c0-.265-.214-.48-.48-.48-.265 0-.48.215-.48.48v4.318l-2.057 2.075c-.186.189-.185.493.003.68.094.091.215.138.338.138zM1.031 3.49L3.692.829c.188-.187.188-.491 0-.679-.188-.187-.49-.187-.679 0L.353 2.81c-.188.188-.188.491 0 .68.093.093.216.14.339.14.123 0 .245-.047.339-.14zM17.016 2.877l-2.66-2.66c-.188-.188-.492-.188-.68 0-.187.188-.187.491 0 .679l2.662 2.66c.093.093.216.14.34.14.122 0 .245-.047.338-.14.188-.188.188-.492 0-.679z" />
          <path d="M14.402 14.124c1.432-1.48 2.252-3.469 2.252-5.545 0-4.415-3.591-8.005-8.006-8.005h-.063C4.207.605.645 4.196.645 8.579c0 2.075.823 4.065 2.258 5.546C1.467 15.608.644 17.597.644 19.671c0 .265.215.48.48.48h15.06c.265 0 .48-.215.48-.48 0-.034-.004-.067-.01-.099-.025-2.042-.843-3.992-2.252-5.448zM8.174 1.557v.663c0 .264.215.48.48.48.266 0 .48-.216.48-.48v-.662c3.492.24 6.287 3.03 6.535 6.518h-.685c-.265 0-.48.216-.48.48 0 .265.215.48.48.48h.686c-.118 1.807-.924 3.513-2.267 4.736-.279.256-.575.486-.91.704-1.009.662-2.161 1.048-3.36 1.13v-.631c0-.265-.214-.48-.48-.48-.265 0-.48.215-.48.48v.631c-1.201-.08-2.358-.466-3.367-1.129-.34-.225-.635-.456-.907-.708-1.34-1.218-2.146-2.913-2.27-4.708h.625c.266 0 .48-.215.48-.48s-.214-.48-.48-.48h-.626c.237-3.498 3.048-6.311 6.546-6.544zM1.62 19.19c.115-1.654.816-3.224 1.974-4.415.031.026.066.05.097.076l.101.079c.154.118.313.234.485.348 1.302.854 2.813 1.306 4.371 1.306h.008c1.556-.002 3.066-.453 4.363-1.304.223-.146.43-.3.629-.459.02-.015.043-.03.063-.046 1.154 1.189 1.853 2.759 1.967 4.416H1.62z" />
        </g>
        <circle cx="14" cy="10" r="5" opacity=".1" />
      </g>
    </svg>
  )
}

export default Clock
