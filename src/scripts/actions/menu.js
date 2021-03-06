"use strict";
export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';
export const TOGGLE_MENU = 'TOGGLE_MENU';

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

export const toggleMenu = () => {
	return {
		type: TOGGLE_MENU
	}
}