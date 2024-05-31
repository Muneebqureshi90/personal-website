import PropTypes from 'prop-types';

const Button = ({ title, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={'text-center px-4 py-2 border-2 border-black bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full  hover:scale-110'}
        >
            {title}
        </div>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Button;
