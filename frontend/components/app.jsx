import React from 'react';
import JobFormContainer from './job_component/job_form_container';
import TruckFormContainer from './truck_component/truck_form_container'
import TruckIndexContainer from './truck_component/truck_index_container'

const App = () => (
  <div>
    <h1>Oncue</h1>
    <JobFormContainer />
    <TruckFormContainer />
    <TruckIndexContainer />
  </div>
);

export default App;