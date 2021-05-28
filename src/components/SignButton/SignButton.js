import './SignButton.css';

function SignButton ({ text }) {
  return (
    <button type="submit" className={`sign-button`}>{text}</button>
  )
}

export default SignButton