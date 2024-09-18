const Button = (props) => {
    const { children = "-", variant = "bg-[#B88E2F]", height = "h-10", width = "w-30", mt = "mt-0", onClick=() => {}, type = "button"} = props;
    return (
        <button className={`${variant} ${height} ${width} ${mt} px-6 font-semibold py-2 rounded text-white`} type={type}>
            {children}
        </button>
    );
};

export default Button;