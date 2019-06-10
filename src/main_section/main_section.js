import React , {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';

class main_section extends Component{
    mainPosts=()=>{
        let mainPosts=[];
        for(let i = 0 ; i<5 ;i ++)
        {
            mainPosts.push(
                <div class="row post-shadow">      
                        <div class="main-section-head-category">
                            <a href="#">
                            جنگل های ایران و جهان
                            </a>
                        </div>  
                        <div class="main-section-head-title">
                            <a href="#">
                            جنگل ابر شاهرود | مرز زیبایی دو اقلیم
                            </a>
                        </div>  
                        <div class="row image-slideshow">
                        <Carousel showIndicators={false} showStatus={false} showThumbs={false} interval={2500} autoPlay={true} >
                            <div>
                                <img src="../../Assets/images/post-img-big4.jpg" />
                            
                            </div>
                            <div>
                                <img src="../../Assets/images/post-img-big3.jpg" />
                                
                            </div>
                            <div>
                                <img src="../../Assets/images/post-img-big2.jpg" />
                            
                            </div>
                        </Carousel>
                        </div>
                        <div class="row post-description-box">
                            <h6>
                            همراه کارناوال شوید و دست های تان را به ما دهید تا شما را به جنگل ابر شاهرود ببریم و از فراز ابرها یکی از زیباترین جنگل های ایران را به تماشا بنشینیم. مکانی سحرانگیز و رویایی که هر شما را شیفته طبیعت منحصر به فرد خود می کند و خاطره ای فراموش نشدنی از سفر به این گوشه سرسبز کشورمان برای تان به جای می گذارد. پس همراه مان باشید تا در مورد راهنمای سفر به جنگل ابر برای تان بگوییم، با بهترین زمان سفر به جنگل ابر آشنا شویم و در مورد اقامت در جنگل ابر اطلاعاتی به دست بیاوریم.
                            </h6>
                        </div>
                        <div class="post-description-show-all">
                            <a href="#">
                                ادامه مطلب
                            </a>
                        </div>
                        <div class="row post-footer">
                            <div class="col-md-3 ">
                            
                            </div>
                            <div class="col-md-3">
                                
                            </div>
                            <div class="col-md-3">
                                
                            </div>
                        </div>
                </div>
            );
        }
        return mainPosts;
    }
     render()
    {
        return(
            <div class="col-md-7 main-section">
                {
                    this.mainPosts()
                }
            </div>
        );
    }
}
export default main_section;