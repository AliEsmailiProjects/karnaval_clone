import React , {Component} from 'react';
import MaterialIcon from '@material/react-material-icon';

class Header extends Component{
     render()
    {
        return(
            <div class="row Header-box">
                <div class="col-md-3 ">
                    <div class="signIn-btn">
                      ورود  
                    </div>
                    <div class="display-inline">
                    <div class="signUp-btn">
                        عضویت   
                    </div>
                    <MaterialIcon icon='chat_bubble' className="search-icon">1</MaterialIcon>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="row">
                        <div class="search-box">
                            <p class="search-txt">
                            جستجوی شهر، کشور ، جاذبه گردشگری و ...  
                            </p>
                            <MaterialIcon icon='search' hasRipple={true} className="search-icon"/>
                        </div>
                        <div class="divider">
                        </div>
                    </div>
                    <div class="row">
                        <div class="topnav">
                        <a href="#">گردشگری</a>
                            <a href="#">طبیعت گردی</a>
                            <a href="#">ایرانگردی</a>
                            <a href="#">جهانگردی</a>
                            <a href="#">راهنمای سفر</a>
                            <a href="#">فصل سفر</a>
                            <a href="#">فرهنگ ملل</a>
                            <a href="#">عصر نوین</a>
                            <a href="#">آموزش</a>
                            <a href="#">نیم نگاه</a>
                            <a href="#" class="video-nav">
                                ویدیو HD 
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2" >
                    <img src="Assets/images/site-logo.jpg" class="img-responsive to-right"/>
                </div>
            </div>
        );
    }
}
export default Header;