import React from 'react';

export default class PostImage extends React.Component {
  render() {
    return (
      <div className="_3x-2">
        <div data-ft="{&quot;tn&quot;:&quot;H&quot;}">
          <div className="mtm">
            <div className="_5cq3" data-ft="{&quot;tn&quot;:&quot;E&quot;}">
              <a className="_4-eo" href="https://www.facebook.com/photo.php?fbid=10206614469813558&amp;set=a.1918661799365.2106445.1026623821&amp;type=3" rel="theater">
                <div className="uiScaledImageContainer _4-ep" style={{ width: '470px', height: 'auto' }}>
                  <img className="scaledImageFitWidth img" src={this.props.boobs.get('preview')} alt="BoomBoobs's photo." width="316" height="394" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
