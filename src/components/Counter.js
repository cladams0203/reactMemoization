
export function Counter({count, setCount}) {

  return (
    <>
    <div>
      <h2>{count}</h2>
      <button onClick={setCount(count + 1)} >Add</button>
    </div>
    </>
  )
}