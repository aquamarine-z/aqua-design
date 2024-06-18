import {Link} from "react-router-dom";

export function Index(){
    return(
        <>
            <Link to={"/modal_dialog"}>ModalDialog组件演示</Link>
            <Link to={"/drag"}>Draggable组件演示</Link>
            <Link to={"/glass"}>GlassTheme组件演示 </Link>
        </>

    )
}