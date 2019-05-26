import React , {Component} from 'react';
import MaterialIcon from '@material/react-material-icon';

class MainImages extends Component{
     render()
    {
        return(
            <div class="row">
                <div class="main-images">
                    <div class="col-md-3 main-images-padding">
                        <img src="../../Assets/images/mediumImg.jpg" class="img-fluid"></img>
                        <div class="main-img-desc"><h6 class="main-img-desc-txt">توضیحات عکس</h6></div>
                        <img src="../../Assets/images/mediumImg.jpg" class="img-fluid main-images-margin-top"></img>
                        <div class="main-img-desc"><h6 class="main-img-desc-txt">توضیحات عکس</h6></div>
                    </div>
                    <div class="col-md-6 main-images-padding">
                        <img src="../../Assets/images/bigImg.jpg" class="img-fluid main-img-center main-images-center-margin-top"></img>
                        <div class="main-center-img-desc"><h6 class="main-img-desc-txt">توضیحات عکس</h6></div>
                    </div>
                    <div class="col-md-3 main-images-padding">
                        <img src="../../Assets/images/mediumImg.jpg" class="img-fluid"></img>
                        <div class="main-img-desc"><h6 class="main-img-desc-txt">توضیحات عکس</h6></div>
                        <img src="../../Assets/images/mediumImg.jpg" class="img-fluid main-images-margin-top"></img>
                        <div class="main-img-desc"><h6 class="main-img-desc-txt">توضیحات عکس</h6></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 main-images-padding sign-intro">
                    <img src="../../Assets/images/signup-intro.jpg" class="img-fluid"></img>
                    </div>
                </div>
            </div>
        );
    }
}
export default MainImages;