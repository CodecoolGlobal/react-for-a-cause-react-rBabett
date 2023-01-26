const Input = ({placeholder, size, value, onInput, className}) => {
  return <input placeholder={placeholder} size={size} value={value} onChange={onInput} className={className}></input>
}

export default Input