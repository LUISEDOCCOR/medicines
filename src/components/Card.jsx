import { ModalDelete } from "./Delete"
import { ModalEdit } from "./Edit"

export const Card = ({
    name,
    discomfort,
    time,
    schedules,
    observations,
    id,
    handleClickDelete,
    handleClickUpdate
}) => {
    return (
        <div className="collapse collapse-arrow bg-base-200 xl:collapse-open">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-lg font-medium flex justify-between">
                <span>{name}</span>
                <span className="font-semibold">{schedules}</span>
            </div>
            <div className="collapse-content space-y-3"> 
                <article className="space-y-1">
                    <h3 className="text-xl font-semibold">Malestar:</h3>
                    <p>{discomfort}</p>
                </article>
                <article className="space-y-1">
                    <h3 className="text-xl font-semibold">Tiempo:</h3>
                    <p>{time}</p>
                </article>
                {
                    observations && (
                        <article className="space-y-1">
                            <h3 className="text-xl font-semibold">Observaciones:</h3>
                            <p>{observations}</p>
                        </article>
                    )
                }
                <article className="w-full flex justify-end items-center gap-2">
                    <ModalDelete 
                        name={name} id={id} 
                        handleClickDelete={handleClickDelete}
                    />
                    <ModalEdit 
                        name={name} 
                        id={id} 
                        discomfort={discomfort} 
                        time={time} 
                        schedules={schedules} 
                        observations={observations} 
                        handleClickUpdate={handleClickUpdate}
                    />
                </article>
            </div>
        </div>
    )
}