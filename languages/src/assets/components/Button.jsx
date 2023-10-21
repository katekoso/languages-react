function Button(props) {
    const {buttonImg, theme} = props;
    return (
        <button className={theme.color}>
            <object type="image/svg+xml" data={buttonImg}></object>
        </button>
    );
}

export default Button;