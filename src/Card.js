import React, {Component} from 'react';
import './Card.css';
import empty from './image/emptyheart.png';
import heart from './image/heart.png';

const imagesPath = {
    empty: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Heart_icon_red_hollow.svg/254px-Heart_icon_red_hollow.svg.png",
    heart: "https://www.sccpre.cat/mypng/full/2-20969_solid-black-heart-cliparts-transparent-background-heart-png.png"
}

class Card extends Component {
    state = {
        open: true
    }
    toggleImage = () => {
        this.setState(state => ({open:!state.open}))
    }
    getImageName = () => this.state.open ? 'empty' : 'heart'
    
    state = {
        open2: true
    }
    toggleImage2 = () => {
        this.setState(state => ({open2:!state.open2}))
    }
    getImageName2 = () => this.state.open2 ? 'empty' : 'heart'

    state = {
        open3: true
    }
    toggleImage3 = () => {
        this.setState(state => ({open3:!state.open3}))
    }
    getImageName3 = () => this.state.open3 ? 'empty' : 'heart'


 

    render() {
        const imageName = this.getImageName();
        const imageName2 = this.getImageName2();
        const imageName3 = this.getImageName3();

        return(
           
           

            <div class="body1">
                <div class="ui link cards">
                    
                    <div class="card">
                        <div class="image">
                        <img src="http://mblogthumb2.phinf.naver.net/MjAxODAzMDNfOCAg/MDAxNTIwMDQ4OTU2NTE5.UQnF4whjRdhKDSjJZN7FU-oqhnd_rWmze92ffRz8XJsg._FkO9Gaho_RDHCyIrpsUF_-LZVHvzC_AYl9TZnfnjYwg.JPEG.wjdgoxhxh/downloadfile.jpeg?type=w800"/>
                        </div>
                        <div class="content">
                        <div class="header">Title</div>
                        <div class="meta">
                            <a>by Friends</a>
                        </div>
                        <div class="description">
                            Matthew is an interior designer living in New York.
                        </div>
                        </div>
                        <div class="extra content">
                        <span class="right floated">
                      
                       
      <img className="heart outline like icon2" src={imagesPath[imageName]} onClick={this.toggleImage}  />
   
      50 likes
    </span>
                        <span>
                            <i class="user icon"></i>
                            75 Friends
                        </span>
                        </div> 
                       
                
                       
                        
                    </div>
                    <div class="card">
                        <div class="image">
                        <img src="http://mblogthumb4.phinf.naver.net/MjAxODAzMDNfMTI2/MDAxNTIwMDQ4ODk0OTM0.54mdOMQAkO1TDvymMUvUwkxqYiiYmWsxwK3Io-HbCqAg.T-WDXIZHLotctojqIV0V1j-iyFJZfq8f0JrZUYnQq3Ig.JPEG.wjdgoxhxh/%EC%88%98%EC%A0%95%EB%90%A8_%EC%B4%88%EB%A1%B1%EC%B4%88%EB%A1%B1.jpg?type=w800"/>
                        </div>
                        <div class="content">
                        <div class="header">Matt Giampietro</div>
                        <div class="meta">
                            <a>Friends</a>
                        </div>
                        <div class="description">
                            Matthew is an interior designer living in New York.
                        </div>
                        </div>
                        <div class="extra content">
                        <span class="right floated">
                        <img className="heart outline like icon2" src={imagesPath[imageName2]} onClick={this.toggleImage2}  />
      44 likes </span>
                        <span>
                            <i class="user icon"></i>
                            75 Friends
                        </span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                        <img src="https://img.fmnation.net/files/attach/images/425025/891/691/014/afa8a7f0e1ccfa92a35061a991cc1289.jpg"/>
                        </div>
                        <div class="content">
                        <div class="header">Matt Giampietro</div>
                        <div class="meta">
                            <a>Friends</a>
                        </div>
                        <div class="description">
                            Matthew is an interior designer living in New York.
                        </div>
                        </div>
                        <div class="extra content">
                        <span class="right floated">
                            
                        <img className="heart outline like icon2" src={imagesPath[imageName3]} onClick={this.toggleImage3}  />
      11 likes </span>
                        <span>
                            <i class="user icon"></i>
                            75 Friends
                        </span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Card;