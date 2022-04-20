const M = require("../lib/manager");

describe("Testing Manager Methods", () => {
  const manager = new M("Paula Grumbles", "a8f9", "PaulaPowah@empower.com", "1832");
  it("Returns Manager Name", () => {
    const name = manager.getName();
    expect(name).toBe("Paula Grumbles");
  });
  it("Returns Manager ID", () => {
    const id = manager.getId();
    expect(id).toBe("a8f9");
  });
  it("Returns Manager Email", () => {
    const email = manager.getEmail();
    expect(email).toBe("PaulaPowah@empower.com")
  })
  it("Returns Manager Office Number", () => {
    const officeNumber = manager.officeNumber;
    expect(officeNumber).toBe("1832")
  })
  it("Returns Manager Role", () => {
      const role = manager.getRole()
      expect(role).toBe("Manager")
  })
});