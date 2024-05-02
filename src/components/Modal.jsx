import { useState } from "preact/hooks";
import { supabase } from "../api/supabase";

export const Modal = ({Msg, isError,  handleSubmit}) => {
  return (
    <>
      <button
        className="btn btn-neutral text-xl font-medium"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Añadir
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Añadir medicamento</h3>
          <div
            role="alert"
            className={`alert mt-3
                        ${Msg ? "grid" : "hidden"}
                        ${isError ? "alert-error" : "alert-success "}`}
          >
            <span>{Msg}</span>
          </div>
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
            />
            <input
              type="text"
              placeholder="MALESTAR"
              name="discomfort"
              class="input input-bordered input-secondary w-full"
            />
            <input
              type="text"
              placeholder="TIEMPO"
              name="time"
              class="input input-bordered input-secondary w-full"
            />
            <input
              type="text"
              placeholder="HORARIOS"
              name="schedules"
              class="input input-bordered input-secondary w-full"
            />
            <input
              type="text"
              placeholder="OBSERVACIONES"
              name="observations"
              class="input input-bordered input-secondary w-full"
            />
            <div className="flex justify-end w-full">
              <button className="btn btn-info">Añadir</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};
