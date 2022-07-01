import { useDispatch, useSelector } from "react-redux";
import { State } from "./store/reducers/index";
import * as actionCreators from "./store/action-creators/actionCreators";
import { bindActionCreators } from "redux";

function App() {
  const dispatch = useDispatch();
  const amount = useSelector((state: State) => state.bank);

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>WithDraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
