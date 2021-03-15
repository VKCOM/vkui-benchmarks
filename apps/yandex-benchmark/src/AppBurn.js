import {Header} from "@yandex/ui/Header";
import {ModeButtons} from "./components/ModeButtons";
import {useMemo, useState} from "react";
import {Radio, Radiobox,} from '@yandex/ui/Radiobox/desktop/bundle'

export const AppBurn = () => {
    const [listContent, setListContent] = useState([]);

    useMemo(() => {
        let genList = listContent;
        for (let i = 0; i < 500; i++) {
            genList.push(
                <Radiobox
                    key={i}
                    size="m"
                    view="default"
                >
                    <Radio>Radio №{i}</Radio>
                </Radiobox>
            )
        }
        setListContent(genList);
    }, [listContent])

    return (
        <main>
            <Header logo="Yandex.UI Burn" actions={<ModeButtons/>}/>
            <div className="App">
                <div className="App__content" style={{display: 'flex', flexDirection: 'column'}}>
                    {listContent}
                </div>
            </div>
        </main>
    );
}