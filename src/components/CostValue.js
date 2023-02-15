import { useSelector } from "react-redux"

function Costvalue() {
  const totalCost = useSelector(({cost: {costData, searchName}}) => {
    const filteredcost = costData.filter( (cost) =>{
    return cost.costName.toLowerCase().includes(searchName.toLowerCase())
    });
    return filteredcost.reduce((acc, cost)=> acc + cost.costCost, 0)
    })
  return ( 
  <div className="cost-value">Total cost: ${totalCost}</div>
  )
}

export default Costvalue