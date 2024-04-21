export default function App() {
  const relatives = [
    'Grandma Alice',
    'Uncle Bob',
    'Aunt Carol',
    'Cousin David',
    'Niece Emily',
  ];
  return (
    <div>
      <h1>Relatives to Visit</h1>
    
      <ol>
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};
