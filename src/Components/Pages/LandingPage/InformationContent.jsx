import { InformationContentData } from "../../../ServiceDataBase/ManualData/Content";
import Instagram from "../../FeaturedComponents/SocialLinks/Instagram/Instagram";




const InformationContent = () => {
    return (
        <>
            <section className="information_content">
                <div className="content_elements">
                    {
                        InformationContentData.map((content) => {
                            return (
                                <>
                                    <h2>{content.contentOne}</h2>
                                    <h2>{content.contentTwo}</h2>
                                </>
                            )
                        })
                    }

                    <Instagram />
                </div>
            </section>
        </>
    )
}



export default InformationContent;