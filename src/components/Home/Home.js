import React from 'react'
import './Home.scss'
import {Link} from 'react-router-dom'

import img1 from '../../images/home/image.jpg'
import zoushitu from '../../images/home/9cee1329f19f731b.png'
import kuai3 from '../../images/home/icon_base_k3_276b90c.png'
import shuangseqiu from '../../images/home/icon_ssq_6a5c7ca.png'

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* 头部 */}
        <div className="header-top">
          <div>
            <h1>可米彩票</h1>
          </div>
          <div>
            <i className="iconfont">&#xe728;</i>
            <Link to="/login"><i className="iconfont">&#xe659;</i></Link>
          </div>

        </div>
        {/* 头部内容 */}
        <div className="header-content">
          <div className="totalAward">
            可米彩票已累计中奖:<span>亿万</span>
          </div>
          <div className="header-nav">
            <ul>
              <li>
                <i className="iconfont">&#xe701;</i>
                <span>领红包</span>
              </li>
              <li>
                <i className="iconfont">&#xe635;</i>
                <span>开奖</span>
              </li>
              <li>
                <i className="iconfont">&#xe728;</i>
                <span>下载</span>
              </li>
              <li>
                <i className="iconfont">&#xe600;</i>
                <span>资讯</span>
              </li>
            </ul>
          </div>
        </div>
        {/* 主要内容 */}
        <article className="app-article">
          <section className="advertising">
            <img src={img1} />
          </section>
          <section className="article-content">
            <ul>
              <li>
                <div className="img">
                  <img src={zoushitu} />
                </div>
                <div>
                  <p>走势图</p>
                  <span>中奖走势研究</span>
                </div>
              </li>
              <li>
                <div className="img">
                  <img src={shuangseqiu} />
                </div>
                <div>
                  <p>双色球</p>
                  <span>2元中1000万</span>
                </div>
              </li>
              <li>
                <div className="img">
                  <img src={kuai3} />
                </div>
                <div>
                  <p>快3系列</p>
                  <span>暂停销售</span>
                </div>
              </li>
            </ul>
          </section>
        </article>
        {/* 尾部 */}
        <footer className="footer">
          网易旗下乐得公司版权所有 ©2011-2019
        </footer>
      </div>
    )
  }
}

export default Home