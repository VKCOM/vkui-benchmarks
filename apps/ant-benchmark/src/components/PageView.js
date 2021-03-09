import {Children, useEffect, useState} from "react";
import {Content} from "antd/es/layout/layout";

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
        <Content>
            {currentPage}
        </Content>
    );
}