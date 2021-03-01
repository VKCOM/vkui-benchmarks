import {Text} from "@yandex/ui/Text/bundle";
import {Spacer} from "@yandex/ui/Spacer";
import {Button} from "@yandex/ui/Button/desktop/bundle";
import {Select} from "@yandex/ui/Select/desktop/bundle";
import {Radio, Radiobox} from "@yandex/ui/Radiobox/desktop/bundle";

export const FiltersContent = ({openCountries, openUserInfo}) => {
    const contentStyles = {display: 'flex', flexDirection: 'column'};

    return (
        <>
            <Spacer all={12} style={contentStyles}>
                <Text typography="headline-s">
                    Filters
                </Text>
                <Spacer top={12} style={contentStyles}>
                    <Button onClick={openCountries} view="clear" size="m">
                        Select country
                    </Button>
                    <Button onClick={openUserInfo} view="clear" size="m">
                        User info
                    </Button>
                </Spacer>
                <Spacer top={12} style={contentStyles}>
                    <Text typography="caption-xl">City</Text>
                    <Select
                        size="m"
                        view="default"
                        placeholder='Select city'
                        value='a'
                        options={[
                            {value: 'a', content: 'Saint-Petersburg'},
                            {value: 'b', content: 'Moscow'},
                            {value: 'c', content: 'Kirov'},
                        ]}/>
                </Spacer>
                <Spacer top={12} style={contentStyles}>
                    <Text typography="caption-xl">Gender</Text>
                    <Radiobox size="m"
                              view="default">
                        <Radio>
                            Other
                        </Radio>
                    </Radiobox>
                    <Radiobox size="m"
                              view="default">
                        <Radio>
                            Male
                        </Radio>
                    </Radiobox>
                    <Radiobox size="m"
                              view="default">
                        <Radio>
                            Female
                        </Radio>
                    </Radiobox>
                </Spacer>
            </Spacer>
        </>
    )
}