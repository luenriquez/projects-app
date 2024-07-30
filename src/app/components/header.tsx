import Image from "next/image";
import { useRouter } from "next/navigation";

export interface HeaderProps {
  title: string;
  showGoBack?: boolean;
  actions?: React.ReactNode;
}

export default function Header({ title, showGoBack, actions }: HeaderProps) {
  const router = useRouter();
  return (
    <div className="w-full flex justify-between lg:px-10 px-3 items-center border border-gray py-1">
      <div className="flex">
        {showGoBack && (
          <button className="flex mr-3" onClick={() => router.back()}>
            <Image
              width={25}
              height={25}
              src="/assets/arrow-left-line.svg"
              alt="Go back"
            />
            Back
          </button>
        )}
        <h1 className="font-bold text-lg">{title}</h1>
      </div>
      <div>{actions}</div>
    </div>
  );
}
