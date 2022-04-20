const E = require("../lib/employee");

describe("Testing Employee Methods", () => {
  const employee = new E("Carl Funches", "l1j2", "SnarlyCarl@mongoose.com");
  it("Returns Employee Name", () => {
    const name = employee.getName();
    expect(name).toBe("Carl Funches");
  });
  it("Returns Employee ID", () => {
    const id = employee.getId();
    expect(id).toBe("l1j2");
  });
  it("Returns Employee Email", () => {
    const email = employee.getEmail();
    expect(email).toBe("SnarlyCarl@mongoose.com")
  })
  it("Returns Employee Role", () => {
      const role = employee.getRole()
      expect(role).toBe("Employee")
  })
});
