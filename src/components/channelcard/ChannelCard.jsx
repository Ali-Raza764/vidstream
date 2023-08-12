import './style.css'

const ChannelCard = ({data: {channelTitle, subscriberCount, thumbnail, description, title }}) =>{
  return(
    <>
      <div className='channel-card'>
        <div className='channel-avatar'>
            <img src={thumbnail[1].url} />
          </div> 
       

        <div className="channel-details">
          <div className='channel-name'>{channelTitle}</div>
          
          <div className='more-channel-detail'>
            <div className='channel-username'>@{title}</div>
            <span className='separator'></span>
            <p className='sub-count'>{subscriberCount}</p>
          </div>

          <div className='channel-description'>{description}</div>
        </div>
      </div>
    </>
  )
}
export default ChannelCard