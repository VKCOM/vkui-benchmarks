import {Text as TextDesktop, withTypographyCaptionXL, withTypographyHeadlineS} from "@yandex/ui/Text/desktop";
import {compose} from "@bem-react/core";
import {withSizeM, withViewAction, withViewDefault} from "@yandex/ui/Button/desktop";
import {Button as ButtonDesktop} from "@yandex/ui/Button/Button";
import {Spacer} from "@yandex/ui/Spacer";
import {
    Textinput as TextInputDesktop,
    withPinRoundRound,
    withViewDefault as withViewDefaultTextInput
} from "@yandex/ui/Textinput/desktop";
import {ButtonGroup as ButtonGroupDesktop, withGapM} from "@yandex/ui/ButtonGroup/desktop";

export const ConfirmEmail = ({
                                 onEnter = () => {
                                 }, onCancel = () => {
    }, cancelable = false
                             }) => {
    const Button = compose(withSizeM, withViewAction, withViewDefault)(ButtonDesktop)
    const Text = compose(withTypographyHeadlineS, withTypographyCaptionXL)(TextDesktop)
    const TextInput = compose(withViewDefaultTextInput, withPinRoundRound, withSizeM)(TextInputDesktop)
    const ButtonGroup = compose(withGapM)(ButtonGroupDesktop)

    return (
        <section className="Card">
            <Spacer all={16}>
                <Text typography="headline-s">
                    Continue setup of your account
                </Text>
                <Spacer bottom={2}>
                    <Text typography="caption-xl">
                        You should confirm your email address to keep your account secure
                    </Text>
                </Spacer>
                <Spacer vertical={8}>
                    <TextInput type="text" size="m" view="default" placeholder="Enter your code" pin="round-round"/>
                </Spacer>
                <ButtonGroup gap="m">
                    <Button onClick={() => {
                        onEnter()
                    }} view="action" size="m">
                        Submit
                    </Button>
                    {cancelable && <Button onClick={() => {
                        onCancel()
                    }} view="default" size="m">
                        Later
                    </Button>}
                </ButtonGroup>
            </Spacer>
        </section>
    )
}