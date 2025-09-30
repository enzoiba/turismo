const categorias = [
  "Académicas",
  "Recreativas y culturales",
  "Deportivas",
  "Turísticas"
];

export default function Actividades() {
  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Actividades propuestas</h2>
      <ul className="list-disc list-inside">
        {categorias.map((cat, i) => (
          <li key={i}>{cat}</li>
        ))}
      </ul>
    </section>
  );
}
