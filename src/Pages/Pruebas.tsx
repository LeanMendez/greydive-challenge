import {useParams} from "react-router-dom";

import {MainContent} from "../Components/MainContent";
import {Navbar} from "../Components/Navbar";
import data from "../Data/Data.json";

const Pruebas = () => {
  const {cliente} = useParams();
  const datafiltered = data.filter((data) => data.cliente === cliente);

  return (
    <div>
      <>
        <Navbar />
        {datafiltered.map((test) => (
          <MainContent key={test.cliente} data={test} />
        ))}
      </>
    </div>
  );
};

export default Pruebas;
