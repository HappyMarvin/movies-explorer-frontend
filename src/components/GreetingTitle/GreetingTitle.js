import './GreetingTitle.css'

function GreetingTitle ({ text, mix }) {
  return (
    <h1 className={`greeting-title ${mix || ''}`}>{text}</h1>
  )
}

export default GreetingTitle