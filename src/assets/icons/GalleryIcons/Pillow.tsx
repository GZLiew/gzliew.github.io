const Pillow = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g opacity="0.6">
        <path
          d="M23.562 6.02619C23.5106 5.89362 23.4265 5.77622 23.3176 5.68491C23.2086 5.59361 23.0783 5.53138 22.9388 5.50402C18.2066 4.56366 13.6929 2.74389 9.6318 0.139126C9.5135 0.0611097 9.37743 0.0142043 9.23618 0.00275405C9.09494 -0.00869624 8.95308 0.0156786 8.82376 0.0736216C8.69444 0.131565 8.58183 0.221202 8.49636 0.334234C8.41089 0.447266 8.35532 0.580037 8.3348 0.720253C7.90823 3.39641 7.05518 5.98683 5.80816 8.3928C4.21051 8.30383 2.62072 8.10687 1.04966 7.80326C0.904245 7.7663 0.751594 7.76886 0.607498 7.81067C0.463402 7.85249 0.333093 7.93204 0.230047 8.04109C0.127 8.15015 0.0549584 8.28476 0.0213721 8.43099C-0.0122142 8.57722 -0.0061257 8.72977 0.039008 8.87286C0.927086 12.6393 0.927086 16.5606 0.039008 20.327C0.00842889 20.4657 0.0134283 20.6098 0.0535412 20.7461C0.0936541 20.8824 0.167577 21.0063 0.268434 21.1063C0.369292 21.2063 0.493806 21.2792 0.630396 21.3182C0.766986 21.3571 0.911213 21.3609 1.04966 21.3292C5.78075 20.4396 10.6362 20.4396 15.3673 21.3292H15.5357C15.6656 21.333 15.7946 21.3067 15.9126 21.2524C16.0306 21.1981 16.1344 21.1172 16.216 21.016C16.2976 20.9149 16.3546 20.7963 16.3827 20.6694C16.4108 20.5426 16.4092 20.4109 16.3779 20.2848C16.1024 19.1502 15.9166 17.9956 15.8221 16.8318C16.5211 17.2192 17.1949 17.615 17.8265 18.0277C17.9448 18.1057 18.0809 18.1526 18.2221 18.1641C18.3634 18.1755 18.5052 18.1512 18.6346 18.0932C18.7639 18.0353 18.8765 17.9456 18.962 17.8326C19.0474 17.7196 19.103 17.5868 19.1235 17.4466C19.7291 13.6189 21.2138 9.98361 23.4609 6.82629C23.5434 6.71202 23.5958 6.5789 23.6134 6.43912C23.6311 6.29934 23.6134 6.15736 23.562 6.02619ZM8.22531 18.9794C6.1329 18.9761 4.04345 19.1366 1.9761 19.4595C2.55873 16.2375 2.55873 12.9371 1.9761 9.71508C3.37108 9.93188 4.77686 10.0725 6.18716 10.1362C8.95674 10.2769 11.7335 10.1358 14.4745 9.71508C14.1377 11.5705 13.9966 13.4562 14.0534 15.3411C14.0534 15.3411 14.0534 15.3916 14.0534 15.4169C14.0872 16.7845 14.228 18.1475 14.4745 19.4932C12.4081 19.1591 10.3186 18.9873 8.22531 18.9794ZM17.6749 15.9474C17.0517 15.5685 16.3948 15.2147 15.721 14.861C15.6881 12.8453 15.9088 10.8335 16.3779 8.87286C16.412 8.73493 16.4107 8.59061 16.374 8.45334C16.3373 8.31606 16.2665 8.1903 16.1682 8.08774C16.0698 7.98519 15.9472 7.90919 15.8115 7.86681C15.6759 7.82443 15.5318 7.81706 15.3925 7.84537C12.8366 8.33209 10.2371 8.55225 7.63576 8.50229C8.59408 6.51434 9.31221 4.41932 9.77498 2.2615C13.3765 4.40235 17.2848 5.97873 21.3638 6.93578C19.6076 9.69613 18.3583 12.7479 17.6749 15.9474ZM5.35337 12.0143C5.99843 13.695 5.98338 15.5576 5.31126 17.2276C5.20851 17.4286 5.03011 17.5806 4.8153 17.6501C4.60049 17.7196 4.36688 17.7009 4.16585 17.5982C3.96482 17.4954 3.81283 17.317 3.74334 17.1022C3.67384 16.8874 3.69252 16.6538 3.79527 16.4528C4.26443 15.1839 4.24944 13.7866 3.75316 12.5281C3.71777 12.423 3.70342 12.312 3.71093 12.2014C3.71844 12.0907 3.74767 11.9827 3.79694 11.8834C3.84621 11.784 3.91456 11.6954 3.99809 11.6225C4.08161 11.5496 4.17869 11.4938 4.28376 11.4585C4.38883 11.4231 4.49984 11.4087 4.61046 11.4162C4.72107 11.4237 4.82913 11.453 4.92845 11.5022C5.02777 11.5515 5.11642 11.6199 5.18933 11.7034C5.26223 11.7869 5.31797 11.884 5.35337 11.989V12.0143Z"
          fill="white"
        />
      </g>
    </svg>
  )
}

export default Pillow
