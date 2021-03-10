import {Children, useEffect, useState} from "react";
import {StackItem} from "@fluentui/react";

export const PageView = ({activePage, children}) => {
    const [currentPage, setPage] = useState(<></>);

    useEffect(() => {
        Children.map(children, (child) => {
            if (activePage === child.props.id) {
                return setPage(child);
            }
        })
    }, [children, activePage])

    return (
        <StackItem grow className="Side">
            {currentPage}
        </StackItem>
    );
}