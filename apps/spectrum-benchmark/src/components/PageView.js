import {View} from "@adobe/react-spectrum";
import {Children, useEffect, useState} from "react";

export const PageView = ({activePage, children}) => {
    const [currentPage, setPage] = useState(<></>);

    useEffect(()=>{
        Children.map(children, (child) => {
            if (activePage === child.props.id) {
                return setPage(child);
            }
        })
    }, [children, activePage])

    return (
        <View padding="size-100" gridArea="content">
            {currentPage}
        </View>
    );
}