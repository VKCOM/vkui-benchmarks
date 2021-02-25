import {Children, useEffect, useState} from "react";

export const PageView = ({activePage, children}) => {
    const [currentPage, setCurrentPage] = useState('Loading...');

    useEffect(() => {
        Children.map(children, ((child) => {
            if (activePage === child.props.id) {
                setCurrentPage(child);
            }
        }))
    }, [activePage, children])

    return (currentPage);
}