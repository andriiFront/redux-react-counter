import './App.css';
import { useSelector } from 'react-redux'

function App() {

  return (
    <div className="container pt-5">
      <h1 className="heading">
        <span>Redux</span>
        <button className="btn btn-info" id="theme">Сменить тему</button>
      </h1>

      <hr />

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Счетчик: <span id="counter"></span></h5>
          <button className="btn btn-primary" id="add">Добавить</button>
          <button className="btn btn-danger" id="sub">Убрать</button>
          <button className="btn btn-success" id="async">Async</button>
        </div>
      </div>
    </div>
  );
}

export default App;
