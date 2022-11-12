import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, asyncIncrement } from './redux/actions'

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="container pt-5">
      <h1 className="heading">
        <span>Redux</span>
        <button className="btn btn-info" id="theme">Сменить тему</button>
      </h1>

      <hr />

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Счетчик: {counter}<span id="counter"></span></h5>
          <button
            onClick={() => dispatch(increment())} 
            className="btn btn-primary"
            id="add"
          >
            Добавить
          </button>
          <button
            onClick={() => dispatch(decrement())} 
            className="btn btn-danger"
            id="sub"
          >
            Убрать
          </button>
          <button
            onClick={() => dispatch(asyncIncrement())} 
            className="btn btn-success"
            id="async">
              Async
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
