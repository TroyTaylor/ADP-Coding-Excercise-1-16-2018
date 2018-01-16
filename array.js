function returnOddArray(theArray, index) {
	if (index === undefined) index = 0;
	if (theArray[index] % 2 === 0) theArray.splice(index, 1);
	else index++;
	if (index < theArray.length) returnOddArray(theArray, index);
	return theArray;
}