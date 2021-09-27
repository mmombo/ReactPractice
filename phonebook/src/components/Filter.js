const Filter = ({ setSearchTerm, searchTerm }) => {
    const handleSearchTerm = (event) => {
      console.log(searchTerm);
      setSearchTerm(event.target.value);
    };
  
    return (
      <div>
        search for names containing:
        <input onChange={handleSearchTerm} />
      </div>
    );
  };

  export default Filter