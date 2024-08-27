export default function Argent(type, number, amount, balance) {
  return (
    <section>
      <h2>{type}</h2>
      <p>{number}</p>
      <b>{amount}</b>
      <p>{balance}</p>

      <button>View transactions</button>
    </section>
  )
}