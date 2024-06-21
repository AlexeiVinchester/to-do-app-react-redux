import Proptypes from 'prop-types'

const ToDo = ({ onCLick, completed, text }) => {
    return (
        <li
            onClick={onCLick}
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
        >
            {text}
        </li>
    )
}

ToDo.propTypes = {
    onCLick: Proptypes.func.isRequired,
    completed: Proptypes.bool.isRequired,
    text: Proptypes.string.isRequired
};

export { ToDo }
