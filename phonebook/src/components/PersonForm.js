const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons }) => {
  const addNumber = (event) => {
    event.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      window.alert(`${newName} already exists in list`);
    } else {
      const id = persons.length + 1;
      const newPerson = { name: newName, number: newNumber, id: id };
      setPersons(persons.concat(newPerson));
      setNewName("");
    }
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };
  return (
    <form onSubmit={addNumber}>
      <div>
        name:
        <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
