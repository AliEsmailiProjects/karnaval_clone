import React , {Component} from 'react';

class sidebar_left extends Component{
    sidebarLeftContent=()=>{
        let sidebarLeftContent=[];
        for(let i=0 ; i <5 ; i++){
            sidebarLeftContent.push(
                <div>
                <div>
                    <a href="#">
                    <img src="../../Assets/images/sidebar-left-img.jpg" class="img-fluid left-side-img"></img>
                    </a>
                </div>     
                <div>
                    <h6 class="left-side-img-desc">
                        توضیحات عکس
                    </h6>
                </div>
                </div>
            )
        }
        return sidebarLeftContent
    }
    sidebarLeft=()=>{
        let sidebarLeft=[];
        for(let i=0 ; i <5 ; i++)
        {
            sidebarLeft.push(
                <div>
                <h6 class="left-side-header">
                    لمس طبیعت با کیفیت HD
                </h6>   
                    {
                        this.sidebarLeftContent()
                    }
                </div>
            )
        }
        return sidebarLeft;
    }
     render()
    {
        return(
            <div class="col-md-2 side-left"> 
                {
                    this.sidebarLeft()
                }
            </div>
        );
    }
}
export default sidebar_left;