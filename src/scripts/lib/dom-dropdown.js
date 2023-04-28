// Return the child of the UL with selected class in it
function listFindSelectedIndex(parentUL, selectclass, listLength) {
	for (let i = 0; i < listLength; i++) {
		if (parentUL.children[i].classList.contains(selectclass)) {
			return i
		}
	}
	return -1
}

// Return index with a certain value in a UL
function listItemValueIndex(parentUL, itemValue) {
	for (let i = 0; i < parentUL.children.length; i++) {
		if (parentUL.children[i].textContent === itemValue) {
			return i
		}
	}
	return -1
}

export {listFindSelectedIndex, listItemValueIndex}
