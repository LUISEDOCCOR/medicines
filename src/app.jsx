import { supabase } from "./api/supabase"
import { useState, useEffect } from "preact/hooks"
//Components
import { Card } from "./components/Card"
import { Modal } from "./components/Modal"

export function App() {

  const [Medicines, setMedicines] = useState([])
  const [Loading, setLoading] = useState(true)
  const [Msg, setMsg] = useState("");
  const [isError, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const discomfort = formData.get("discomfort");
    const time = formData.get("time");
    const schedules = formData.get("schedules");
    const observation = formData.get("observations");

    if (name && discomfort && time && schedules) {
      const { data, error } = await supabase
        .from("medicines")
        .insert({ 
            "name" : name, 
            "discomfort" : discomfort, 
            "time" : time , 
            "schedules" : schedules, 
            "observations" : observation 
        })
        .select();

      if (error) {
        setError(true);
        setMsg("Error en el servidor");
        setTimeout(() => {
          setMsg("");
          e.target.reset();
        }, 1000);
        console.log(error)
        return;
      }

      setMedicines([...Medicines, ...data])
      
      setError(false);
      setMsg("Agregado correctamente");
      setTimeout(() => {
        setMsg("");
        e.target.reset();
      }, 1000);
    } else {
      setError(true);
      setMsg("Rellene todos los campos");
    }
  };

  const fetchMedicines = async () => {
    setLoading(true)
    let { data: medicines, error } = await supabase
    .from('medicines')
    .select('*')
    setMedicines(medicines) 

    setLoading(false)

    if(error){
      console.log(error)
      return
    }
  }

  useEffect(() => {
    fetchMedicines()
  },[])

  return(
    <>
    <header className="px-6 mt-6"> 
      <h1 className="text-center font-semibold text-3xl">DIAS Y HORARIOS DE MEDICAMENTOS</h1>
    </header>
      <main className={`w-screen px-6 
      ${Loading&&"grid place-content-center h-screen w-full"}`}>
      {
        Loading ? (
          <span className="loading loading-ball loading-lg"></span>
        ) : (
          <article className="grid grid-cols-1 gap-6 mt-8 mb-6">
            <Modal  
              handleSubmit={handleSubmit} 
              isError={isError}
              Msg={Msg}
            />
            {
              Medicines.map((medicine) => (
                <Card
                  key={medicine.id}
                  name = {medicine.name}
                  discomfort = {medicine.discomfort}
                  time = {medicine.time}
                  schedules = {medicine.schedules}
                  observations = {medicine.observations}
                />
              ))
            }
          </article>
        )
      }
    </main>
    </>
  )
}
