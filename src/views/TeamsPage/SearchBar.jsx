import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {FaPlus} from "react-icons/fa";

function SearchBar(props) {
  return (
    <div className="d-flex flex-row-reverse justify-content-between">
      <Link to={"/add-team"}>
        <Button className="pb-2" variant="outline-secondary">{<FaPlus/>}</Button>
      </Link>
      <div className="d-flex">
        <input
          className="me-2"
          value={props.filterText}
          type="text"
          placeholder="Search"
          onChange={(e) => {
            props.onFilterTextChange(e.target.value);
          }}
        />
        <Button
          variant="outline-secondary"
          onClick={(e) => {
            props.onFilterTextChange('');
          }}
        >
          Clear
        </Button>
      </div>
    </div>
  );
}
export default SearchBar;
