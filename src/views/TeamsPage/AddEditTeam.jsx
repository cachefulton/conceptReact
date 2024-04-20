import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getApi } from "../../services/rest_storage_service";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export function AddEditTeam() {
  const { pathname } = useLocation();
  if(pathname.startsWith("/edit-team")) {
    var teamId = parseInt(pathname.replace("/edit-team/", ""));
  }
  const model = getApi();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [league_id, setLeagueId] = useState("1"); //need a default league_id for create
  const [coach_id, setCoachId] = useState("1"); //need a default coach_id for create
  const [options, setOptions] = useState(null);
  const [createOrEdit, setCreateOrEdit] = useState("Create Team");

  const [validated, setValidated] = useState(false);

  async function fetchData() {
    if(pathname.startsWith("/edit-team")) {
      setCreateOrEdit("Edit Team");
      let team = await model.read(teamId);
      setName(team.name);
      setNotes(team.notes);
      setCoachId(team.coach_id);
      setLeagueId(team.league_id);
    }
    let coaches = await model.getLookup("coaches");
    setOptions(coaches.map((coach) => (
      <option key={coach.value} value={coach.value}>{coach.label}</option>
    )));
  }
  useEffect(() => {
    fetchData();
  },[]);


  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleNotes = (e) => setNotes(e.target.value);
  const handleDropdown = (e) => setCoachId(e.target.value);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    if(pathname.startsWith("/edit-team")) {
      if (name) {
        model
          .update(teamId, {
            name,
            notes,
            coach_id,
            league_id,
          })
          .then((team) => {
            setError(null);
            navigate("/teams");
          });
      } else {
        setError("Fill in all fields");
      }
    }
    else {
      if (name) {
        model
          .create({
            name,
            notes,
            coach_id,
            league_id,
          })
          .then((team) => {
            setError(null);
            navigate("/teams");
          });
      } else {
        setError("Fill in all fields");
      }
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    event.stopPropagation();
    navigate("/teams");
  }

  return (
    <main className="content-container container-fluid mb-sm-3">
      <div className="row d-flex justify-content-sm-evenly">
        <section className="main-section rounded col-sm-8">
          <Container className="form p-3">
            <h3>{createOrEdit}</h3>

            <Form
              className="mb-2"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    required
                    onChange={handleName}
                    value={name}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a Team Name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="formCoach">
                  <Form.Label>Coach</Form.Label>
                  <Form.Select onChange={handleDropdown} value={coach_id}>
                    {options}
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="formNotes">
                  <Form.Label>Notes</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Notes"
                    onChange={handleNotes}
                    value={notes}
                  />
                </Form.Group>
              </Row>
            </Form>
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
            <Button className="ms-1" variant="secondary" onClick={handleCancel} type="button">Cancel</Button>
          </Container>
        </section>
      </div>
    </main>
  );
}
