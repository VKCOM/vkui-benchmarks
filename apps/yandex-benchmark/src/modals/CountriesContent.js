import {Text} from "@yandex/ui/Text/bundle";
import {Spacer} from "@yandex/ui/Spacer";
import {Button} from "@yandex/ui/Button/desktop/bundle";
import {Radio, Radiobox} from "@yandex/ui/Radiobox/desktop/bundle";

export const CountriesContent = ({onClose, openUserInfo}) => {
    const contentStyles = {display: 'flex', flexDirection: 'column'};

    return (
        <Spacer all={12} style={contentStyles}>
            <Text typography="headline-s">
                Select country
            </Text>
            <Spacer top={12} style={contentStyles}>
                <Button onClick={openUserInfo} size="m" view="clear">
                    User info
                </Button>
            </Spacer>
            <Spacer vertical={12} style={contentStyles}>
                {['Russia', 'Ukraine', 'Belarus', 'Kazakhstan', 'Azerbaijan', 'Armenia', 'Georgia', 'Izrael', 'United States'].map(
                    (item, key) => (
                        <Radiobox key={key} name="country" size="m" view="default">
                            <Radio>
                                {item}
                            </Radio>
                        </Radiobox>
                    ))
                }
            </Spacer>
            <Button onClick={onClose} size="m" view="pseudo">
                Back
            </Button>
        </Spacer>
    )
}