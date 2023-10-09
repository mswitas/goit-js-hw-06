const categories = document.querySelectorAll("#categories>.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    const elements = category.querySelectorAll('li');
    console.log(`Elements: ${elements.length}`);
});