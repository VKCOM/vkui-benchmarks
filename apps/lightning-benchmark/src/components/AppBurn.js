import {Navbar} from "./Navbar";
import {useState, useMemo} from "react";
import {Radio} from "@salesforce/design-system-react";

export const AppBurn = () => {
    const [listContent, setListContent] = useState([]);

    useMemo(() => {
        let genList = listContent;
        for (let i = 0; i < 1000; i++) {
            genList.push(
                <Radio key={i} labels={{label: `value${i}`}}>
                    {"ListItem №"+i}
                </Radio>
            )
        }
        setListContent(genList);
    }, [listContent])

    return (
        <div className="App">
            <Navbar/>
            <div className="BurnPage">
                {listContent}
            </div>
        </div>
    )
}