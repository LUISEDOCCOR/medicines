export const Card = ({
    name,
    discomfort,
    time,
    schedules,
    observations
}) => {
    return (
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
                {name}
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
                <article className="space-y-1">
                    <h3 className="text-xl font-semibold">Horarios:</h3>
                    <p>{schedules}</p>
                </article>
                {
                    observations && (
                        <article className="space-y-1">
                            <h3 className="text-xl font-semibold">Observaciones:</h3>
                            <p>{observations}</p>
                        </article>
                    )
                }
            </div>
        </div>
    )
}