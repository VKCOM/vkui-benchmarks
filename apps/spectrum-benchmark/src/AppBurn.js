import {defaultTheme, Provider, RadioGroup, Radio, View} from "@adobe/react-spectrum";
import {HeaderView} from "./components/HeaderView";
import {useState, useMemo} from "react";

export const AppBurn = () => {
    const [listContent, setListContent] = useState([]);

    useMemo(() => {
        let genList = listContent;
        for (let i = 0; i < 1000; i++) {
            genList.push(
                <Radio key={i} value={`value${i}`}>
                    {"ListItem №"+i}
                </Radio>
            )
        }
        setListContent(genList);
    }, [listContent])

    return (
        <Provider theme={defaultTheme}>
            <HeaderView>
                Burn
            </HeaderView>
            <View padding="size-100">
                <RadioGroup label="Favorite pet">
                    {listContent}
                </RadioGroup>
            </View>
        </Provider>
    )
}