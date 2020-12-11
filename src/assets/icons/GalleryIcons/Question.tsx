const Question = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g opacity="0.6">
        <path
          d="M11.5 0C9.22553 0 7.00212 0.674463 5.11095 1.9381C3.21978 3.20174 1.7458 4.99779 0.875391 7.09914C0.00498257 9.2005 -0.222756 11.5128 0.220975 13.7435C0.664705 15.9743 1.75997 18.0234 3.36828 19.6317C4.97658 21.24 7.02569 22.3353 9.25647 22.779C11.4873 23.2228 13.7995 22.995 15.9009 22.1246C18.0022 21.2542 19.7983 19.7802 21.0619 17.8891C22.3256 15.9979 23 13.7745 23 11.5C22.9968 8.45101 21.7841 5.52783 19.6282 3.37186C17.4722 1.21589 14.549 0.00324707 11.5 0ZM11.5 21.4667C9.52879 21.4667 7.60184 20.8821 5.96283 19.787C4.32381 18.6918 3.04636 17.1353 2.29201 15.3141C1.53765 13.4929 1.34028 11.489 1.72485 9.55561C2.10941 7.62226 3.05865 5.84637 4.45251 4.45251C5.84637 3.05864 7.62227 2.10941 9.55561 1.72484C11.489 1.34028 13.4929 1.53765 15.3141 2.292C17.1353 3.04636 18.6918 4.32381 19.787 5.96282C20.8821 7.60183 21.4667 9.52879 21.4667 11.5C21.4634 14.1423 20.4123 16.6755 18.5439 18.5439C16.6755 20.4123 14.1423 21.4634 11.5 21.4667Z"
          fill="inherit"
        />
        <path
          d="M11.4998 5.25586C10.4522 5.25667 9.4477 5.67298 8.70664 6.41346C7.96559 7.15394 7.5485 8.15813 7.54688 9.20573C7.54688 9.40906 7.62765 9.60407 7.77143 9.74784C7.91521 9.89162 8.11021 9.9724 8.31354 9.9724C8.51687 9.9724 8.71188 9.89162 8.85566 9.74784C8.99944 9.60407 9.08021 9.40906 9.08021 9.20573C9.08021 8.72718 9.22212 8.25937 9.48799 7.86147C9.75385 7.46357 10.1317 7.15344 10.5739 6.97031C11.016 6.78717 11.5025 6.73926 11.9719 6.83262C12.4412 6.92598 12.8723 7.15642 13.2107 7.49481C13.5491 7.8332 13.7796 8.26433 13.8729 8.73369C13.9663 9.20304 13.9184 9.68955 13.7352 10.1317C13.5521 10.5738 13.242 10.9517 12.8441 11.2176C12.4462 11.4834 11.9784 11.6253 11.4998 11.6253C11.2965 11.6253 11.1015 11.7061 10.9577 11.8499C10.8139 11.9937 10.7331 12.1887 10.7331 12.392V13.7536C10.7331 13.9569 10.8139 14.1519 10.9577 14.2957C11.1015 14.4395 11.2965 14.5203 11.4998 14.5203C11.7031 14.5203 11.8981 14.4395 12.0419 14.2957C12.1857 14.1519 12.2665 13.9569 12.2665 13.7536V13.0851C13.2278 12.8929 14.0834 12.3505 14.6672 11.563C15.251 10.7755 15.5214 9.79918 15.4259 8.82354C15.3303 7.84791 14.8757 6.94258 14.1502 6.2833C13.4247 5.62403 12.4801 5.25785 11.4998 5.25586Z"
          fill="inherit"
        />
        <path
          d="M12.208 16.6873C12.1894 16.6409 12.1657 16.5967 12.1374 16.5554C12.1099 16.5134 12.0781 16.4743 12.0424 16.4389C11.9531 16.3494 11.8432 16.2833 11.7223 16.2464C11.6014 16.2095 11.4733 16.203 11.3493 16.2273C11.251 16.249 11.1575 16.2885 11.0733 16.3438C11.0317 16.3719 10.9927 16.4038 10.9568 16.4389C10.9211 16.4743 10.8892 16.5134 10.8617 16.5554C10.8334 16.5967 10.8098 16.6409 10.7912 16.6873C10.7727 16.7329 10.7583 16.7802 10.7482 16.8284C10.7387 16.8779 10.7336 16.9282 10.7329 16.9786C10.7333 17.0291 10.7384 17.0794 10.7482 17.1289C10.7579 17.1782 10.7722 17.2265 10.7912 17.273C10.8098 17.3194 10.8334 17.3637 10.8617 17.4049C10.8892 17.447 10.9211 17.486 10.9568 17.5214C11.101 17.6648 11.2962 17.7453 11.4996 17.7453C11.5495 17.7515 11.5999 17.7515 11.6498 17.7453C11.6991 17.7352 11.7473 17.7209 11.794 17.7024C11.8401 17.6831 11.8842 17.6595 11.9258 17.6318C11.9675 17.6037 12.0065 17.5719 12.0424 17.5368C12.0781 17.5014 12.1099 17.4623 12.1374 17.4202C12.1657 17.379 12.1894 17.3348 12.208 17.2884C12.2269 17.2418 12.2413 17.1935 12.2509 17.1442C12.2556 17.0943 12.2556 17.0439 12.2509 16.994C12.2553 16.944 12.2553 16.8937 12.2509 16.8437C12.2418 16.7903 12.2274 16.7379 12.208 16.6873Z"
          fill="inherit"
        />
      </g>
    </svg>
  )
}

export default Question
