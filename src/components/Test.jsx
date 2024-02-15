import PropTypes from 'prop-types';

export const Test = ({ mensaje }) => {
    return (
        <div>
            <p>{mensaje}</p>
        </div>
    );  
}

Test.propTypes = {
    mensaje: PropTypes.string.isRequired
};