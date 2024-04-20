import { FaSortDown, FaSortUp } from "react-icons/fa";
import { GrUnsorted } from "react-icons/gr";

function TeamHeaderCol({
  label,
  thClasses,
  colName,
  sortCol,
  sortDir,
  onHandleSort,
}) {
  let headerIcon = <GrUnsorted />;
  if (colName === sortCol) {
    headerIcon = sortDir === "asc" ? <FaSortUp /> : <FaSortDown />;
  }
  const handleColumnClick = (e) => {
    onHandleSort(colName);
  };
  return (
    <>
      <th className={thClasses} onClick={handleColumnClick}>
        {label} {headerIcon}
      </th>
    </>
  );
}
export default TeamHeaderCol;
