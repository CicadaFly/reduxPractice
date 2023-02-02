import { useDispatch, useSelector } from "react-redux"
import { addCar, changeCost, changeName } from "../store"

function CarForm() {
  const dispatch = useDispatch();
  const {name, cost} = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,}
  });
  const changeNameHandler = (e) =>{
    // 將input內的target.value作為action.payload傳至changeName內
    dispatch(changeName(e.target.value))
  };

  const changeCostHandler = (e) =>{
    //先檢查數字是不是有效的，否則傳回0
    const carCost = parseInt(e.target.value) || 0
    dispatch(changeCost(carCost))
  };

  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(addCar({name, cost}));
  };

  return  (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
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
              value={cost || "" } //不然會鎖死在0，無法刪除
              onChange={changeCostHandler}
              type="number" //這個位置只能鍵入數字
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Add New Car</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm