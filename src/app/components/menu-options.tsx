import Image from "next/image";
import Link from "next/link";

export default function MenuOptions({
  projectId,
  onDelete,
  device
}: {
  projectId: string;
  onDelete: () => void;
  device: string
}) {
  return (
    <div className={`globo-container-${device}`}>
      <div className={`globo-${device}`}>
        <Link
          className="flex items-center w-full border-b border-gray p-2 cursor-pointer"
          href={`/projects/${projectId}/edit`}
        >
          <Image src={"/assets/edit.svg"} alt="edit" width={25} height={25} />
          <span className="text-sm mx-2">Edit</span>
        </Link>
        <div className="flex items-center w-full p-2 cursor-pointer" onClick={onDelete}>
          <Image src={"/assets/delete.svg"} alt="edit" width={25} height={25} />
          <span className="text-sm mx-2">Delete</span>
        </div>
      </div>
    </div>
  );
}
