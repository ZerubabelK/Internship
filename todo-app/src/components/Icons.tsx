import React from "react";

const DeleteIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="red"
        d="M19 6h-4L13.414.414A2 2 0 0 0 11.343 0H8.657a2 2 0 0 0-1.414.414L5 6H1v2h22V6z"
      />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  );
};

const EditIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="blue"
        d="M18.71 5.29a1 1 0 0 0-1.42 0L14 8.59V7a1 1 0 0 0-2 0v4a1 1 0 0 0 .29.71l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42l-3-3zM4 15v2h16v-2H4z"
      />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  );
};
export { DeleteIcon, EditIcon };
