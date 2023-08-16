describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Should load the proper page", () => {
    cy.get("h1").should("contain", "Task List");
    cy.get("input").should("have.attr", "placeholder", "Enter a new task...");
    cy.get("button").should("contain", "Add Task");
  });
  it("Should add a new task", () => {
    cy.get("input").type("New Task");
    cy.get("button[type=submit]").click();
    cy.get("li").should("contain", "New Task");
  });
  it("Should remove a task", () => {
    cy.get("input").type("New Task");
    cy.get("button[type=submit]").click();
    cy.get("li").should("contain", "New Task");
    cy.get(".delete-button").click();
    cy.get("ul").should("not.contain", "New Task");
  });
  it("Should mark a task as completed", () => {
    cy.get("input").type("New Task");
    cy.get("button[type=submit]").click();
    cy.get("li").should("contain", "New Task");
    cy.get("select").select("Completed").should("have.value", "Completed");
  });
  it("Should mark a task as incomplete", () => {
    cy.get("input").type("New Task");
    cy.get("button[type=submit]").click();
    cy.get("li").should("contain", "New Task");
    cy.get("select").select("Completed").should("have.value", "Completed");
    cy.get("select").select("Incomplete").should("have.value", "Incomplete");
  });
  it("Should edit a task", () => {
    cy.get("input").type("New Task");
    cy.get("button[type=submit]").click();
    cy.get("li").should("contain", "New Task");
    cy.get(".edit-button").click();
    cy.get(".edit").clear().type("Edited Task");
    cy.get(".save-button").should("contain", "Save").click();
    cy.get("ul").should("contain", "Edited Task");
  });
  it("Should not add a task if input is empty", () => {
    cy.get("button[type=submit]").click();
    cy.get("ul").should("not.contain", "New Task");
  });
  it("Should filter tasks by status", () => {
    cy.get("input").type("New Task");
    cy.get("button[type=submit]").click();
    cy.get("li").should("contain", "New Task");
    cy.get("input").type("Another Task");
    cy.get("button[type=submit]").click();
    cy.get("li").should("contain", "Another Task");
    cy.contains("li", "New Task")
      .find("select")
      .select("Completed")
      .should("have.value", "Completed");
    cy.get(".filter-button").click();
    cy.get(".dropdown").should("be.visible");
    cy.get(".dropdown").find(".complete-filter").click();
    cy.get("ul").should("contain", "New Task");
    cy.get("ul").should("not.contain", "Another Task");
  });
  it("Redux should work properly", () => {
    cy.getReduxStore().then((store) => {
      expect(store.getState().tasks).to.have.length(0);
    });
  });
  it("Should add a task with redux", () => {
    cy.getReduxStore().then((store) => {
      expect(store.getState().tasks).to.have.length(0);
      store.dispatch({
        type: "ADD_TASK",
        payload: { id: 1, name: "New Task", completed: false },
      });
      expect(store.getState().tasks).to.have.length(1);
    });
  });
  it("Should remove a task with redux", () => {
    cy.getReduxStore().then((store) => {
      expect(store.getState().tasks).to.have.length(1);
      store.dispatch({
        type: "DELETE_TASK",
        payload: 1,
      });
      expect(store.getState().tasks).to.have.length(0);
    });
  });
  it("Should mark a task as completed with redux", () => {
    cy.getReduxStore().then((store) => {
      expect(store.getState().tasks).to.have.length(0);
      store.dispatch({
        type: "ADD_TASK",
        payload: { id: 1, name: "New Task", completed: false },
      });
      expect(store.getState().tasks).to.have.length(1);
      store.dispatch({
        type: "COMPLETE_TASK",
        payload: { taskId: 1, value: true },
      });
      expect(store.getState().tasks[0].completed).to.be.true;
    });
  });
});
