import { useDispatch, useSelector } from "react-redux"
import { removeCost } from "../store"

function CostList() {
  const dispatch = useDispatch()
  const {data, boldName} = useSelector(({form, cost: {searchName, costData}}) => {
      const filtedcost =  costData.filter( (cost) => 
      cost.costName.toLowerCase().includes(searchName.toLowerCase())
    )
      return{
        data: filtedcost,
        boldName: form.costName,
      };    
  }); 
  const removeHandler=(cost)=>{
    dispatch(removeCost(cost.id))
  }

  const list = data.map( (cost) => {
    const boldText = boldName && cost.costName.toLowerCase().includes(boldName.toLowerCase())
    return(
      <div key={cost.id} className={`panel level ${ boldText && 'has-text-weight-bold'}`}>
        <p> {cost.costName} - ${cost.costCost} </p>
        <button className="button is-danger level-right" onClick={()=>removeHandler(cost)}>Delete</button>
      </div>    
    )
  })  
  return (

  <div>ExpenseList
  {list}
  <hr />
  </div>
  )
}

export default CostList