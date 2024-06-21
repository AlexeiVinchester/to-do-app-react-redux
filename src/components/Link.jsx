import Proptypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={active}
            style={{ margin: '5px' }}
        >
            {children}
        </button>
    )
}

Link.propTypes = {
    active: Proptypes.bool.isRequired,
    children: Proptypes.node.isRequired,
    onClick: Proptypes.func.isRequired
};

export { Link }
