import './SignInput.css';

function SignInput ({
                      type = "text",
                      title,
                      value,
                      handleChange,
                      errorMessage='',
                      required = '',
                      pattern}) {
  return (
    <p className="sign-input__wrapper">
      {title}
      <input
        type={type}
        className={`sign-input ${errorMessage ? 'sign-input_error' : ''}`}
        value={value} onChange={handleChange}
        required={required}
        pattern={pattern || false}
      />
      <span className={`sign-input__message ${errorMessage ? 'sign-input__message_active' : ''}`}>{errorMessage}</span>
    </p>
  )
}

export default SignInput
