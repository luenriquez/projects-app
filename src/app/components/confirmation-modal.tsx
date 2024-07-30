export interface ConfirmationModalProps {
  show: boolean;
  title: string;
  onCancel: () => void;
  onSubmit: () => void;
}

export default function ConfirmationModal({
  show,
  title,
  onCancel,
  onSubmit,
}: ConfirmationModalProps) {
    return(
        <div className="relative w-full h-full z-40 flex justify-center items-center">
            {show && (
                <div className="absolute md:w-full lg:w-1/4 border border-gray z-50 bg-white">
                    <h1 className="text-center text-lg py-4">{title}</h1>
                    <div className="flex justify-center my-4">
                        <button className="mx-2 border border-black py-1 px-2 rounded-md" onClick={onCancel}>Cancel</button>
                        <button className="mx-2 py-1 px-2 rounded-md  bg-primary text-white" onClick={onSubmit}>Confirm</button>
                    </div>
                </div>
            )}
        </div>
    )
}
