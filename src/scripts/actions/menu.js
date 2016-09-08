"use strict";
export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';

export const openMenu = () => {
	return {
		type: OPEN_MENU
	}
}

export const closeMenu = () => {
	return {
		type: CLOSE_MENU
	}
}