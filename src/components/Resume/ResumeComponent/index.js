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
                The below Timeline walks you through my previous professional experience and taks in brief which I contributed in. 
                As a software enthusiatic person I am happy that I took leverage to contribute for Voluntary Projects when I was working in my full-time positions.
                <b>"It's like hitting Gym though you lift weights at work."</b>
                </Text>
              </PageIntroSection>
              <ResumeDetails/>
        </Wrapper>
        );
    }
export default ResumeComponent;


