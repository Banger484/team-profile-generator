const E = require("../lib/engineer");

describe("Testing Engineer Methods", () => {
  const engineer = new E("Darry Murbles", "12ad2", "Murble-Man@something.com", "MurbMan41");
  it("Returns Engineer Name", () => {
    const name = engineer.getName();
    expect(name).toBe("Darry Murbles");
  });
  it("Returns Engineer ID", () => {
    const id = engineer.getId();
    expect(id).toBe("12ad2");
  });
  it("Returns Engineer Email", () => {
    const email = engineer.getEmail();
    expect(email).toBe("Murble-Man@something.com")
  })
  it("Returns Engineer GitHub", () => {
    const github = engineer.getGithub();
    expect(github).toBe("MurbMan41")
  })
  it("Returns Engineer Role", () => {
      const role = engineer.getRole()
      expect(role).toBe("Engineer")
  })
});