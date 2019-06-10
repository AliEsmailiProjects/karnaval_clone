import React , {Component} from 'react';

class sidebar_right extends Component{
    rightsidePostContent=()=>{
        let rightsidePostContent=[];
        for(let i=0 ;i<9; i++)
        {
            rightsidePostContent.push(
               <div class="row rightside-post-height">
                       <div class="col-md-6 padd">
                       <a href="#" class="right-side-small-img-head-link">
                           <h6 class="right right-side-small-img-head">
                               عنوان عکس
                           </h6>
                       </a>
                       <h6 class="right-side-small-img-desc">
                           توضیحات عکس
                       </h6>
                       <h6 class="right-side-small-img-date">
                       ۱۳۹۷/۱۱/۲۶ ۱۱:۰۰
                       </h6>
                   </div>
                   <div class="col-md-6">
                       <a href="#">
                           <img src="../../Assets/images/smallImg.jpg" class="img-fluid left-side-img"></img>
                       </a>
                   </div>    
               </div>
           );
        }
        return rightsidePostContent;
    }
    rightsidePost=()=>{
        let rightsidePost=[];
        for(let i=0 ;i<4; i++)
        {
           rightsidePost.push(
              <div>
                  <h6 class="right-side-header">
                        طبیعت بکر ایران زمین
                    </h6>   
                    <div class="row">
                    {
                        this.rightsidePostContent()
                    }
                    </div> 
              </div>
           );
        }
        return rightsidePost;
    }
     render()
    {
        return(
            <div class="col-md-3 side-right ">   
                <div class="sidebar-box-shdow">
                    <h6 class="right-side-header">
                    محو تماشا شوید
                    </h6>   
                    <div>
                        <a href="#">
                        <img src="../../Assets/images/right-side-img.jpg" class="img-fluid left-side-img"></img>
                        </a>
                    </div>     
                    <div>
                        <h6 class="left left-side-img-desc">
                            توضیحات عکس
                        </h6>
                    </div>
                </div>
                <div class="sidebar-box-shdow">
                    {
                        this.rightsidePost()
                    }
                </div>
            </div>
        );
    }
}
export default sidebar_right;