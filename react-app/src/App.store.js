import { useSliceSelector, useSliceStore } from 'utils/reduxHelper';

function App() {
  const store = useSliceStore('app');
  const [counter] = useSliceSelector('app', ['counter']);

  const increase = () => {
    store.setState({counter: counter+1});
  }

  const decrease = () => {
    store.setState({counter: counter-1});
  }

  return (
    <div className="container mt-3">
      Counter: {counter} 
      {" "}

      <button 
        className="btn btn-sm btn-primary" 
        onClick={increase}
      >+</button>

      {" "}
      
      <button 
        className="btn btn-sm btn-danger" 
        onClick={decrease}
      >-</button>

    </div>
  );
}

export default App;