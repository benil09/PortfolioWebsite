import './left.css'
import image from '../../assets/Me.jpeg'


const Left=()=>{
    return(
        <>
        <div className="image">
            <div className="outer">
                <div className="middle">
                    <div className="inner">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>

          
        </div>
            <a href="#" className='scroll'>Scroll  Down</a>
        </>

    );
}

export default Left;