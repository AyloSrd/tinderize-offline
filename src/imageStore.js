import { writable } from 'svelte/store'

const createImage = () => {
	const { subscribe, set, update } = writable({
		imgUrl: '',
		boxes: [],
		currentBox: null
	});

	return {
		subscribe,
		setImgUrl: imgUrl => set({
			imgUrl, 
			boxes: [],
			currentBox: null
		}),
		setBoxes: boxes => update(img => {
			return { ...img, boxes }
		}),
		setCurrentBox: currentBox => update(img => {
			return { ...img, currentBox }
		}),
		reset: () => set({
			imgUrl: '',
			boxes: []
		})
	};
}

export const image = createImage();