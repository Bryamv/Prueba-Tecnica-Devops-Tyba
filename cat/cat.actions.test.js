import { getCat } from './cat.actions.js'
describe("getCat", () => {
  it("should fetch a cat image", async () => {
    const cat = await getCat();
    expect(cat).toBeDefined();
  });
});