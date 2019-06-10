import React , {Component} from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component{
     render()
    {
        return(
            <div class="row Footer-box">
                <div class="col-md-2"> 
                </div>
                <div class="col-md-3"> 
                    <div class="footer-head-text">
                        همراه ما باشید
                    </div>
                    <div>

                    </div>
                    <div class="footer-head-text">
                        عضویت در خبرنامه
                    </div>
                    <div class="newslater">
                        <input type="text" class="to-right newslater-input" placeholder="آدرس ایمیل"></input>
                        <div class="newslater-submit-btn to-left" > 
                            -
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
                    <FontAwesomeIcon icon="check-square" />
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
            </div>
        );
    }
}
export default Footer;