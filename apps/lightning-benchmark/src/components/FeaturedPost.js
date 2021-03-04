export const FeaturedPost = ({title, subtitle, text, img}) => {
    return (
        <article className="slds-card FeaturedPost__body">
            <img src={img} height="210px"/>
            <div className="FeaturedPost__content">
                <div className="slds-text-heading_label">
                    {title}
                </div>
                <div className="slds-text-heading_small">
                    {subtitle}
                </div>
                <div className="slds-text-heading_label-normal">
                    {text}
                </div>
            </div>
        </article>
    )
}