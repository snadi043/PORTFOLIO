import Wrapper from "../../../Utilities/Wrapper";
import Text from "../../../Utilities/Text";
import PageIntroSection from "../../../Utilities/PageIntroSection";

import ResumeDetails from "../ResumeDetails";

import './style.scss';

const ResumeComponent = () => {
    return (
        <Wrapper className="resume-page">
              <PageIntroSection introHeading={"Resume"}>
                <Text className="fs-6">
                  Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.
                  Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.
                  Coffee Lover.
                </Text>
              </PageIntroSection>
              <ResumeDetails/>
        </Wrapper>
        );
    }
export default ResumeComponent;


