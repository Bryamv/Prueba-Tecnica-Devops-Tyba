const { getCatController } = require('./cat.controller');
const { getCat } = require('./cat.actions');

jest.mock('./cat.actions');

describe('getCatController', () => {
  it('should return a cat image', async () => {
    // Mock the getCat function to return an object similar to what is received from the API
    const mockCat = { id: '9vf', url: 'https://example.com/cat.jpg', width: 552, height: 736 };
    getCat.mockResolvedValue(mockCat);

    // Call the getCatController function
    const cat = await getCatController();

    // Assert that the cat image is defined
    expect(cat).toBeDefined();
    // Assert that the cat image URL matches the expected value
    expect(cat.url).toBe(mockCat.url);
  });

  it('should throw an error if failed to fetch cat', async () => {
    // Mock the getCat function to throw an error
    getCat.mockRejectedValue(new Error('Failed to fetch cat'));

    // Call the getCatController function and expect it to throw an error
    await expect(getCatController()).rejects.toThrow('Failed to fetch cat');
  });
});
