import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <div className="weather__info">
                {
                    this.props.city && this.props.country && <p className="weather__key">Location:
                    <span className="weather__value"> { this.props.city }, { this.props.country }</span>
                    </p>    
                }
                {
                    this.props.temperature && <p className="weather__key">Temperature:
                    <span className="weather__value"> { this.props.temperature }</span>
                    </p>    
                }
                {
                    this.props.humidity && <p className="weather__key">Humidity:
                    <span className="weather__value"> { this.props.humidity }</span>
                    </p>    
                }
                {
                    this.props.description && <p className="weather__key">Condition:
                    <span className="weather__value"> { this.props.description }</span>
                    </p>
                }     
                {
                    this.props.error && <p>{this.props.error}</p>
                }
            </div>
        )
    }
}

export default Weather
