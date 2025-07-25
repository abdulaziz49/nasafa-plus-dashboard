import {useRef} from "react";

export default function ErrorMessageModal() {
    const closeBtnRef = useRef(null)

    return (
        <>
            <button className="btn" onClick={() => {
                // @ts-expect-error showModal Not recognizable
                closeBtnRef.current!.showModal();
            }}>open modal
            </button>
            <dialog ref={closeBtnRef} id="error-modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog" className="modal-backdrop">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}