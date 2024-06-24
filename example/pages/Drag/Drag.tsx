import AqGlassTheme from "../../../packages/themes/GlassTheme/AqGlassTheme";
import AqDraggable from "../../../packages/components/AqDraggable";
import AqColumn from "../../../packages/components/AqColumn";

export function Drag(){
    return(
        <>
            <AqGlassTheme >
                <div style={{position:"relative",height:"50vh",width:"50vw",overflow:"hidden"}}>
                    可拖动的范围
                    <AqDraggable position={"fixed"} originalPosition={{left:100,top:100}}>
                        <h1 style={{border: "1px solid black", userSelect: "none",background:"white"}}>我是拖动的目标 Absolute 和父组件的范围有关</h1>
                    </AqDraggable>
                </div>
            </AqGlassTheme>
            <AqDraggable position={"fixed"} originalPosition={{left:0,top:0}}>
                <h1 style={{border: "1px solid black",height:"400px",width:"400px","borderRadius":"0px", userSelect: "none",background:"white"}}>我是拖动的目标 Fixed 只跟浏览器视口有关</h1>
            </AqDraggable>
            <AqDraggable position={"absolute"} originalPosition={{left:100,top:100}}>
                <h1 style={{border: "1px solid black", userSelect: "none",background:"white"}}>我是拖动的目标 Absolute 和浏览器Page宽高有关</h1>
            </AqDraggable>
            <AqDraggable position={"absolute"}>
                <AqGlassTheme>

                    <div style={{height: "400px", "width": "400px"}}>
                        <AqColumn>
                            <p>这是一个新的div</p>
                        </AqColumn>
                    </div>


                </AqGlassTheme>
            </AqDraggable>

            <div style={{height: "200vh", background: "black"}}></div>
        </>
    )
}