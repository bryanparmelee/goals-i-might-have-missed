import './video.styles.css';

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