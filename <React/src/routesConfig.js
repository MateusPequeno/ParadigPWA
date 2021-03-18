import Home from "./pages/Home";
import Consulta from "./pages/Consulta";
import ConsultaParad from "./pages/ConsultaParad";
import Delete from "./pages/Delete";
import Alterar from "./pages/Alterar";
import InserirParad from "./pages/InserirParadForm";
import DeleteParad from "./pages/DeleteParad";
import AlterarParad from "./pages/AlterarParad";
const routesConfig = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/consulta",
    component: Consulta,
    exact: true,
  },
  {
    path: "/delete",
    component: Delete,
    exact: true,
  },
  {
    path: "/alterar",
    component: Alterar,
    exact: true,
  },
  {
    path: "/consultaParad",
    component: ConsultaParad,
    exact: true,
  },
  {
    path: "/inserirParad",
    component: InserirParad,
    exact: true,
  },
  {
    path: "/deleteParad",
    component: DeleteParad,
    exact: true,
  },
  {
    path: "/alterarParad",
    component: AlterarParad,
    exact: true,
  }
];
export default routesConfig;
