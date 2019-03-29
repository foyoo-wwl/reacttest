import React from 'react'

const searchUI = (props)=>{
    if(props){
        return(
            props.map((item,index)=>{
                return(
                    <div className="item-root" key={item.id-index}>
                        <a 
                            href={item.alt} 
                            className="cover-link" 
                            target="_blank"
                            rel="nofollow me noopener noreferrer"
                        >
                            <img
                            alt={item.title} className="cover" src={item.images.large.replace('jpg','webp')}/>
                        </a>
                        <div className="detail">
                            <div className="title">
                                <a 
                                    href="https://movie.douban.com/subject/1394626/"  
                                    className="title-text" 
                                    target="_blank"
                                    rel="nofollow me noopener noreferrer"
                                    >
                                    {item.title}
                                </a>
                            </div>
                            <div className="rating">
                                <span>
                                    导演:
                                    {
                                        item.directors.map((item)=>{
                                            return(item.name+' ')
                                        })
                                    }
                                    主演：
                                    {
                                        item.casts.map((item,index)=>{
                                            return(
                                                <a 
                                                    href={item.alt} 
                                                    target='_blank'
                                                    rel="nofollow me noopener noreferrer"
                                                    key={item.id-index}
                                                > {item.name} </a>
                                            )
                                        })
                                    }                                                    
                                </span><br/>
                                <span className="rating_nums">{item.rating.average}分</span>
                                <span className="pl">({item.collect_count}人评价)</span><br/>
                                <span>
                                    {
                                        item.genres.map((item)=>{
                                            return( item+' ')
                                        })
                                    }
                                </span>
                            </div>
                        </div>
                    </div>                                     
                )
            }) 
        )
    }
}

export default searchUI