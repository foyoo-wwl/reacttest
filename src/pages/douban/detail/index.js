import React,{Component,Fragment} from 'react'
import {Info,Comments} from './style'
import {jsonp} from './../common/ajax'
import {
    List,Button, Skeleton,Comment
  } from 'antd';
import InfoUi from './InfoUI'
class Detail extends Component{
    constructor(props){
        super(props);
        this.state ={
            initLoading: true,
            loading: false,
            data: [],
            list: [],
            page_start:1,
            count:7,
            detail:[]
          }
    }
    getData = (cb) => {
        const _commentsUrl = `/subject/${this.props.match.params.id}/comments?start=${this.state.page_start}&count=${this.state.count}&apikey=0df993c66c0c636e29ecbb5344252a4a`;
        jsonp(_commentsUrl).then((res)=>{
            cb(res)
        });
    }   
    onLoadMore = () => {
        this.setState({
            list: this.state.data.concat([...new Array(this.state.count)].map(() => ({ loading: true, name: {} })))
        })         
        const _commentsUrl = `/subject/${this.props.match.params.id}/comments?start=${this.state.page_start+7}&count=${this.state.count}&apikey=0df993c66c0c636e29ecbb5344252a4a`;
        jsonp(_commentsUrl).then((res)=>{
            const data = this.state.data.concat(res.comments);          
            this.setState({
                data,
                list: data,
                loading: false,
                page_start:this.state.page_start+7
            },() => {
                window.dispatchEvent(new Event('resize'));
            });
        });
    }
    componentDidMount(){
        if(this.props.match.params.id){
            const url = '/subject/'+this.props.match.params.id;
            jsonp(url).then((res)=>{  
                this.setState({
                    detail:res
                })
            }).then(()=>{
                this.getData((res) => {
                    this.setState({
                      initLoading: false,
                      data: res.comments,
                      list: res.comments
                    });
                }); 
            })
        }

    }
    render(){
        const {initLoading, loading, list } = this.state;
        const loadMore = !initLoading && !loading ? (
          <div style={{
            textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px',
          }}
          >
            <Button onClick={this.onLoadMore}>loading more</Button>
          </div>
        ) : null;
        return(
            <Fragment>
                <Info>
                    {InfoUi(this.state.detail)}
                </Info>
                <Comments>
                    <h2>评论:</h2>
                    <List
                        className="comments"
                        loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={list}                       
                        renderItem={item => (
                            <List.Item>
                                <Skeleton avatar loading={item.loading} title={false} active>
                                    {
                                      !item.loading? <Comment
                                        author={item.author.name}
                                        avatar={item.author.avatar}
                                        content={item.content}
                                        datetime={item.created_at}
                                        /> : null
                                    }
                                </Skeleton>
                            </List.Item>
                        )}
                        />                    
                </Comments>
            </Fragment>
        )
    }
}
export default Detail