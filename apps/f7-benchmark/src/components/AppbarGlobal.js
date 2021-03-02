import {Appbar, Link} from "framework7-react";

export const AppbarGlobal = (props) => {
    const {center, children} = props;
    return (
        <Appbar>
            <div>
                Framework7 Benchmark ~ {children}
            </div>
            <>{center}</>
            <div style={{display: "flex", gap: 8}}>
                <Link onClick={_=>{window.open('/', '_self')}}>Default</Link>
                <Link onClick={_=>{window.open('/?mode=burn', '_self')}}>Burn</Link>
                <Link onClick={_=>{window.open('/?mode=modals', '_self')}}>Modals</Link>
            </div>
        </Appbar>
    )
}