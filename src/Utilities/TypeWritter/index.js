import Typewriter from 'typewriter-effect';
import Text from '../Text';

const TypeWritterComponent = () => {
    return(
        <div className='container' 
            style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                }}>
                <Text> I am a </Text>
            <div className='container'>
                <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('')
                    .callFunction(() => {
                        console.log('String typed out!');
                })
                .pauseFor(1000)
                .deleteAll()
                .callFunction(() => {
                    console.log('All strings were deleted');
                })
                .start();
                }}
                options={{
                    strings: ['FULLSTACK SOFTWARE DEVELOPER', 'MOBILE APPLICATION DEVELOPER'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed:75,
                }}/>
            </div>
        </div>
    );
}
export default TypeWritterComponent;