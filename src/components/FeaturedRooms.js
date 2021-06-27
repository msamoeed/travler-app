import React, { Component } from 'react';
import { RoomContext } from '../store/context';
import Title from './Title';
import Loading from './Loading';
import Room from './Room';

export default class FeaturedRooms extends Component {
    featuredRooms = [
        {
            id :"asd"
        },
        {
            id : "asd"
        },
        {
            id : "asd"
        }
    ]
    render() {
        const { loading, featuredRooms } = this.context;
        
        const rooms = featuredRooms.map((room) => {
            return <Room key={room.id} room={room} />;
        })
        return (
            <section className="featured-rooms"> 
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}
