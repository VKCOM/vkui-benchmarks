import {Text} from "@yandex/ui/Text/bundle";
import {Spacer} from "@yandex/ui/Spacer";
import {Button} from "@yandex/ui/Button/desktop/bundle";

export const UserInfoContent = ({onClose}) => {
    const contentStyles = {display: 'flex', flexDirection: 'column'};

    return (
        <Spacer all={12} style={contentStyles}>
            <Text typography="headline-s">
                User info
            </Text>
            <Spacer top={12} style={contentStyles}>
                <Text typography="caption-xl">Birth date</Text>
                <Text typography="body-long-l">30th January 1993</Text>
            </Spacer>
            <Spacer top={12} style={contentStyles}>
                <Text typography="caption-xl">Hometown</Text>
                <Text typography="body-long-l">Erevan</Text>
            </Spacer>
            <Spacer vertical={12} style={contentStyles}>
                <Text typography="caption-xl">Place of work</Text>
                <Text typography="body-long-l">VK Team</Text>
            </Spacer>
            <Button onClick={onClose} size="m" view="pseudo">
                Back
            </Button>
        </Spacer>
    );
}