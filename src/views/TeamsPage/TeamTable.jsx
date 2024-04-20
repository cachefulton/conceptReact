import TeamRow from "./TeamRow";
import TeamHeaderRow from "./TeamHeaderRow";

function TeamTable({
  teams,
  viewModel,
  sortCol,
  sortDir,
  onHandleDelete,
  onHandleSort
}) {
  const listItems = teams.map((team) => (
    <TeamRow
      key={team.id}
      team={team}
      id={team.id}
      onHandleDelete={onHandleDelete}
    />
  ));
  return (
    <table className={viewModel.list.tableClasses}>
      <thead>
        <TeamHeaderRow
          thClasses={viewModel.list.thClasses}
          sortCol={sortCol}
          sortDir={sortDir}
          onHandleSort={onHandleSort}
        />
      </thead>
      <tbody>{listItems}</tbody>
    </table>
  );
}

export default TeamTable;
