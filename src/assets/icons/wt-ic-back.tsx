function BackButton(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <defs>
        <linearGradient id="prefix___a" x1="100%" x2="0%" y1="185.612%" y2="185.612%">
          <stop offset="0%" stopColor="#4F5357" />
          <stop offset="100%" stopColor="#76797D" />
        </linearGradient>
      </defs>
      <path
        fill="url(#prefix___a)"
        fillRule="evenodd"
        d="M14.796 4.974L10.332.218a.667.667 0 00-.986 0 .775.775 0 000 1.05l3.273 3.489H.697C.312 4.757 0 5.09 0 5.5s.312.743.697.743H12.62L9.346 9.731a.777.777 0 000 1.051.673.673 0 00.493.218.675.675 0 00.493-.218l4.464-4.756a.78.78 0 000-1.052z"
        transform="rotate(-180 10 8.5)"
      />
    </svg>
  )
}

export default BackButton
