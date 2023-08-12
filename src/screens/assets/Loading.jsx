import './style.css'

const Loading = () => {
  return(
    <div className="main-item">
  <div className="static-background">
    <div className="background-masker btn-divide-left"></div>
  </div>
  
  <div className="animated-background">
    <div className="background-masker btn-divide-left"></div>
  </div>
  
  <div className="shared-dom">
    <div className="sub-rect pure-background"></div>
    <div className="sub-rect pure-background"></div>
    <div className="sub-rect pure-background"></div>
    <div className="sub-rect pure-background"></div>
    <div className="sub-rect pure-background"></div>
    <div className="sub-rect pure-background"></div>
    <div className="sub-rect pure-background"></div>
    <div className="sub-rect pure-background"></div>
  </div>
  
  <div class="css-dom"></div>
</div>
  );
};

export default Loading;
