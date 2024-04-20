import TeamHeaderCol from "./TeamHeaderCol";

function TeamHeaderRow({label, thClasses, sortCol, sortDir, onHandleSort}) {
  return (
    <tr>
      <TeamHeaderCol label="Team Name" thClasses={thClasses} colName="name" sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort}/>
      <TeamHeaderCol label="Coach" thClasses={thClasses} colName="coachName" sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort}/>
      <TeamHeaderCol label="Coach's Phone" thClasses={thClasses} colName="coachPhone" sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort}/>
      <th>Actions</th>
    </tr>
  );
}
export default TeamHeaderRow;
