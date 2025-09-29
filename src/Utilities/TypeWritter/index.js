import Typewriter from 'typewriter-effect';

import Wrapper from '../Wrapper';
import Text from '../Text';

import './style.scss';

const TypeWritterComponent = () => {
    return(
        <Wrapper className='container-fluid textWritterContainer'>
            <Text className="textWritterContainerText"> I'm</Text>
            <div className='container-fluid typeWritterWrapper'>
                <Typewriter
                className='typewriter'
                onInit={(typewriter) => {
                    typewriter.typeString('')
                    .callFunction(() => {
                })
                .pauseFor(1000)
                .deleteAll()
                .callFunction(() => {
                })
                .start();
                }}
                options={{
                    strings: ['"SOFTWARE DEVELOPER"', '"NATURE PHOTOGRAPHER!!!"', '"COFFEE LOVER..."'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed:75,
                }}/>
            </div>
        </Wrapper>
    );
}
export default TypeWritterComponent;