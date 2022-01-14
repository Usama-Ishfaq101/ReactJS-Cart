
const Button=(props)=>(

    <button onClick={props.handleClick} className="btn btn-primary" >
        {props.title}
    </button>
);
export default Button