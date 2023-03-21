import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd}) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  )
  }

Header.defaultProps = {
    title: 'Task Tracker'
}

// enforcing prop types
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// You can style inline CSS with variables if you want:
// const headingStyle = {
//   color: 'red', 
//   backgroundColor: 'pink'
// }

export default Header