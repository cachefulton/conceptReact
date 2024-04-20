import DeleteButton from "./DeleteButton";
import { FaEdit } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";

function TeamRow({ team, id, onHandleDelete }) {
  let deletePrompt = `Are you sure you want to delete team ${team.name}`;
  const pop = (
    <Popover id="popovers">
      <Popover.Header as="h3">{team.name}</Popover.Header>
      <Popover.Body>
        Coach: {team.coachName}
        <br /> Notes: {team.notes}
      </Popover.Body>
    </Popover>
  );
  return (
    <OverlayTrigger
      placement="auto"
      trigger="hover"
      delay={{ show: 400, hide: 100 }}
      overlay={pop}
    >
      <tr key={id}>
        <td>{team.name}</td>
        <td>{team.coachName}</td>
        <td>{team.coachPhone}</td>
        <td>
          <Link to={`/edit-team/${id}`}>
            <span className="me-3" role="button">
              <FaEdit />
            </span>
          </Link>
          <DeleteButton
            title="Confirm Delete"
            bodyText={deletePrompt}
            cancelText="No"
            confirmText="Yes"
            // icon={FaTrash}
            itemKey={id}
            onHandleDelete={onHandleDelete}
          />
        </td>
      </tr>
    </OverlayTrigger>
  );
}

export default TeamRow;
