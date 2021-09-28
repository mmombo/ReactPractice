import personService from "../services/persons";

const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons }) => {
  const updateNumber = (person) => {
    const isConfirmed = window.confirm(
      `${newName} already exists in the phonebook, would you like to update the number?`
    );

    if (isConfirmed) {
      const changedPerson = { ...person, number: newNumber };
      personService.updatePerson(person.id, changedPerson).then((returnedPerson) => {
        setPersons(persons.map((pers) => (pers.id !== person.id ? pers : returnedPerson)));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const addNumber = (event) => {
    event.preventDefault();

    const person = persons.find((person) => person.name === newName);

    if (person) {
      updateNumber(person);
    } else {
      const newPerson = { name: newName, number: newNumber };

      personService.addNew(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
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
        Name:
        <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        Number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonForm;
