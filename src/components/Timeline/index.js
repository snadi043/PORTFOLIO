import TimeLineData from "../TimeLineData";
import TimeLineItem from "../TimelineItem";
import './style.scss';

const Timeline = () =>
    TimeLineData.length > 0 && (
        <div className="timeline-container">
            {TimeLineData.map((data, idx) => (
                <TimeLineItem data={data} key={idx} />
            ))}
        </div>
    );

export default Timeline;