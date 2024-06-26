import { useState } from "preact/hooks"
export const ModalDelete = ({id, name, handleClickDelete}) => {
    const [isClick, setClick] = useState(false)

    const handleClick = async () => {
        handleClickDelete(id)
        setClick(true)
    }

    return (
        <>
            <button 
                className="btn btn-error btn-sm flex justify-center items-center" 
                onClick={()=>document.getElementById(`my_modal_delete_${id}`).showModal()}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="w-4 h-4"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" 
                    />
                </svg>
                Borrar
            </button>
            <dialog id={`my_modal_delete_${id}`} className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="py-4">
                    {
                        isClick ? "Borraste este medicamento"
                        : ( <span>Estas a punto de <strong>borrar</strong> este medicamento</span> )
                    } 
                </p>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-warning btn-sm">
                            {isClick ? "Cerrar" : "Cancelar"}
                        </button>
                    </form>
                    <button 
                        className={`btn btn-success btn-sm ${isClick ? "hidden" : "inline-flex"}`}
                        onClick={handleClick}
                    >
                        Continuar
                    </button>
                </div>
            </div>
            </dialog>
        </>
    )
}