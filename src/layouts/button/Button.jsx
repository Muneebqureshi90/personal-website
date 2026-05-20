import PropTypes from 'prop-types';

const Button = ({ children, href, type = 'primary', target, rel, className = '', onClick }) => {
    const baseStyles = "inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 border-[1.5px]";

    const types = {
        primary: "bg-accent text-white border-transparent hover:bg-transparent hover:border-accent hover:text-accent hover:-translate-y-0.5",
        secondary: "bg-transparent text-textMain border-border2 hover:border-accent hover:text-accent hover:-translate-y-0.5",
        submit: "w-full justify-center bg-accent text-white border-transparent hover:bg-accent2 hover:-translate-y-0.5 cursor-pointer"
    };

    const combinedClasses = `${baseStyles} ${types[type]} ${className}`;

    if (href) {
        return (
            <a href={href} target={target} rel={rel} className={combinedClasses} onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClasses} onClick={onClick} type="submit">
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary', 'submit']),
    target: PropTypes.string,
    rel: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;