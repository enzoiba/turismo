const objetivos = [
  "Fomentar en la comunidad la importancia del turismo en lo social, cultural, político, económico y ambiental.",
  "Propiciar la integración de la Comarca Los Alerces con la provincia y con Chile.",
  "Fortalecer actividades académicas vinculadas al turismo."
];

export default function Objetivos() {
  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Objetivos</h2>
      <ul className="list-disc list-inside">
        {objetivos.map((obj, i) => (
          <li key={i}>{obj}</li>
        ))}
      </ul>
    </section>
  );
}
