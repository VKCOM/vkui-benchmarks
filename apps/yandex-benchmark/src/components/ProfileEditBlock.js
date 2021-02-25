import {Spacer} from "@yandex/ui/Spacer";
import {compose} from "@bem-react/core";
import {withTypographyCaptionXL, withTypographyHeadlineS} from "@yandex/ui/Text/desktop";
import {Text as TextDesktop} from "@yandex/ui/Text/Text";
import {withSizeM as withSizeMButton} from "@yandex/ui/Button/_size/Button_size_m";
import {withViewPseudo} from "@yandex/ui/Button/desktop";
import {Button as ButtonDesktop} from "@yandex/ui/Button/Button";

export const ProfileEditBlock = (props) => {
    const Text = compose(withTypographyHeadlineS, withTypographyCaptionXL)(TextDesktop)
    const Button = compose(withSizeMButton, withViewPseudo)(ButtonDesktop)
    const {onClick} = props;

    return (
        <div className="Card">
            <Spacer all={12} className="ProfileEditBlock__body">
                <div className="ProfileEditBlock__heading">
                    <Text typography="headline-s">
                        Modify your personal data
                    </Text>
                    <Text typography="caption-xl">
                        First name, Last name, Bio and etc...
                    </Text>
                </div>
                <div className="ProfileEditBlock__action">
                    <Button onClick={onClick} view="pseudo" size="m">
                        Edit
                    </Button>
                </div>
            </Spacer>
        </div>
    )
}