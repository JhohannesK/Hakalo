import React, { useRef, useContext } from 'react';

interface WrapperProps {
	numOfPages: number;
}

interface TileContextValue {
	currentPage: number;
	numOfPages: number;
}

export const TileContext = React.createContext<TileContextValue>({
	currentPage: 0,
	numOfPages: 0,
});

const Tile: React.FC<WrapperProps> = ({ numOfPages }) => {
	return <div>adfga</div>;
};

export default Tile;
