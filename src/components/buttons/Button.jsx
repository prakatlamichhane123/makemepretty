import './Button.css'

export default function Button(props){
    return(
        <><div className="button-container">
            <span className="btn-name">{props.children}</span>
            </div></>
    );
}