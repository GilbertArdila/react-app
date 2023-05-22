import PropTypes from "prop-types";
const Searcher = ({ handleSearch, searchInput, search }) => {
    Searcher.propTypes = {
        children: PropTypes.node.isRequired,
      };
    return (
      <input
        type="text"
        className="mx-3 my-auto p-1"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        placeholder={'buscar...'}
      />
    );
  };
  export default Searcher;