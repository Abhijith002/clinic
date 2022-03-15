function Logo(props) {
  return (
    <a
      id="home"
      href="#"
      className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
      aria-label="logo"
    >
      {/* <svg
            width="95"
            height="94"
            viewBox="0 0 95 94"
            className="w-6 h-auto text-green-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
          </svg> */}
      <svg
        // width={189}
        // height={182}
        className="w-12 h-auto"
        viewBox="0 0 185 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // {...props}
      >
        <g filter="url(#a)" stroke="#fff" strokeWidth={3}>
          <path
            d="M178.5 86.5c0 46.889-39.566 85-88.5 85s-88.5-38.111-88.5-85 39.566-85 88.5-85 88.5 38.111 88.5 85Z"
            fill="#40A72F"
          />
          <path
            d="M162.848 90.26c0 42.735-36.062 77.479-80.674 77.479-44.612 0-80.674-34.744-80.674-77.478 0-42.735 36.062-77.478 80.674-77.478 44.612 0 80.674 34.743 80.674 77.478Z"
            fill="#2D6724"
          />
          <path
            d="M158.935 82.74c0 36.502-30.807 66.195-68.935 66.195s-68.935-29.693-68.935-66.196S51.872 16.544 90 16.544s68.935 29.692 68.935 66.195Z"
            fill="#fff"
          />
        </g>
        <path
          d="M105.46 104.247c-2.231-.957 3.408-1.154 7.125-2.989 3.718-1.836 8.21-5.382 8.21-5.382s3.872-2.919 7.59-5.83c3.718-2.91-9.914 5.98-14.251 7.923-4.337 1.943-8.054 3.289-12.701 3.289-3.098 0-6.816-5.68-9.45-8.222-1.912-1.846-3.872-4.335-5.73-6.726-1.86-2.392-6.661-6.428-8.52-9.118-1.859-2.691 9.246 3.288 14.25 4.932 7.281 2.392 16.73 4.186 20.602 4.186 3.873 0 8.21 0 13.941-1.794 3.363-1.053 8.948-4.45 11.927-7.324 8.52-8.222 5.71-11.51 6.661-8.67.951 2.84-.377 9.417-1.549 13.602-1.172 4.186-4.362 7.923-6.97 10.912-2.609 2.99-6.351 6.03-10.069 8.222-3.717 2.192-8.209 4.633-12.392 4.633-4.182 0-5.886-.448-8.674-1.644Z"
          fill="#68A379"
        />
        <path
          d="M67.18 73.767c-7.312-2.511-17.659-1.793-23.08 3.737-3.243 3.308 0 3.731 1.549 5.381 1.549 1.65 3.342 3.737 5.111 5.083 1.77 1.345 4.647 4.334 11.308 7.772 6.66 3.439 19.563 7.026 15.645 6.129-3.919-.897-6.97 0-13.631-2.69-6.66-2.691-11.463-7.026-11.463-7.026s-4.423-3.438-8.52-7.623c-4.095-4.186-5.575-3.887-6.195 0-.62 3.886-.62 11.21 2.014 17.339 2.633 6.129 4.182 9.355 9.603 14.948 5.422 5.593 7.745 6.278 12.547 9.268 4.802 2.989 15.955 5.298 22.925 5.53 6.97.232 15.025-2.242 18.898-4.036 3.872-1.793 9.294-5.305 15.18-10.762 5.886-5.457 9.603-10.314 9.603-10.314s6.351-7.325 1.549-4.634c-4.801 2.691-6.35 4.634-12.082 5.83-5.731 1.196-10.158.747-16.729-3.887-6.57-4.633-12.85-13.453-16.419-17.19-3.569-3.737-8.674-9.716-17.813-12.855Z"
          fill="#86CF85"
        />
        <ellipse cx={45} cy={53.482} rx={6.506} ry={6.278} fill="#432020" />
        <path
          d="m58.167 63.796-7.9-7.025-6.66 1.494c6.66 7.923 6.66 7.624 6.66 7.624l4.492 4.634h5.112s2.168 0 6.66 1.494c-2.943-3.288-8.364-8.22-8.364-8.22Z"
          fill="#432020"
        />
        <path
          d="m58.167 63.796-7.9-7.025-6.66 1.494c6.66 7.923 6.66 7.624 6.66 7.624l4.492 4.634h5.112s2.168 0 6.66 1.494c-2.943-3.288-8.364-8.22-8.364-8.22Z"
          stroke="#C29D9D"
        />
        <path
          d="M93.714 69.53c.548-1.234-2.83-1.028-4.925-2.674-2.078-1.633-2.637-2.289-3.92-3.793l-.033-.04c-1.167-1.37-1.256-4.913-.724-6.11.718-1.618 3.384.123 3.384.123s1.919.686 3.069 2.067c-1-1.802-2.836-5.69-1.997-7.578.908-2.044 4.382.937 5.669 2.17-1.39-1.557-1.208-2.753-.656-3.995.585-1.317 3.383 1.328 3.6 2.906.215 1.578-.103-1.318.562-2.815.665-1.497 2.377-2.773 2.692-.729.315 2.044 1.413-2.322 2.704-1.788 1.291.534-1.136 4.28.459 3.096 1.596-1.183 1.642.948 1.052 2.278a7.486 7.486 0 0 1-1.085 1.721l.473-.344c2.435-.836 4.747.152 4.067 1.682-.472 1.063-3.55 2.103-4.455 2.385.114-.033.271-.077.475-.133 1.914-.524 6.467-.798 5.551 2.296-.915 3.095-8.329 4.99-6.521 4.533 1.808-.457 7.515.627 6.585 2.723-.931 2.096-4.795 3.191-6.537 3.534-1.742.343-5.57-.532-7.055-1.146-1.485-.614-.068-.879-2.434-.369Z"
          fill="#96F39F"
        />
        <path
          d="m92.544 72.165 1.17-2.635m0 0c.548-1.234-2.83-1.028-4.925-2.674-2.096-1.647-2.647-2.3-3.953-3.832-1.167-1.37-1.256-4.914-.724-6.112.718-1.617 3.384.124 3.384.124s2.535.906 3.523 2.733c.989 1.826-3.701-5.43-2.451-8.244s7.362 3.896 5.939 2.456c-1.682-1.7-1.511-2.964-.926-4.28.585-1.318 3.383 1.328 3.6 2.905.215 1.578-.103-1.318.562-2.815.665-1.497 2.377-2.773 2.692-.729.315 2.044 1.413-2.322 2.704-1.788 1.291.534-1.136 4.28.459 3.096 1.596-1.183 1.642.948 1.052 2.278-1.144 2.575-3.817 3.95-1.854 2.281l1.242-.904c2.435-.836 4.747.152 4.067 1.682-.68 1.53-6.764 3.015-3.98 2.252 1.914-.524 6.467-.798 5.551 2.296-.915 3.095-8.329 4.99-6.521 4.533 1.808-.457 7.515.627 6.585 2.723-.931 2.096-4.795 3.191-6.537 3.534-1.742.343-5.57-.532-7.055-1.146-1.485-.614-.068-.879-2.434-.369Z"
          stroke="#559C5C"
        />
        <path
          d="M93.2 77.827c1.072-.521-.854-1.386-.926-2.9-.072-1.502.046-2.025.317-3.226l.007-.03c.246-1.094 2.442-3.07 3.483-3.576 1.405-.683 1.721 1.048 1.721 1.048s.586.934.323 2.029c.609-1.283 2.094-3.956 3.735-4.753 1.776-.862 1.736 1.786 1.641 2.838.246-1.26 1.1-1.866 2.179-2.39 1.145-.556.958 1.712.075 2.644-.884.932.779-.756 2.08-1.387 1.301-.632 3.02-.838 1.894.378-1.127 1.217 2.22-.869 2.569-.2.348.668-3.313 2.027-1.716 1.838 1.597-.19.273.998-.882 1.559-.577.28-1.158.487-1.666.634l.469-.053c1.823.245 2.427 1.46 1.097 2.105-.923.448-3.218.13-3.877.022l.336.065c1.349.266 3.944 1.435 1.498 2.873-2.445 1.44-7.587.335-6.336.607 1.251.272 3.599 2.523 1.777 3.408-1.821.884-4.569.368-5.712.052-1.143-.317-2.625-1.908-3.026-2.677-.4-.768.52-.503-1.06-.908Z"
          fill="#238F2E"
        />
        <path
          d="m90.91 78.939 2.29-1.112m0 0c1.072-.521-.854-1.386-.926-2.9-.072-1.515.048-2.034.324-3.257.246-1.093 2.442-3.07 3.483-3.575 1.405-.683 1.721 1.048 1.721 1.048s.774 1.234.143 2.527c-.63 1.292 1.469-4.063 3.915-5.25 2.446-1.189 1.449 4.279 1.603 3.073.182-1.423 1.072-2.07 2.217-2.626s.958 1.712.075 2.644c-.884.932.779-.756 2.08-1.387 1.301-.632 3.02-.838 1.894.378-1.127 1.217 2.22-.869 2.569-.2.348.668-3.313 2.027-1.716 1.838 1.597-.19.273.998-.882 1.559-2.238 1.087-4.53 1.069-2.43.719l1.233-.138c1.823.245 2.427 1.46 1.097 2.105-1.329.646-5.504-.3-3.541.087 1.349.266 3.944 1.435 1.498 2.873-2.445 1.44-7.587.335-6.336.607 1.251.272 3.599 2.523 1.777 3.408-1.821.884-4.569.368-5.712.052-1.143-.317-2.625-1.908-3.026-2.677-.4-.768.52-.503-1.06-.908Z"
          stroke="#559C5C"
        />
        <path
          d="M88.45 75.466c-.473-1.065-1.485.738-3.056.716-1.557-.023-2.091-.168-3.316-.501l-.032-.009c-1.116-.303-3.028-2.539-3.487-3.572-.62-1.395 1.189-1.594 1.189-1.594s1.001-.507 2.117-.188c-1.29-.664-3.964-2.257-4.689-3.886-.785-1.763 1.953-1.564 3.035-1.408-1.289-.314-1.863-1.173-2.34-2.245-.505-1.136 1.83-.818 2.74.09.91.907-.735-.798-1.31-2.09-.574-1.29-.683-2.959.507-1.8s-.764-2.192-.052-2.487c.713-.295 1.896 3.314 1.797 1.764-.098-1.55 1.05-.202 1.56.945a9.71 9.71 0 0 1 .554 1.643l-.026-.455c.364-1.742 1.657-2.25 2.244-.93.408.917-.061 3.108-.212 3.737.02-.078.049-.183.087-.32.357-1.283 1.723-3.712 3.063-1.269 1.34 2.443-.114 7.328.243 6.14.357-1.188 2.829-3.313 3.633-1.505.804 1.808.104 4.423-.293 5.505-.396 1.082-2.132 2.413-2.952 2.752-.819.34-.489-.53-1.004.967Z"
          fill="#238F2E"
        />
        <path
          d="m89.462 77.74-1.012-2.274m0 0c-.473-1.065-1.485.738-3.056.716-1.57-.023-2.1-.17-3.348-.51-1.116-.303-3.028-2.539-3.487-3.572-.62-1.395 1.189-1.594 1.189-1.594s1.323-.67 2.622.015c1.298.686-4.114-1.66-5.194-4.089-1.08-2.428 4.514-1.136 3.277-1.357-1.461-.262-2.076-1.159-2.582-2.296-.505-1.136 1.83-.818 2.74.09.91.907-.735-.798-1.31-2.09-.574-1.29-.683-2.959.507-1.8s-.764-2.192-.052-2.487c.713-.295 1.896 3.314 1.797 1.764-.098-1.55 1.05-.202 1.56.945.988 2.221.83 4.428.596 2.384l-.068-1.196c.364-1.742 1.657-2.25 2.244-.93.587 1.32-.644 5.284-.125 3.417.357-1.283 1.723-3.712 3.063-1.269 1.34 2.443-.114 7.328.243 6.14.357-1.188 2.829-3.313 3.633-1.505.804 1.808.104 4.423-.293 5.505-.396 1.082-2.132 2.413-2.952 2.752-.819.34-.489-.53-1.004.967Z"
          stroke="#559C5C"
        />
        <defs>
          <filter
            id="a"
            x={0}
            y={0}
            width={189}
            height={182}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={5} dy={5} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_14_30"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_14_30"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      Ayurveda
    </a>
  );
}

export default Logo;