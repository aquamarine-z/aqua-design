import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./AqFlex.module.less";
export function AqFlex(props) {
    return _jsx("div", { style: {
            display: "flex",
            flexDirection: props.flexDirection,
            justifyContent: props.justifyContent,
            alignItems: props.alignItems
        }, className: styles.aq_flex, children: props.children });
}
AqFlex.defaultProps = {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    children: []
};
