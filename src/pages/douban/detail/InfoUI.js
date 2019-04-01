import React,{Fragment} from 'react'
import { Rate } from 'antd'
const InfoUi = (data) =>{
    if(data.year){
        return(
            <Fragment>
                <h1>{data.title}</h1>
                <span>
                    <span className="pl">导演：</span>
                    <span className="attrs">
                        {
                            data.directors.map((item)=>(
                                
                                <a href={item.alt} key={item.id}>{item.name}</a>
                            ))
                        }
                        
                    </span>
                </span>
                <br/>
                <span className="actor">
                    <span className="pl">主演</span>： 
                    <span className="attrs">
                        {
                            data.casts.map((item)=>(
                                <span key={item.id}>
                                    <a href={item.alt}>{item.name}</a> /
                                </span>
                            ))
                        }
                    </span>
                </span>
                <br/>
                <span className="pl">类型：</span> 
                <span>
                        {
                            data.genres.map((item)=>(
                                <span key={item}>{item+' '}</span>
                            ))
                        }
                </span>           
                <br/>                    
                <span className="pl">制片国家/地区：</span>
                <span>
                    {
                        data.countries.map((item)=>{
                            return(
                                item+' '
                            )
                        })
                    }
                </span>
                <br/>
                <span className="pl">上映日期：</span> <span content="2019-03-22(中国大陆)">{data.year}</span><br/>
                <span className="pl">评分：</span>
                <Rate 
                    disabled  
                    defaultValue={Math.round(data.rating.average)/2} 
                    count={5}
                />({data.rating.average}分)
                <br/>
                <span className="pl">又名：</span>
                <span>
                    {
                        data.aka.map((item)=>(
                            item+' '
                        ))
                    }
                </span>
                <br/>
                <span className="pl">简介：</span>
                <span>
                    {
                        data.summary
                    }
                </span>
            </Fragment>
        )
    }

}

export default InfoUi