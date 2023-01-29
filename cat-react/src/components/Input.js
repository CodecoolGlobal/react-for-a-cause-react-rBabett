const Input = ({placeholder, size, value, onInput, className, name, type}) => {
  return <input name={name} placeholder={placeholder} size={size} value={value} onChange={onInput} type={type} className={className}></input>
}

export default Input