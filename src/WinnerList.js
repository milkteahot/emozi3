import React, { Component } from 'react';
import './WinnerList.css';

class WinnerList extends Component {
    render() {
        return(
            <div class="ui ordered horizontal list">
                <div class="item">
                    <img class="ui avatar image" src="http://mblogthumb2.phinf.naver.net/MjAxODAzMDNfOCAg/MDAxNTIwMDQ4OTU2NTE5.UQnF4whjRdhKDSjJZN7FU-oqhnd_rWmze92ffRz8XJsg._FkO9Gaho_RDHCyIrpsUF_-LZVHvzC_AYl9TZnfnjYwg.JPEG.wjdgoxhxh/downloadfile.jpeg?type=w800"
                     />
                    <div class="content">
                    <div class="header">오액토</div>
                    50 하트
                    </div>
                </div>
                <div class="item">
                    <img class="ui avatar image" src="http://mblogthumb4.phinf.naver.net/MjAxODAzMDNfMTI2/MDAxNTIwMDQ4ODk0OTM0.54mdOMQAkO1TDvymMUvUwkxqYiiYmWsxwK3Io-HbCqAg.T-WDXIZHLotctojqIV0V1j-iyFJZfq8f0JrZUYnQq3Ig.JPEG.wjdgoxhxh/%EC%88%98%EC%A0%95%EB%90%A8_%EC%B4%88%EB%A1%B1%EC%B4%88%EB%A1%B1.jpg?type=w800"
                     />
                    <div class="content">
                    <div class="header">대학생활</div>
                    44 하트
                    </div>
                </div>
                <div class="item">
                    <img class="ui avatar image" src="https://img.fmnation.net/files/attach/images/425025/891/691/014/afa8a7f0e1ccfa92a35061a991cc1289.jpg"/>
                    <div class="content">
                    <div class="header">화여니의 셤기간</div>
                    11 하트
                    </div>
                </div>
            </div>

            
        );
    }
}

export default WinnerList;