export const CricleSvg = ({ className, classNameA, classNameB }) => {
    return (
        <svg
            style={{ position: 'absolute', fill: 'none' }}
            className={className}
            width="85.6%"
            height="100%"
            viewBox="0 0 100 100"
        >
            <circle
                className={classNameA}
                stroke="rgba(255, 255, 255, 0.2)"
                cx="50"
                cy="50"
                r="48.4"
                strokeWidth="3.3"
            ></circle>
            <circle
                className={classNameB}
                stroke="#ff4b4a"
                cx="50"
                cy="50"
                r="48.4"
                strokeWidth="3.3"
                strokeDasharray="200.3052837250048"
                strokeDashoffset="300.77681878641081"
                style={{ transition: 'stroke-dashoffset 850ms ease-in-out 0s' }}
            ></circle>
        </svg>
    );
};
