const I = require("../lib/intern");

describe("Testing Intern Methods", () => {
  const intern = new I("Stevie Peppers", "kl12c", "LittleStevie@cool.com", "University of CoolKids");
  it("Returns Intern Name", () => {
    const name = intern.getName();
    expect(name).toBe("Stevie Peppers");
  });
  it("Returns Intern ID", () => {
    const id = intern.getId();
    expect(id).toBe("kl12c");
  });
  it("Returns Intern Email", () => {
    const email = intern.getEmail();
    expect(email).toBe("LittleStevie@cool.com")
  })
  it("Returns Intern School", () => {
    const school = intern.getSchool();
    expect(school).toBe("University of CoolKids")
  })
  it("Returns Intern Role", () => {
      const role = intern.getRole()
      expect(role).toBe("Intern")
  })
});