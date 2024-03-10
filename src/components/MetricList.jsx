const MetricList = ({data}) => {
  return (
    <ul className="flex flex-col m-3">
      {data.map((item) => (
        <li 
          key={item.id}
          className="p-1 text-xl">
          <span className="mx-2">{item.name}</span>
          <span>{new Intl.NumberFormat().format(item.value)}</span>
        </li>
      ))}
    </ul>
  )
}

export default MetricList