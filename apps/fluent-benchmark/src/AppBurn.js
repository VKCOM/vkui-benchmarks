import {useMemo, useState} from "react";
import {Checkbox, Stack} from "@fluentui/react";
import {Header} from "./components/Header";
import {setIconOptions} from '@fluentui/react/lib/Styling';

export const AppBurn = () => {
    const [listContent, setListContent] = useState([]);
    setIconOptions({
        disableWarnings: true
    });

    useMemo(() => {
        let genList = listContent;
        for (let i = 0; i < 1000; i++) {
            genList.push(
                <Checkbox key={"item" + i} value={`value${i}`} label={"ListItem №" + i}/>
            )
        }
        setListContent(genList);
    }, [listContent])

    return (
        <Stack>
            <Header/>
            {listContent}
        </Stack>
    )
}