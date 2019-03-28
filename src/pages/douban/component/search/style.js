import styled from 'styled-components';

export const SearchWrapper = styled.div`
    width: 1040px;
    box-sizing: border-box;
    margin:0 auto
`
export const List = styled.div`
    width: 675px;
    float: left;
    padding-top: 15px;
    .item-root {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin:10px auto;
        .cover-link {
            width: 65px;
            max-height: 97px;
            margin-right: 15px;
            background: none;
            .cover {
                width: 65px;
                max-height: 97px;
            }
        }
        .detail {
            min-width: 0px;
            flex: 1 1 0%;
            .title {
                font-size: 14px;
                font-weight: 500;
                position: relative;
                top: -1px;
                overflow: visible;
                a{
                    display: inline;
                    vertical-align: middle;
                    line-height: 1.5;
                }
            }
            .abstract {
                margin-top: -3px;
                line-height: 1.5;
            }
            .abstract2 {
                margin-top: 0px;
            }
            .meta {
                max-width: 100%;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
                display: block;
                overflow: hidden;
            }
        }
    }
`