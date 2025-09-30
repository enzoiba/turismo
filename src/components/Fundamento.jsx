const fundamentos = [
  "la articulación entre el sector público, el sector privado, las organizaciones de la comunidad y el sistema educativo", 
  "la voluntad de integración comarcal, con su alcance binacional", 
"el reconocimiento del turismo como una actividad inclusiva, promoviendo tanto la accesibilidad universal pensando en la demanda como la plenificación de todos los actores locales que buscan integrarse en la oferta", 
	"el énfasis en la concientización comunitaria y la educación.",
];

const dirigidos = [
  "Docentes y estudiantes de instituciones educativas de toda la provincia, ya sean de nivel medio, secundario, superior y/o universitario cuyos planes de estudio se encuentren vinculados a la actividad turística.", 
	"Empresarios turísticos comarcales, regionales y provinciales",
  "Trabajadores de la actividad turística.",
	"Personal de las secretarías de turismo, deporte y cultura de los municipios de la comarca.",
	"Instituciones intermedias relacionadas.",
  "La invitación a participar se hace extensiva a todo el público interesado en seguir explorando conjuntamente el poder del turismo como fuerza para la innovación, el desarrollo inclusivo y el bienestar de nuestras comunidades en un camino de sostenibilidad.",

];


const Fundamento = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      
<p>El nombre de “Fiesta” que adopta este evento nace y se consolida en la intención de valorar y celebrar los sensibles e indudables aportes que hace a la calidad de vida de una comunidad el constituirse en destino turístico. Festejamos por tener la oportunidad de conocer a quienes nos visitan, festejamos por el impulso que nos dan para desplegar nuestra propia identidad, festejamos porque al abrir nuestro hogar al encuentro y al diálogo, sin duda somos mejores. Con la alegría de nuestro recorrido local que ya lleva 18 años, resaltamos que identifican esta celebración nuestra: </p>
  <ul className="list-disc list-inside">
        {fundamentos.map((cat, i) => (
          <li key={i}>{cat}</li>
        ))}
    </ul>
<strong>La Fiesta está dirigida a:</strong>
  <ul className="list-disc list-inside">
        {dirigidos.map((cat, i) => (
          <li key={i}>{cat}</li>
        ))}
    </ul>
<p>La invitación a participar se hace extensiva a todo el público interesado en seguir explorando conjuntamente el poder del turismo como fuerza para la innovación, el desarrollo inclusivo y el bienestar de nuestras comunidades en un camino de sostenibilidad. </p>

 

    </div>
  )
}

export default Fundamento
