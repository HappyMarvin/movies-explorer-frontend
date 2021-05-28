import './SignInput.css';

function SignInput ({ type = "text", title, value, handleChange }) {
  return (
    <p className="sign-input__wrapper">
      {title}
      <input type={type} className="sign-input" value={value} onChange={handleChange}/>
    </p>
  )
}

export default SignInput