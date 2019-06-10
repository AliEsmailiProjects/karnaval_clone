import React , {Component} from 'react';
import './Footer.css';
import MaterialIcon from '@material/react-material-icon';

class Footer extends Component{

    componentDidMount()
    {
       
        fetch('http://karnaval.herokuapp.com/api/expense/title?id=3')
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch((error) => {
            alert(error)
        })
    }
     render()
    {
        return(
            <div class="row Footer-box">
                <div class="col-md-2"> 
                </div>
                <div class="col-md-3"> 
                    <div class="footer-head-text">
                        
                    </div>
                    <div>

                    </div>
                    <div class="footer-head-text">
                        عضویت در خبرنامه
                    </div>
                    <div class="newslater">
                        <input type="text" class="to-right newslater-input" placeholder="آدرس ایمیل"></input>
                        <div class="newslater-submit-btn to-left" > 
                        <MaterialIcon icon='keyboard_backspace' className="email-icon"></MaterialIcon>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div class="col-md-3"> 
                    <div class="footer-head-text">
                    سرویس‌های کارناوال
                    </div>
                    <div>
                    <MaterialIcon icon='rss_feed' className="footer-icon"></MaterialIcon> 
                    <p class="services-txt">بلاگ کارناوال</p>

                    <MaterialIcon icon='play_arrow' className="footer-icon"></MaterialIcon>
                    <p class="services-txt">ویدیو HD</p>
                    
                    <MaterialIcon icon='image' className="footer-icon"></MaterialIcon>
                    <p class="services-txt">عکاسخانه</p>
                    
                    <MaterialIcon icon='wb_sunny' className="footer-icon"></MaterialIcon>
                    <p class="services-txt">آب و هوا</p>
                    
                    <MaterialIcon icon='directions' className="footer-icon"></MaterialIcon>
                    <p class="services-txt">نقشه و مسیریابی</p>
                    </div>
                </div>
                <div class="col-md-3"> 
                    <div class="row">
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-8">
                        <div class="row">
                            <img src="Assets/images/site-logo.jpg" class="img-responsive to-right"/>
                            </div>
                            <div class="row">
                                <ul class="footer-list">
                                <li>
                                    همکاری با کارناوال
                                </li>
                                <li>
                                    فرصت های شغلی
                                </li>
                                <li>
                                تـبــلـــیــغـات  
                                </li>
                                <li>
                                حریـم خصوصی 
                                </li>
                                <li>
                                شـرایط و ضوابط
                                </li>
                                <li>
                                داســـتــان مـا
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-1"> 
                </div>
                <div class="row copyRight-box">
                    <p class="copyRight-txt">
                    کلیه حقوق مادی و معنوی برای کارناوال محفوظ است. استفاده از مطالب و تصاویر سایت تنها در صورت پذیرش شرایط و ضوابط کارناوال امکان پذیر است.
                    </p>
                </div>
            </div>
        );
    }
}
export default Footer;