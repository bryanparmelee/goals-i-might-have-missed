import './video.styles.css';

// "<div class='modal-content'><div class='video'><iframe src='https://www.scorebat.com/embed/v/XXX/?token=MTQxNjVfMTY0ODUwMTM0M18wN2YwYjYwMzE3NTcxMTYwMjI0ZmYyN2Y0M2NiNWNmMWQxMWY1YjYz&utm_source=api&utm_medium=video&utm_campaign=apifd' frameborder='0' allowfullscreen allow='autoplay; fullscreen'></iframe></div></div>";

const Video = ({embed, closeModal }) => {
    
    return (
        <div 
            className='modal'
            onClick={closeModal}
        >
            <div className='modal-content'>
                <div className='video'>
                  <iframe
                    src={embed}  
                    frameBorder='0' 
                    allowFullScreen allow='autoplay; fullscreen'                    
                  >

                  </iframe>
                </div>
            </div>
        </div>
    )
}

export default Video;