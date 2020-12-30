const Valet = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="33"
      height="30"
      viewBox="0 0 33 30"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}>
      <g opacity="0.6">
        <mask
          id="path-1-outside-1"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="33"
          height="30"
          fill="black">
          <rect fill="inherit" width="33" height="30" />
          <path d="M1.54972 27.3866H4.48743C4.71461 28.0298 5.13564 28.5866 5.69251 28.9805C6.24938 29.3744 6.9147 29.5859 7.59679 29.5859C8.27889 29.5859 8.9442 29.3744 9.50107 28.9805C10.0579 28.5866 10.479 28.0298 10.7062 27.3866H19.1408V29.0358C19.1408 29.1816 19.1987 29.3214 19.3018 29.4245C19.4049 29.5276 19.5447 29.5855 19.6905 29.5855H21.8894C22.0352 29.5855 22.175 29.5276 22.2781 29.4245C22.3812 29.3214 22.4391 29.1816 22.4391 29.0358V27.3866H23.7277C23.983 28.1093 24.482 28.7205 25.1391 29.1151C25.7961 29.5098 26.5701 29.6632 27.328 29.5491C28.0859 29.435 28.7804 29.0604 29.2921 28.4898C29.8038 27.9192 30.1008 27.1882 30.1319 26.4223L32.4922 25.7146C32.6055 25.6806 32.7047 25.6109 32.7753 25.516C32.8458 25.4211 32.8839 25.306 32.8838 25.1877V20.79C32.8838 20.6693 32.8441 20.552 32.7708 20.4562C32.6976 20.3604 32.5948 20.2913 32.4784 20.2596L26.4843 18.6247L23.9021 17.3336C23.4459 17.1064 22.948 16.9751 22.4391 16.9477V12.5441C22.5849 12.5441 22.7247 12.4862 22.8278 12.3831C22.9309 12.28 22.9888 12.1402 22.9888 11.9944V10.3453H24.5006C24.8285 10.3449 25.1429 10.2144 25.3748 9.98257C25.6066 9.75069 25.7371 9.43631 25.7375 9.10839V2.23687C25.7371 1.90895 25.6066 1.59457 25.3748 1.36269C25.1429 1.13082 24.8285 1.00038 24.5006 1H17.144C16.8161 1.00038 16.5017 1.13082 16.2698 1.36269C16.038 1.59457 15.9075 1.90895 15.9071 2.23687V9.10839C15.9075 9.43631 16.038 9.75069 16.2698 9.98257C16.5017 10.2144 16.8161 10.3449 17.144 10.3453H18.5911V11.9944C18.5911 12.1402 18.649 12.28 18.7521 12.3831C18.8552 12.4862 18.995 12.5441 19.1408 12.5441V16.9419H16.5054C15.6185 16.9427 14.7456 17.1627 13.9644 17.5825L7.95865 20.8165C7.53756 20.8998 5.5699 21.2896 4.13582 21.5772C3.557 21.6915 3.01219 21.9372 2.54344 22.2955C2.0747 22.6537 1.69458 23.115 1.43243 23.6435L1.41985 23.6686C1.14342 24.2172 0.999613 24.8231 1 25.4374V26.8369C1 26.9827 1.05792 27.1225 1.16101 27.2256C1.2641 27.3287 1.40393 27.3866 1.54972 27.3866ZM7.59665 28.4861C7.16176 28.4861 6.73662 28.3571 6.37502 28.1155C6.01342 27.8739 5.73158 27.5304 5.56515 27.1287C5.39872 26.7269 5.35518 26.2847 5.44002 25.8582C5.52487 25.4317 5.73429 25.0398 6.04181 24.7323C6.34933 24.4248 6.74113 24.2154 7.16767 24.1305C7.59422 24.0457 8.03634 24.0892 8.43813 24.2557C8.83993 24.4221 9.18334 24.7039 9.42496 25.0655C9.66658 25.4271 9.79554 25.8523 9.79554 26.2872C9.79489 26.8702 9.56301 27.4291 9.15078 27.8413C8.73855 28.2535 8.17963 28.4854 7.59665 28.4861ZM21.3397 28.4861H20.2402V27.3866H21.3397V28.4861ZM26.8369 28.4861C26.402 28.4861 25.9769 28.3571 25.6153 28.1155C25.2537 27.8739 24.9718 27.5304 24.8054 27.1287C24.639 26.7269 24.5954 26.2847 24.6803 25.8582C24.7651 25.4317 24.9745 25.0398 25.282 24.7323C25.5896 24.4248 25.9814 24.2154 26.4079 24.1305C26.8345 24.0457 27.2766 24.0892 27.6784 24.2557C28.0802 24.4221 28.4236 24.7039 28.6652 25.0655C28.9068 25.4271 29.0358 25.8523 29.0358 26.2872C29.0351 26.8702 28.8032 27.4291 28.391 27.8413C27.9788 28.2535 27.4199 28.4854 26.8369 28.4861ZM23.4104 18.317L25.3389 19.2812C24.198 20.2584 22.7443 20.7938 21.242 20.79H19.6905V18.0414H22.2427C22.648 18.0418 23.0477 18.1362 23.4104 18.317ZM19.6905 11.4447V10.3453H21.8894V11.4447H19.6905ZM21.3397 12.5441V16.9419H20.2402V12.5441H21.3397ZM17.144 9.24582C17.1076 9.24582 17.0726 9.23134 17.0468 9.20557C17.0211 9.17979 17.0066 9.14484 17.0066 9.10839V2.23687C17.0066 2.20042 17.0211 2.16547 17.0468 2.13969C17.0726 2.11392 17.1076 2.09944 17.144 2.09944H24.5006C24.537 2.09944 24.572 2.11392 24.5978 2.13969C24.6235 2.16547 24.638 2.20042 24.638 2.23687V9.10839C24.638 9.14484 24.6235 9.17979 24.5978 9.20557C24.572 9.23134 24.537 9.24582 24.5006 9.24582H17.144ZM14.4856 18.5506C15.1066 18.2169 15.8005 18.0419 16.5054 18.0414H18.5911V20.79H10.3268L14.4856 18.5506ZM2.09944 25.4379C2.09924 24.9941 2.20317 24.5565 2.40289 24.1602L2.41546 24.1352C2.60323 23.7566 2.87552 23.4263 3.21129 23.1696C3.54705 22.913 3.93731 22.737 4.35193 22.6552C5.82181 22.3604 7.85193 21.9583 8.19997 21.8894H21.2421C23.1919 21.8947 25.0644 21.1272 26.4495 19.7549L31.7844 21.2098V24.7787L29.9895 25.3172C29.7573 24.5622 29.2619 23.9157 28.5933 23.4951C27.9248 23.0745 27.1275 22.9077 26.3465 23.0252C25.5654 23.1426 24.8524 23.5364 24.3371 24.1351C23.8218 24.7337 23.5385 25.4973 23.5386 26.2872H10.895C10.895 25.4124 10.5475 24.5735 9.92893 23.9549C9.31037 23.3363 8.47143 22.9888 7.59665 22.9888C6.72188 22.9888 5.88294 23.3363 5.26439 23.9549C4.64583 24.5735 4.29833 25.4124 4.29833 26.2872H2.09944V25.4379Z" />
        </mask>
        <path
          d="M1.54972 27.3866H4.48743C4.71461 28.0298 5.13564 28.5866 5.69251 28.9805C6.24938 29.3744 6.9147 29.5859 7.59679 29.5859C8.27889 29.5859 8.9442 29.3744 9.50107 28.9805C10.0579 28.5866 10.479 28.0298 10.7062 27.3866H19.1408V29.0358C19.1408 29.1816 19.1987 29.3214 19.3018 29.4245C19.4049 29.5276 19.5447 29.5855 19.6905 29.5855H21.8894C22.0352 29.5855 22.175 29.5276 22.2781 29.4245C22.3812 29.3214 22.4391 29.1816 22.4391 29.0358V27.3866H23.7277C23.983 28.1093 24.482 28.7205 25.1391 29.1151C25.7961 29.5098 26.5701 29.6632 27.328 29.5491C28.0859 29.435 28.7804 29.0604 29.2921 28.4898C29.8038 27.9192 30.1008 27.1882 30.1319 26.4223L32.4922 25.7146C32.6055 25.6806 32.7047 25.6109 32.7753 25.516C32.8458 25.4211 32.8839 25.306 32.8838 25.1877V20.79C32.8838 20.6693 32.8441 20.552 32.7708 20.4562C32.6976 20.3604 32.5948 20.2913 32.4784 20.2596L26.4843 18.6247L23.9021 17.3336C23.4459 17.1064 22.948 16.9751 22.4391 16.9477V12.5441C22.5849 12.5441 22.7247 12.4862 22.8278 12.3831C22.9309 12.28 22.9888 12.1402 22.9888 11.9944V10.3453H24.5006C24.8285 10.3449 25.1429 10.2144 25.3748 9.98257C25.6066 9.75069 25.7371 9.43631 25.7375 9.10839V2.23687C25.7371 1.90895 25.6066 1.59457 25.3748 1.36269C25.1429 1.13082 24.8285 1.00038 24.5006 1H17.144C16.8161 1.00038 16.5017 1.13082 16.2698 1.36269C16.038 1.59457 15.9075 1.90895 15.9071 2.23687V9.10839C15.9075 9.43631 16.038 9.75069 16.2698 9.98257C16.5017 10.2144 16.8161 10.3449 17.144 10.3453H18.5911V11.9944C18.5911 12.1402 18.649 12.28 18.7521 12.3831C18.8552 12.4862 18.995 12.5441 19.1408 12.5441V16.9419H16.5054C15.6185 16.9427 14.7456 17.1627 13.9644 17.5825L7.95865 20.8165C7.53756 20.8998 5.5699 21.2896 4.13582 21.5772C3.557 21.6915 3.01219 21.9372 2.54344 22.2955C2.0747 22.6537 1.69458 23.115 1.43243 23.6435L1.41985 23.6686C1.14342 24.2172 0.999613 24.8231 1 25.4374V26.8369C1 26.9827 1.05792 27.1225 1.16101 27.2256C1.2641 27.3287 1.40393 27.3866 1.54972 27.3866ZM7.59665 28.4861C7.16176 28.4861 6.73662 28.3571 6.37502 28.1155C6.01342 27.8739 5.73158 27.5304 5.56515 27.1287C5.39872 26.7269 5.35518 26.2847 5.44002 25.8582C5.52487 25.4317 5.73429 25.0398 6.04181 24.7323C6.34933 24.4248 6.74113 24.2154 7.16767 24.1305C7.59422 24.0457 8.03634 24.0892 8.43813 24.2557C8.83993 24.4221 9.18334 24.7039 9.42496 25.0655C9.66658 25.4271 9.79554 25.8523 9.79554 26.2872C9.79489 26.8702 9.56301 27.4291 9.15078 27.8413C8.73855 28.2535 8.17963 28.4854 7.59665 28.4861ZM21.3397 28.4861H20.2402V27.3866H21.3397V28.4861ZM26.8369 28.4861C26.402 28.4861 25.9769 28.3571 25.6153 28.1155C25.2537 27.8739 24.9718 27.5304 24.8054 27.1287C24.639 26.7269 24.5954 26.2847 24.6803 25.8582C24.7651 25.4317 24.9745 25.0398 25.282 24.7323C25.5896 24.4248 25.9814 24.2154 26.4079 24.1305C26.8345 24.0457 27.2766 24.0892 27.6784 24.2557C28.0802 24.4221 28.4236 24.7039 28.6652 25.0655C28.9068 25.4271 29.0358 25.8523 29.0358 26.2872C29.0351 26.8702 28.8032 27.4291 28.391 27.8413C27.9788 28.2535 27.4199 28.4854 26.8369 28.4861ZM23.4104 18.317L25.3389 19.2812C24.198 20.2584 22.7443 20.7938 21.242 20.79H19.6905V18.0414H22.2427C22.648 18.0418 23.0477 18.1362 23.4104 18.317ZM19.6905 11.4447V10.3453H21.8894V11.4447H19.6905ZM21.3397 12.5441V16.9419H20.2402V12.5441H21.3397ZM17.144 9.24582C17.1076 9.24582 17.0726 9.23134 17.0468 9.20557C17.0211 9.17979 17.0066 9.14484 17.0066 9.10839V2.23687C17.0066 2.20042 17.0211 2.16547 17.0468 2.13969C17.0726 2.11392 17.1076 2.09944 17.144 2.09944H24.5006C24.537 2.09944 24.572 2.11392 24.5978 2.13969C24.6235 2.16547 24.638 2.20042 24.638 2.23687V9.10839C24.638 9.14484 24.6235 9.17979 24.5978 9.20557C24.572 9.23134 24.537 9.24582 24.5006 9.24582H17.144ZM14.4856 18.5506C15.1066 18.2169 15.8005 18.0419 16.5054 18.0414H18.5911V20.79H10.3268L14.4856 18.5506ZM2.09944 25.4379C2.09924 24.9941 2.20317 24.5565 2.40289 24.1602L2.41546 24.1352C2.60323 23.7566 2.87552 23.4263 3.21129 23.1696C3.54705 22.913 3.93731 22.737 4.35193 22.6552C5.82181 22.3604 7.85193 21.9583 8.19997 21.8894H21.2421C23.1919 21.8947 25.0644 21.1272 26.4495 19.7549L31.7844 21.2098V24.7787L29.9895 25.3172C29.7573 24.5622 29.2619 23.9157 28.5933 23.4951C27.9248 23.0745 27.1275 22.9077 26.3465 23.0252C25.5654 23.1426 24.8524 23.5364 24.3371 24.1351C23.8218 24.7337 23.5385 25.4973 23.5386 26.2872H10.895C10.895 25.4124 10.5475 24.5735 9.92893 23.9549C9.31037 23.3363 8.47143 22.9888 7.59665 22.9888C6.72188 22.9888 5.88294 23.3363 5.26439 23.9549C4.64583 24.5735 4.29833 25.4124 4.29833 26.2872H2.09944V25.4379Z"
          fill="inherit"
        />
        <path
          d="M1.54972 27.3866H4.48743C4.71461 28.0298 5.13564 28.5866 5.69251 28.9805C6.24938 29.3744 6.9147 29.5859 7.59679 29.5859C8.27889 29.5859 8.9442 29.3744 9.50107 28.9805C10.0579 28.5866 10.479 28.0298 10.7062 27.3866H19.1408V29.0358C19.1408 29.1816 19.1987 29.3214 19.3018 29.4245C19.4049 29.5276 19.5447 29.5855 19.6905 29.5855H21.8894C22.0352 29.5855 22.175 29.5276 22.2781 29.4245C22.3812 29.3214 22.4391 29.1816 22.4391 29.0358V27.3866H23.7277C23.983 28.1093 24.482 28.7205 25.1391 29.1151C25.7961 29.5098 26.5701 29.6632 27.328 29.5491C28.0859 29.435 28.7804 29.0604 29.2921 28.4898C29.8038 27.9192 30.1008 27.1882 30.1319 26.4223L32.4922 25.7146C32.6055 25.6806 32.7047 25.6109 32.7753 25.516C32.8458 25.4211 32.8839 25.306 32.8838 25.1877V20.79C32.8838 20.6693 32.8441 20.552 32.7708 20.4562C32.6976 20.3604 32.5948 20.2913 32.4784 20.2596L26.4843 18.6247L23.9021 17.3336C23.4459 17.1064 22.948 16.9751 22.4391 16.9477V12.5441C22.5849 12.5441 22.7247 12.4862 22.8278 12.3831C22.9309 12.28 22.9888 12.1402 22.9888 11.9944V10.3453H24.5006C24.8285 10.3449 25.1429 10.2144 25.3748 9.98257C25.6066 9.75069 25.7371 9.43631 25.7375 9.10839V2.23687C25.7371 1.90895 25.6066 1.59457 25.3748 1.36269C25.1429 1.13082 24.8285 1.00038 24.5006 1H17.144C16.8161 1.00038 16.5017 1.13082 16.2698 1.36269C16.038 1.59457 15.9075 1.90895 15.9071 2.23687V9.10839C15.9075 9.43631 16.038 9.75069 16.2698 9.98257C16.5017 10.2144 16.8161 10.3449 17.144 10.3453H18.5911V11.9944C18.5911 12.1402 18.649 12.28 18.7521 12.3831C18.8552 12.4862 18.995 12.5441 19.1408 12.5441V16.9419H16.5054C15.6185 16.9427 14.7456 17.1627 13.9644 17.5825L7.95865 20.8165C7.53756 20.8998 5.5699 21.2896 4.13582 21.5772C3.557 21.6915 3.01219 21.9372 2.54344 22.2955C2.0747 22.6537 1.69458 23.115 1.43243 23.6435L1.41985 23.6686C1.14342 24.2172 0.999613 24.8231 1 25.4374V26.8369C1 26.9827 1.05792 27.1225 1.16101 27.2256C1.2641 27.3287 1.40393 27.3866 1.54972 27.3866ZM7.59665 28.4861C7.16176 28.4861 6.73662 28.3571 6.37502 28.1155C6.01342 27.8739 5.73158 27.5304 5.56515 27.1287C5.39872 26.7269 5.35518 26.2847 5.44002 25.8582C5.52487 25.4317 5.73429 25.0398 6.04181 24.7323C6.34933 24.4248 6.74113 24.2154 7.16767 24.1305C7.59422 24.0457 8.03634 24.0892 8.43813 24.2557C8.83993 24.4221 9.18334 24.7039 9.42496 25.0655C9.66658 25.4271 9.79554 25.8523 9.79554 26.2872C9.79489 26.8702 9.56301 27.4291 9.15078 27.8413C8.73855 28.2535 8.17963 28.4854 7.59665 28.4861ZM21.3397 28.4861H20.2402V27.3866H21.3397V28.4861ZM26.8369 28.4861C26.402 28.4861 25.9769 28.3571 25.6153 28.1155C25.2537 27.8739 24.9718 27.5304 24.8054 27.1287C24.639 26.7269 24.5954 26.2847 24.6803 25.8582C24.7651 25.4317 24.9745 25.0398 25.282 24.7323C25.5896 24.4248 25.9814 24.2154 26.4079 24.1305C26.8345 24.0457 27.2766 24.0892 27.6784 24.2557C28.0802 24.4221 28.4236 24.7039 28.6652 25.0655C28.9068 25.4271 29.0358 25.8523 29.0358 26.2872C29.0351 26.8702 28.8032 27.4291 28.391 27.8413C27.9788 28.2535 27.4199 28.4854 26.8369 28.4861ZM23.4104 18.317L25.3389 19.2812C24.198 20.2584 22.7443 20.7938 21.242 20.79H19.6905V18.0414H22.2427C22.648 18.0418 23.0477 18.1362 23.4104 18.317ZM19.6905 11.4447V10.3453H21.8894V11.4447H19.6905ZM21.3397 12.5441V16.9419H20.2402V12.5441H21.3397ZM17.144 9.24582C17.1076 9.24582 17.0726 9.23134 17.0468 9.20557C17.0211 9.17979 17.0066 9.14484 17.0066 9.10839V2.23687C17.0066 2.20042 17.0211 2.16547 17.0468 2.13969C17.0726 2.11392 17.1076 2.09944 17.144 2.09944H24.5006C24.537 2.09944 24.572 2.11392 24.5978 2.13969C24.6235 2.16547 24.638 2.20042 24.638 2.23687V9.10839C24.638 9.14484 24.6235 9.17979 24.5978 9.20557C24.572 9.23134 24.537 9.24582 24.5006 9.24582H17.144ZM14.4856 18.5506C15.1066 18.2169 15.8005 18.0419 16.5054 18.0414H18.5911V20.79H10.3268L14.4856 18.5506ZM2.09944 25.4379C2.09924 24.9941 2.20317 24.5565 2.40289 24.1602L2.41546 24.1352C2.60323 23.7566 2.87552 23.4263 3.21129 23.1696C3.54705 22.913 3.93731 22.737 4.35193 22.6552C5.82181 22.3604 7.85193 21.9583 8.19997 21.8894H21.2421C23.1919 21.8947 25.0644 21.1272 26.4495 19.7549L31.7844 21.2098V24.7787L29.9895 25.3172C29.7573 24.5622 29.2619 23.9157 28.5933 23.4951C27.9248 23.0745 27.1275 22.9077 26.3465 23.0252C25.5654 23.1426 24.8524 23.5364 24.3371 24.1351C23.8218 24.7337 23.5385 25.4973 23.5386 26.2872H10.895C10.895 25.4124 10.5475 24.5735 9.92893 23.9549C9.31037 23.3363 8.47143 22.9888 7.59665 22.9888C6.72188 22.9888 5.88294 23.3363 5.26439 23.9549C4.64583 24.5735 4.29833 25.4124 4.29833 26.2872H2.09944V25.4379Z"
          stroke="currentColor"
          strokeWidth="0.2"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M14.1933 24.6885H15.8424C16.0015 24.6885 16.154 24.6253 16.2665 24.5129C16.379 24.4004 16.4422 24.2478 16.4422 24.0888C16.4422 23.9297 16.379 23.7772 16.2665 23.6647C16.154 23.5522 16.0015 23.4891 15.8424 23.4891H14.1933C14.0342 23.4891 13.8817 23.5522 13.7692 23.6647C13.6567 23.7772 13.5936 23.9297 13.5936 24.0888C13.5936 24.2478 13.6567 24.4004 13.7692 24.5129C13.8817 24.6253 14.0342 24.6885 14.1933 24.6885Z"
          fill="inherit"
          stroke="currentColor"
          strokeWidth="0.1"
        />
        <path
          d="M7.59649 24.5887H7.59643C7.26037 24.5887 6.93185 24.6883 6.65243 24.875C6.373 25.0617 6.15521 25.3271 6.02661 25.6376C5.898 25.9481 5.86435 26.2897 5.92992 26.6193C5.99548 26.9489 6.15731 27.2517 6.39494 27.4893C6.63257 27.727 6.93533 27.8888 7.26494 27.9544C7.59455 28.0199 7.93619 27.9863 8.24667 27.8577C8.55715 27.7291 8.82253 27.5113 9.00923 27.2318C9.19594 26.9524 9.29559 26.6239 9.29559 26.2878V26.2878C9.29509 25.8373 9.11591 25.4054 8.79738 25.0869C8.47884 24.7684 8.04696 24.5892 7.59649 24.5887ZM7.59637 26.7876C7.49756 26.7875 7.40096 26.7582 7.3188 26.7033C7.23662 26.6484 7.17257 26.5704 7.13475 26.4791C7.09693 26.3878 7.08703 26.2873 7.10631 26.1903C7.12559 26.0934 7.17319 26.0044 7.24307 25.9345C7.31296 25.8646 7.402 25.817 7.49894 25.7977C7.59588 25.7784 7.69635 25.7883 7.78767 25.8262C7.87898 25.864 7.95702 25.928 8.01193 26.0102C8.06683 26.0924 8.09614 26.189 8.09615 26.2878C8.096 26.4203 8.0433 26.5473 7.94961 26.641C7.85591 26.7347 7.72888 26.7874 7.59637 26.7876Z"
          fill="inherit"
          stroke="currentColor"
          strokeWidth="0.1"
        />
        <path
          d="M26.8367 24.5887H26.8367C26.5006 24.5887 26.1721 24.6883 25.8927 24.875C25.6132 25.0617 25.3954 25.3271 25.2668 25.6376C25.1382 25.9481 25.1046 26.2897 25.1701 26.6193C25.2357 26.9489 25.3975 27.2517 25.6352 27.4893C25.8728 27.727 26.1756 27.8888 26.5052 27.9544C26.8348 28.0199 27.1764 27.9863 27.4869 27.8577C27.7974 27.7291 28.0628 27.5113 28.2495 27.2318C28.4362 26.9524 28.5358 26.6239 28.5358 26.2878V26.2878C28.5353 25.8373 28.3561 25.4054 28.0376 25.0869C27.7191 24.7684 27.2872 24.5892 26.8367 24.5887ZM26.8366 26.7876C26.7378 26.7875 26.6412 26.7582 26.559 26.7033C26.4769 26.6484 26.4128 26.5704 26.375 26.4791C26.3372 26.3878 26.3273 26.2873 26.3465 26.1903C26.3658 26.0934 26.4134 26.0044 26.4833 25.9345C26.5532 25.8646 26.6422 25.817 26.7392 25.7977C26.8361 25.7784 26.9366 25.7883 27.0279 25.8262C27.1192 25.864 27.1973 25.928 27.2522 26.0102C27.3071 26.0924 27.3364 26.189 27.3364 26.2878C27.3362 26.4203 27.2835 26.5473 27.1898 26.641C27.0961 26.7347 26.9691 26.7874 26.8366 26.7876Z"
          fill="inherit"
          stroke="currentColor"
          strokeWidth="0.1"
        />
        <path
          d="M20.2402 8.19671C20.3992 8.19671 20.5517 8.13353 20.6642 8.02106C20.7767 7.90859 20.8399 7.75604 20.8399 7.59699V6.54755H21.3396C21.7902 6.54755 22.2224 6.36853 22.5411 6.04987C22.8597 5.73122 23.0388 5.29903 23.0388 4.84838C23.0388 4.39774 22.8597 3.96555 22.5411 3.64689C22.2224 3.32824 21.7902 3.14922 21.3396 3.14922H20.2402C20.0811 3.14922 19.9286 3.2124 19.8161 3.32487C19.7036 3.43734 19.6404 3.58988 19.6404 3.74894V7.59699C19.6404 7.75604 19.7036 7.90859 19.8161 8.02106C19.9286 8.13353 20.0811 8.19671 20.2402 8.19671ZM20.8399 4.34866H21.3396C21.4721 4.34866 21.5992 4.40131 21.693 4.49503C21.7867 4.58874 21.8393 4.71585 21.8393 4.84838C21.8393 4.98092 21.7867 5.10802 21.693 5.20174C21.5992 5.29545 21.4721 5.3481 21.3396 5.3481H20.8399V4.34866Z"
          fill="inherit"
          stroke="currentColor"
          strokeWidth="0.1"
        />
      </g>
    </svg>
  )
}

export default Valet
