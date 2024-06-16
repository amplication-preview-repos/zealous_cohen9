import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PrisonList } from "./prison/PrisonList";
import { PrisonCreate } from "./prison/PrisonCreate";
import { PrisonEdit } from "./prison/PrisonEdit";
import { PrisonShow } from "./prison/PrisonShow";
import { DetenuList } from "./detenu/DetenuList";
import { DetenuCreate } from "./detenu/DetenuCreate";
import { DetenuEdit } from "./detenu/DetenuEdit";
import { DetenuShow } from "./detenu/DetenuShow";
import { ContraventionList } from "./contravention/ContraventionList";
import { ContraventionCreate } from "./contravention/ContraventionCreate";
import { ContraventionEdit } from "./contravention/ContraventionEdit";
import { ContraventionShow } from "./contravention/ContraventionShow";
import { AutorisationList } from "./autorisation/AutorisationList";
import { AutorisationCreate } from "./autorisation/AutorisationCreate";
import { AutorisationEdit } from "./autorisation/AutorisationEdit";
import { AutorisationShow } from "./autorisation/AutorisationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PrisonManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Prison"
          list={PrisonList}
          edit={PrisonEdit}
          create={PrisonCreate}
          show={PrisonShow}
        />
        <Resource
          name="Detenu"
          list={DetenuList}
          edit={DetenuEdit}
          create={DetenuCreate}
          show={DetenuShow}
        />
        <Resource
          name="Contravention"
          list={ContraventionList}
          edit={ContraventionEdit}
          create={ContraventionCreate}
          show={ContraventionShow}
        />
        <Resource
          name="Autorisation"
          list={AutorisationList}
          edit={AutorisationEdit}
          create={AutorisationCreate}
          show={AutorisationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
