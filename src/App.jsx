import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import TeamsPage from "./views/TeamsPage/TeamsPage";
import {AddEditTeam} from "./views/TeamsPage/AddEditTeam";
import Layout from "./components/Layout/Layout";
import NoMatch from "./components/Router/NoMatch";
import AppViewModel from "./services/app_view_model";

// import $ from "jquery";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {

  //   $("#btn-teams, #btn-home").click(function () {
  //     let width = window.innerWidth;
  //     if (width <= 768) {
  //       //check if viewport is at breakpoint or lower and close toggle
  //       $("button.navbar-toggler").trigger("click");
  //     }
  //   });
  // });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout title={AppViewModel.header.title} logo={AppViewModel.header.logo} />} >
          <Route index element={<HomePage />}/>
          <Route path="teams" element={<TeamsPage/>} />
          <Route path="add-team" element={<AddEditTeam/>}/>
          <Route path="edit-team/:id" element={<AddEditTeam/>}/>
        </Route>
        <Route path="*" element={<NoMatch />}/>
      </Routes>
    </div>
  );
}

export default App;