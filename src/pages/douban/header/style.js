import styled from 'styled-components';
import logoPic from './../../../statics/douban/lg_movie@2x.png';

export const Logo = styled.a`
    float: left;
    height: 56px;
    width: 145px;
    margin: 0 13px 0 0;
    background:url(${logoPic});
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center center;
    display:block
`;
export const IndexWrapprer = styled.div`
    width: 1040px;
    margin: 0 auto;
    overflow: visible !important;
    position: relative;
    padding: 10px 0 5px;
    zoom: 1;
`;
export const HeaderWrapper = styled.div`
    width: 100%;
    min-width: 1040px;
    overflow: hidden;
    zoom: 1;
    margin-bottom: 40px;
    .iptWrapper{
        margin-top:10px;
    }
`