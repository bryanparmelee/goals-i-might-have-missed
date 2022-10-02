import './video.styles.css';

"<div class='modal-content'><div class='video'><iframe src='https://www.scorebat.com/embed/v/XXX/?token=MTQxNjVfMTY0ODUwMTM0M18wN2YwYjYwMzE3NTcxMTYwMjI0ZmYyN2Y0M2NiNWNmMWQxMWY1YjYz&utm_source=api&utm_medium=video&utm_campaign=apifd' frameborder='0' allowfullscreen allow='autoplay; fullscreen'></iframe></div></div>";

const Video = () => {
    
    const token = process.env.REACT_APP_SCOREBAT_TOKEN;

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='video'>
                    <iframe
                        src={`https://www.scorebat.com/embed/v/${id}/?token=${token}&utm_source=api&utm_medium=video&utm_campaign=apifd' frameborder='0' allowfullscreen allow='autoplay; fullscreen'>`}>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Video;