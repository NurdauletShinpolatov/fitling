export function ArrowDownIcon({ color = "#282828" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 9L12 15L5 9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ color = "#fff" }) {
  return (
    <svg
      width="24"
      height="13"
      viewBox="0 0 24 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.75 7.22222H5.25C4.83 7.22222 4.5 6.90444 4.5 6.49999C4.5 6.09555 4.83 5.77777 5.25 5.77777H18.75C19.17 5.77777 19.5 6.09555 19.5 6.49999C19.5 6.90444 19.17 7.22222 18.75 7.22222Z"
        fill={color}
      />
      <path
        d="M15 12.2778C14.9016 12.279 14.8041 12.2603 14.7137 12.223C14.6233 12.1856 14.542 12.1305 14.475 12.0611C14.175 11.7722 14.175 11.3245 14.475 11.0356L19.2 6.48558L14.475 1.93558C14.175 1.64669 14.175 1.19891 14.475 0.910026C14.775 0.621137 15.24 0.621137 15.54 0.910026L20.79 5.96558C21.09 6.25447 21.09 6.70225 20.79 6.99114L15.54 12.0467C15.39 12.1911 15.195 12.2634 15.015 12.2634L15 12.2778Z"
        fill={color}
      />
    </svg>
  );
}
