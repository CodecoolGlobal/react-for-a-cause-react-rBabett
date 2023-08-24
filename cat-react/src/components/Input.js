const Input = ({placeholder, size, value, onInput, className, type}) => {
  return <input placeholder={placeholder} size={size} value={value} onChange={onInput} className={className} type={type}></input>
}

export default Input