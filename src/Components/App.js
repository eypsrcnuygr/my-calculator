import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../Logic/Calculate';

const App = () => (
  <>
    <Display result="15" />
    <ButtonPanel />
    { Calculate }
  </>
);

export default App;
