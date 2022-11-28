import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import TabView from './components/tabs/TabView';
// import { ContentPage } from './components/13-stylingWithCss/contentPage';
import { Interview } from './components/reactCodeIterview'; 
//import UseEffectFetchData from './components/2-useEffect/UseEffectFetchData';
import ControlledInputs from './components/4-forms/ControlledInputs'; 
//import { ContentPage } from './components/13-stylingWithCss/contentPage';



class App extends React.Component {

  render() {
    return (
      <div /* className='container' */>
        <TabView
          title={'Tab Test'}
          tabs={[
            { name: 'Css Exercise', content: <Interview/>},
            { name: 'Controlled Inputs', content: <ControlledInputs/> },
            /* { name: '', content: ContentPage }, */
            
          ]}
        />
      </div>

    );
  };
}

export default App;