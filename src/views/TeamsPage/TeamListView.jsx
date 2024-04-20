import { useEffect, useState } from "react";
import TeamTable from "./TeamTable";
import SearchBar from "./SearchBar";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function TeamListView({ viewModel, model }) {
  const [filterStr, setFilterStr] = useState(model.filterStr);
  const [filterText, setFilterText] = useState("");
  const [filterCol, setFilterCol] = useState(model.filterCol);
  const [sortCol, setSortCol] = useState(model.sortCol);
  const [sortDir, setSortDir] = useState(model.sortDir);

  const [data, updateData] = useState(null);
  const [show, setShow] = useState(false); // dismissible alert show
  const [message, setMessage] = useState(""); // dismissible alert message

  const handleAlertClose = () => {
    setShow(false);
  }

  useEffect(() => {
    let options = {sortCol: sortCol, sortDir: sortDir, filterStr: filterStr, filterCol: filterCol}
    model.list(options).then((teams) => {
      updateData(teams);
      console.log(teams);
    });
  },[sortCol, sortDir, filterStr, filterCol]);

  function handleReset() {
    model.reset();
  }

  function handleDelete(id) {
    model.read(id).then((team) => {
      // dismissible alert
      model.delete(id).then(() => {
        setMessage(`You have deleted team ${team.name}`);
        setShow(true);
        //re load the page to re render team table
      });
    });
  }

  function handleSort(newSortCol) {
    let curDir = sortDir;
    if (sortCol === newSortCol) {
      setSortDir(curDir === "asc" ? "dsc" : "asc");
    } else {
      setSortDir("asc");
    }

    setSortCol(newSortCol);
    // model.sort(model.sortCol, model.sortDir, true);
  }

  //Filter column is broken
  function handleFilterChange(value) {
    setFilterText(value);
    if (value === "" || value.length > 1) {
      setFilterStr(value);
      setFilterCol(value ? sortCol : "");
    }
  }

  return (
    data && (
      <>
        <SearchBar
          filterText={filterText}
          onFilterTextChange={handleFilterChange}
          title={viewModel.list.listTitle}
        />
        <Alert
          className="mt-2"
          show={show}
          variant="info"
          onClose={handleAlertClose}
          dismissible
        >
          {message}
        </Alert>
        <TeamTable
          teams={data}
          sortCol={sortCol}
          sortDir={sortDir}
          viewModel={viewModel}
          onHandleDelete={handleDelete}
          onHandleSort={handleSort}
        ></TeamTable>
        {/* <Button
          id="resetBtn"
          className="btn-lg"
          variant="outline-secondary"
          onClick={(e) => handleReset()}
        >
          Reset
        </Button> */}
      </>
    )
  );
}

export default TeamListView;
