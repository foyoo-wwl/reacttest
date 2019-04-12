import React from 'react'
import {Li} from './style.js'
import { Rate } from 'antd';
const topUi = (list,start)=>{
    return(
        list.map((item,index)=>{
            return(
                <Li key={item.id}>
                    <div className="item">
                        <div className="pic">
                            <em className="">{start +index+1}</em>
                            <a href={"/douban/detail/"+item.id} target='_blank' rel="noopener noreferrer"> 
                                <img width="100" alt={item.title} src={item.images.small} className="" />
                            </a>
                        </div>
                        <div className="info">
                            <div className="hd">
                                <a href={"/douban/detail/"+item.id} className="" target="_blank" rel="noopener noreferrer">
                                    <span className="title">{item.title}</span>
                                </a>
                            </div>
                            <div className="bd">
                                <p className="">
                                    导演：
                                    {
                                        item.directors.map((item)=>
                                            item.name
                                        )                                                      
                                    }
                                    <br/>主演：
                                    {
                                        item.casts.map((item)=>
                                            item.name
                                        )                                                      
                                    }
                                    <br/>题材：
                                    {
                                        item.genres.map((item)=>
                                            item
                                        )                                                            
                                    }
                                </p>                             
                            </div>
                            <div className="star">
                                    <span className="rating45-t"></span>
                                    <span className="rating_num" property="v:average">{item.rating.average}</span>
                                    <span property="v:best" content="10.0"></span>
                                    <span>{item.collect_count}人评价</span>
                                    <Rate 
                                        disabled  
                                        defaultValue={Math.round(item.rating.average)/2} 
                                        count={5}
                                    />({item.rating.average}分)
                            </div>
                        </div>
                    </div>
                </Li>                               
            )
        })
    )
}
export default topUi