import * as React from "react";

import {Records} from "./Records"

interface HeaderProps {
    isDisplaying: boolean
    onShow: () => void
    onHide: () => void
}

export const Header = (props: HeaderProps) => {
    if(props.isDisplaying === true) return <button onClick={props.onHide} >Hide</button>
    else return <button onClick={props.onShow} >Show</button>
}