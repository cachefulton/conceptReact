import Aside from "../../components/Aside/Aside";
// import LocalStorageService from "../../services/local_storage_service";
import AppViewModel from "../../services/app_view_model";
import TeamListView from "./TeamListView";
import {getApi} from "../../services/rest_storage_service";


function TeamsPage() {
  // let localStorage = new LocalStorageService(AppViewModel.data, AppViewModel.list.entitySingle);
  let model = getApi();
  return (
    <main className="content-container container-fluid mb-sm-3">
      <div className="row d-flex justify-content-sm-evenly">
        {/* main content */}
        <section className="main-section rounded col-sm-8">
          {/* teams page */}
          <div className="mt-2" id="teams" role="tabpanel"></div>
          <h3 className="mt-2">Team Information</h3>

          <TeamListView viewModel={AppViewModel} model={model}></TeamListView>
        </section>
        {/* aside content */}
        <Aside></Aside>
      </div>
    </main>
  );
}
export default TeamsPage;
