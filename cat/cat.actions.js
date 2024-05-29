async function getCat() {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search`)
    const cat = await response.json();
    return cat;
  }

module.exports = { getCat }