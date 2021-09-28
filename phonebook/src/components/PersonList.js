import personsService from "../services/persons";

const PersonList = ({ persons, searchTerm, setPersons }) => {
  const personsToShow = persons.filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleDeleteOf = (id) => {
    const result = window.confirm("Would you like to delete this message?");

    if (result) {
      personsService
        .deletePerson(id)
        .then((res) => {
          console.log(res);
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((e) => {
          console.log(e);
        });
    } else return;
  };

  return (
    <ul>
      {personsToShow.map((person) => (
        <li key={person.id}>
          {person.name} : {person.number}
          <button onClick={() => handleDeleteOf(person.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
