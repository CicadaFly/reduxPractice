import { useDispatch, useSelector } from "react-redux"
import { addCost, changeCost, changeName } from "../store"

function CostForm() {
  const dispatch = useDispatch();
  const {name, cost} = useSelector((state) => {
    return {
      name: state.form.costName,
      cost: state.form.costCost,
     }
  });
  const changeNameHandler = (e) =>{
    // 將input內的target.value作為action.payload傳至changeName內
    dispatch(changeName(e.target.value))
  };

  const changeCostHandler = (e) =>{
    //先檢查數字是不是有效的，否則傳回0
    const costCost = parseInt(e.target.value) || 0
    dispatch(changeCost(costCost))
  };

  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(addCost({name, cost}));
    
  };

  return  (
    <div className="cost-form panel">
      <h4 className="subtitle is-3">Add new expenses</h4>
      <form onSubmit={submitHandler}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={changeNameHandler}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ''} //不然會鎖死在0，無法刪除
              onChange={changeCostHandler}
              type="number" //這個位置只能鍵入數字
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Add New Expenses</button>
        </div>
      </form>
    </div>
  );
}

export default CostForm