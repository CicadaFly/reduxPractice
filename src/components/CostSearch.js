import { useDispatch,useSelector } from "react-redux"
import { searchNameInput } from "../store"

function CostSearch() {
  const dispatch = useDispatch()
  const searchcost = useSelector( (state) =>{
   return state.cost.searchName
  })
  const searchHandler = (e) =>{
    dispatch(searchNameInput(e.target.value))
  }
  return (
  <div className="list-header">
    <h3 className="title is-3">my expenses in this month</h3>
    <div className="search field is-horizontal">
      <label className="label">Search</label>
      <input className="input"
             value={searchcost}
             onChange={searchHandler}/>
    </div>
  </div>
  )
}

export default CostSearch