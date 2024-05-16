export const ModalEdit = ({
    id,  
    name,
    discomfort,
    time,
    schedules,
    observations,
    handleClickUpdate
  }) => {
  
    const handleSubmit = (e) => {
      handleClickUpdate(id, e)
    }
  
  
      return (
    
    <>
      <button
        className="btn btn-sm btn-warning"
        onClick={() => document.getElementById(`my_modal_edit_${id}`).showModal()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
        Editar
      </button>
      <dialog id={`my_modal_edit_${id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="py-4">Estás <strong>editado</strong> este medicamento</p>
          <form
          className="mt-4 space-y-3"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            placeholder="MEDICAMENTO"
            name="name"
            class="input input-bordered input-secondary w-full"
            value={name}
          />
          <input
            type="text"
            placeholder="MALESTAR"
            name="discomfort"
            class="input input-bordered input-secondary w-full"
            value={discomfort}
          />
          <input
            type="text"
            placeholder="TIEMPO"
            name="time"
            class="input input-bordered input-secondary w-full"
            value={time}
          />
          <input
            type="text"
            placeholder="HORARIOS"
            name="schedules"
            class="input input-bordered input-secondary w-full"
            value={schedules}
          />
          <input
            type="text"
            placeholder="OBSERVACIONES"
            name="observations"
            class="input input-bordered input-secondary w-full"
            value={observations}
          />
          <div className="flex justify-end w-full">
            <button className="btn btn-success">Editar</button>
          </div>
        </form>
        </div>
      </dialog>
    </>
  );
};
