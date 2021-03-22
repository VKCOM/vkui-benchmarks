import {Navbar} from "./components/Navbar";
import {useState, useMemo} from "react";
import {Radio, RadioGroup} from "@salesforce/design-system-react";

export const AppBurn = () => {
    const [listContent, setListContent] = useState([]);

    useMemo(() => {
        let genList = listContent;
        for (let i = 0; i < 500; i++) {
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
            <RadioGroup className="BurnPage">
                {listContent}
            </RadioGroup>
        </div>
    )
}