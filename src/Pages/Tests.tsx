import {useParams} from "react-router-dom";

import {MainContent} from "../Components/MainContent";
import data from "../Data/Data.json";

const Tests = () => {
  const {cliente} = useParams();
  const datafiltered = data.filter((data) => data.cliente === cliente);

  return (
    <div>
      <>
        {datafiltered.map((test) => (
          <MainContent key={test.cliente} data={test} />
        ))}
      </>
    </div>
  );
};

export default Tests;
