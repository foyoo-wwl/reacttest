import styled from 'styled-components';


export const Banner = styled.div`
    width:100%;
    overflow:hidden;
    img{
        width:100%
    }
`
export const SearchWrapper = styled.ul`
    width: 940px;
    box-sizing: border-box;
    margin:0 auto;
    display:block;
    overflow:hidden;
    margin-top:20px;
    .cardLi{
        width:200px;
        float:left;
        height:450px;
        margin:10px 16px;
        .cardul{
            width:100%;
            overflow:hidden;
            .poster{
                width:200px;
                height:282px;
                overflow:hidden;
                margin-bottom:10px;
                a{
                    width:200px;
                    height:282px;
                    display:block;
                    img{
                        width:100;
                        height:100%;             
                    }
                }
            }
        }
    }
    .Carousel{
        width:1040px;
        height:500px;
        .slick-slide {
            text-align: center;
            height: 500px;
            line-height: 160px;
            background: #364d79;
            overflow: hidden;
          }
    }

`