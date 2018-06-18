import React, { Component } from "react";
import { GoogleMap, Marker, withScriptjs, withGoogleMap} from "react-google-maps"

class GeoMap extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          currentPosition : null,  
        };
      }

    componentDidMount() {
        let geo = navigator.geolocation
        if(geo){ 
          geo.getCurrentPosition((position) => { 
            this.setState({
              currentPosition: {lat: position.coords.latitude,
                lng: position.coords.longitude}
           })
          })
        }
      }
    
    render(){
        let content = (<div>
           <h2>Active la geolocalización.</h2>
        </div>)
        if (this.state.currentPosition !== null) {
            content = (<GoogleMap
              defaultZoom={17}
              defaultCenter={this.state.currentPosition}
              defaultOptions={{
                scrollwheel: false,
                zoomControl: true,
              }}
            >
                 <Marker position={this.state.currentPosition} 
                         defaultTitle={'Ahora estás aqui'}
                  />
            </GoogleMap>
            )
        }
        return (content)
    }
}
const CustomSkinMap = withScriptjs(
  withGoogleMap(GeoMap)
);

function Maps ({...props}) {
    return (
      <CustomSkinMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC57NTyohE62YJlRVYxMjIYwXdQDsMixLw"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
export default Maps;