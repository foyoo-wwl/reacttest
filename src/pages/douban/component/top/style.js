import styled from 'styled-components';

export const Li = styled.li`
    overflow: hidden;
    list-style: none;
    border-bottom: 1px dashed #ccc;
    padding: 12px 0;
    .pic {
        color: #bbb;
        float: left;
        padding-right: 25px;
        em {
            float: left;
            padding: 0 10px;
        }
        a img {
            border-width: 0;
            vertical-align: middle;
        }
    }
    .info {
        overflow: hidden;
        zoom: 1;
        .playable {
            font-size: 13px;
            padding-left: 3px;
            color: #00A65F;
        }
        p {
            margin: 10px 0;
            color: #666;
        }
        .star .rating_num {
            color: #e09015;
            padding: 0 5px 0 0;
        }
        .quote {
            overflow: hidden;
            padding: 0 24px 5px 15px;
            margin: 8px 0 0 26px;
            background: url(/f/shire/bea926c…/pics/quotel.png) no-repeat left 4px;
            width: auto;
            word-wrap: break-word;
        }
    }

`
export const TopWrap = styled.div`
    width:675px;
    margin:0 auto;
    .pagination{
        margin:20px auto;
    }
`