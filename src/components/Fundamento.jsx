const fundamentos = [
  "La unión entre el sector público, privado, educativo y comunitario.",
  "El espíritu de integración comarcal con alcance binacional.",
  "El turismo como actividad inclusiva y accesible para todos.",
  "La importancia de la concientización comunitaria y la educación."
];

const dirigidos = [
  "Docentes y estudiantes de todos los niveles relacionados con el turismo.",
  "Empresarios turísticos comarcales, regionales y provinciales.",
  "Trabajadores y trabajadoras de la actividad turística.",
  "Personal de las secretarías de turismo, deporte y cultura.",
  "Instituciones intermedias vinculadas al turismo.",
  "Público general interesado en conocer y participar."
];

const Fundamento = () => {
  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Fundamentación</h2>
      
      <p className="mb-4">
        La <strong>Fiesta del Día Mundial del Turismo</strong> nace con la intención de 
        valorar y celebrar los aportes que brinda el turismo a la calidad de vida 
        de una comunidad. Abrirnos al encuentro con quienes nos visitan nos 
        fortalece como sociedad y nos impulsa a mostrar con orgullo nuestra identidad.
      </p>

      <p className="mb-2 font-semibold">Se caracteriza por:</p>
      <ul className="list-disc list-inside mb-6">
        {fundamentos.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p className="mb-2 font-semibold">Está dirigida a:</p>
      <ul className="list-disc list-inside mb-6">
        {dirigidos.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p>
        La invitación es abierta a toda la comunidad para descubrir el 
        <em> turismo como motor de innovación, inclusión y desarrollo sostenible</em>.
      </p>
    </section>
  );
};

export default Fundamento;
