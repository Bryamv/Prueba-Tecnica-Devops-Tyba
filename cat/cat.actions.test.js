const { getCat } = require("./cat.actions");
describe("getCat", () => {
  it("should fetch a cat image", async () => {
    const cat = await getCat();
    expect(cat).toBeDefined();
  });
});