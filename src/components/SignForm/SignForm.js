import './SignForm.css';
import Logo from "../Logo/Logo";
import GreetingTitle from "../GreetingTitle/GreetingTitle";

function SignForm ({ title, children }) {
  return (
    <div className={`sign-form__wrapper`}>
      <form className="sign-form">
        <div className="sign-form__logo-wrapper">
          <Logo />
        </div>
        <GreetingTitle text={title} />
        {children}
      </form>
    </div>
  )
}

export default SignForm