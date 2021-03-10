import {DocumentCard, DocumentCardActivity, DocumentCardType} from "@fluentui/react";

export const FeedPost = ({avatar, children, time, authorName}) => {
    return (
        <DocumentCard mode={DocumentCardType.normal}>
            <DocumentCardActivity activity={time} people={[{name: authorName, profileImageSrc: avatar}]}/>
            <div className="FeedPost__content">
                {children}
            </div>
        </DocumentCard>
    )
}