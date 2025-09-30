import { useState } from "react";





export default function Cronograma() {
  const [abierto, setAbierto] = useState(null);


  
const actividades = [
  {
    dia: "Sábado 20 de septiembre",
    detalle: "08:00 a 16:00 - Curso de iniciación a la observación de aves (Edificio de aulas de la UNPSJB, Ruta 259 km 16,41).",
    link: "https://forms.gle/t5cKd55FkjJFpeuu9"
  },
  {
    dia: "Domingo 21 de septiembre",
    detalle: "08:00 a 13:00 - Salida de campo del curso de observación de aves (Reserva Natural Urbana Laguna La Zeta)."
  },
  {
    dia: "Lunes 22 de septiembre",
    detalle: "16:00 - Taller de Anfitrión Turístico 2025 (Centro de Visitantes de Villa Futalaufquen).",
    link: "http://bit.ly/4naka8y"
  },
  {
    dia: "Martes 23 de septiembre",
    detalle: `10:00 - Evento inaugural de la Fiesta (Centro Cultural Melipal).
14:00 y 16:00 - Guiado del Reloj de sol y baldosas históricas en Plaza San Martín (Guía: Daniela Crespi).`
  },
  {
    dia: "Jueves 25 de septiembre",
    detalle: `09:30 - Caminata por la vida (Salida desde Av. Presidente Perón y Ameghino).
11:00 - Inauguración plazoleta de la vida.
16:00 - City Tour en Trevelin (Plaza central, museo, capillas, álamo histórico, costanera).
18:00 y 22:00 - Conciertos XII Encuentro MOLPA 2025 (Gimnasio Municipal).`
  },
  {
    dia: "Viernes 26 de septiembre",
    detalle: `10:00 a 11:30 - Paseo urbano Esquel (Salida desde Museo Histórico).
17:00 - Draig Goch cumple 4 años (Plaza Coronel Fontana de Trevelin).
18:00 y 22:00 - Conciertos XII Encuentro MOLPA 2025 (Gimnasio Municipal).`,
    link: "mailto:museohistorico@esquel.ar"
  },
  {
    dia: "Sábado 27 de septiembre",
    detalle: `11:00 a 13:00 - “Ese viaje quedó tatuado” (Centro de Jubilados, Molinari 527).
18:00 - Lanzamiento carrera “Senderos de Trevelin” (Trevelin).
19:00 y 23:00 - Conciertos XII Encuentro MOLPA 2025 (Gimnasio Municipal).
20:00 - Concierto “Murgas en acción” (Salón Central de Trevelin).`
  },
  {
    dia: "Domingo 28 de septiembre",
    detalle: "34ª Edición Tetratlón Douglas Berwyn (Club Andino Esquel)."
  },
  {
    dia: "Martes 30 de septiembre",
    detalle: "14:00 a 18:00 - Visita guiada a Capilla Seion (Guía: Verónica Buss). 17:00 - Lanzamiento programa Trashumancias (Plaza del Cielo)."
  },
  {
    dia: "Miércoles 1 de octubre",
    detalle: `16:00 a 20:00 - Alerces + ProdTur: Mesas de trabajo (CIEFAP).
21:00 - Función especial del Planetario de Esquel (Centro Cultural Melipal).` 
  },
  {
    dia: "Jueves 2 de octubre",
    detalle: `16:00 a 20:00 - Alerces + ProdTur: Mesas de trabajo (Viñas de Nant y Fall).
20:00 - Clase abierta de Juan Falú (ISFD Nº 809, Alsina 1047).`
  },
  {
    dia: "Viernes 3 de octubre",
    detalle: `10:00 a 11:30 - Paseo urbano Esquel con Juan Falú (Museo Histórico).
16:00 a 20:00 - Alerces + ProdTur: Mesas de trabajo (SUM INTA).
19:00 - Encuentro de trabajo: Turismo religioso (UNPSJB).
21:00 - Concierto de Juan Falú “Guitarra de alerce” (Auditorio Municipal).`
  },
  {
    dia: "Sábado 4 de octubre",
    detalle: `10:00 a 12:00 - Clínica para músicos con Juan Falú (Centro de Visitantes, PN Los Alerces).
10:00 a 17:00 - Excursión Sendero El Portezuelo (Puerto Limonao).
12:30 a 13:30 - Caminata Inclusiva sendero Pinturas Rupestres.
21:00 - Concierto íntimo de Juan Falú (Espacio Arcos al Sur, Roca 528).`
  },
  {
    dia: "Domingo 5 de octubre",
    detalle: `19:00 - Proyección de “El país de las maravillas” (Centro Cultural Melipal).`
  },
  {
    dia: "Lunes 6 de octubre",
    detalle: "19:00 - Charla informativa: Herramientas de gestión para emprendimientos turísticos (Hotel Sol del Sur)."
  },
  {
    dia: "Martes 7 de octubre",
    detalle: "19:00 - Reunión abierta de la Asociación de Fotógrafos de Naturaleza (AFONA) (UNPSJB, sede Esquel)."
  }
];



  const toggleDetalle = (index) => {
    setAbierto(abierto === index ? null : index);
  };

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        Cronograma de Actividades
      </h2>
      {actividades.map((act, i) => (
        <div
          key={i}
          onClick={() => toggleDetalle(i)}
          className="bg-white shadow rounded-lg p-4 mb-3 cursor-pointer hover:bg-green-50 transition"
        >
          <strong>{act.dia}</strong>
          {abierto === i && (
            <div className="mt-2 text-gray-700">
              <p>{act.detalle}</p>
              {act.link && (
                <a
                  href={act.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 underline"
                >
                  Inscripción aquí
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
