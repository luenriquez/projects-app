"use client";
export interface ButtonProps {
  onClick?: () => void;
  content: string | React.ReactNode;
  type?:  "submit" | "reset" | "button" | undefined;
}

export default function Button({ onClick, content, type }: ButtonProps) {
  return (
    <button
      className="bg-primary text-white rounded-md py-1 px-2"
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
}
