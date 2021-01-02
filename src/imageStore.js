import { writable } from 'svelte/store'

const createImage = () => {
	const { subscribe, set, update } = writable({
		imgUrl: '',
		boxes: []
	});

	return {
		subscribe,
		setImgUrl: imgUrl => update(img => {
			return { imgUrl, boxes: [] }
		}),
		setBoxes: boxes => update(img => {
			return { ...img, boxes }
		}),
		reset: () => set({
			imgUrl: '',
			boxes: []
		})
	};
}

export const image = createImage();