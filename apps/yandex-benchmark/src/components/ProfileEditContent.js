import {compose} from "@bem-react/core";
import {withViewDefault as withViewDefaultTextInput} from "@yandex/ui/Textinput/_view/Textinput_view_default";
import {Textinput as TextInputDesktop, withPinRoundRound, withSizeM} from "@yandex/ui/Textinput/desktop";
import {withSizeM as withSizeMButton, withViewAction, withViewDefault} from "@yandex/ui/Button/desktop";
import {UserContext} from "../index";
import {Spacer} from "@yandex/ui/Spacer";
import {Textarea as TextareaDesktop, withViewDefault as withViewDefaultTextarea, withSizeM as withSizeMTextArea} from "@yandex/ui/Textarea/desktop";
import {Button as ButtonDesktop} from "@yandex/ui/Button/Button";
import {withGapM} from "@yandex/ui/ButtonGroup/desktop";
import {ButtonGroup as ButtonGroupDesktop} from "@yandex/ui/ButtonGroup/ButtonGroup";

export const ProfileEditContent = (props) => {
    const TextInput = compose(withViewDefaultTextInput, withPinRoundRound, withSizeM)(TextInputDesktop)
    const Textarea = compose(withViewDefaultTextarea, withSizeMTextArea)(TextareaDesktop)
    const Button = compose(withSizeMButton, withViewAction, withViewDefault)(ButtonDesktop)
    const ButtonGroup = compose(withGapM)(ButtonGroupDesktop)

    const {onEnter, onCancel} = props;

    return (
        <UserContext.Consumer>
            {value =>
                <Spacer all={12} className="ProfileEditContent__body">
                    <div className="ProfileEditContent__name">
                        <TextInput
                            hint="First name"
                            type="text"
                            size="m"
                            view="default"
                            pin="round-round"
                            placeholder={value.first_name}/>
                        <TextInput
                            hint="Last name"
                            type="text"
                            size="m"
                            view="default"
                            pin="round-round"
                            placeholder={value.last_name}/>
                    </div>
                    <Textarea
                        size="m"
                        view="default"
                        hint="Bio"
                        placeholder="Your bio here..."
                    />
                    <Spacer top={12}>
                        <ButtonGroup gap="m">
                            <Button onClick={onEnter} view="action" size="m">Submit</Button>
                            <Button onClick={onCancel} view="default" size="m">Cancel</Button>
                        </ButtonGroup>
                    </Spacer>
                </Spacer>
            }
        </UserContext.Consumer>
    )
}