import React from 'react';

interface TileProps {
    content?: {
        title: string;
        message: string;
    };
}

export const Tile: React.FC<TileProps> = ({ content }) => {
    console.log(content);
    if (!content) {
        return null;
    }

    const { title, message } = content;

    if (!title || !message) {
        throw new Error('Type safety has been lost.');
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    );
};
