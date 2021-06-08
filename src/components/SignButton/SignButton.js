import './SignButton.css';

function SignButton ({ text, isValid }) {
  return (
    <button
      type="submit"
      className={`sign-button ${isValid ? '' : 'sign-button_disable'}`}
      disabled={`${isValid ? '' : 'disable'}`}
    >
      {text}
    </button>
  )
}

export default SignButton
