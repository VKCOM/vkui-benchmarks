import {Children, useMemo, useState} from "react";

export const PageView = ({children, activePage}) => {
    const [currentPage, setPage] = useState();
    useMemo(() => {
        Children.map(children, (child) => {
            if (activePage === child.props.id) {
                setPage(child)
            }
        })
    }, [children, activePage])

    return <main>{currentPage}</main>;
}