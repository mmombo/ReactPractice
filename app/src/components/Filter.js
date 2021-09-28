
const Filter = ({ setFilterTerm }) => {
    const filterHandler = (event) => {
      setFilterTerm(event.target.value);
    };
  
    return (
      <div>
        <p>Search for Country by Name</p>
        <input onChange={filterHandler} />
      </div>
    );
  };

  export default Filter