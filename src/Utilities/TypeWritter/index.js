import Typewriter from 'typewriter-effect';
import Text from '../Text';
import './style.scss';

const TypeWritterComponent = () => {
    return(
        <div className='container' 
            style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                }}>
                <Text style={{textAlign:'end'}}> I am a </Text>
            <div className='container align-self-baseline'>
                <Typewriter
                className='typewriter'
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