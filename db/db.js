const connection = require("./connection")
class DB {
    constructor(connection){
        this.connection = connection;
    }
    createEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee)
    }
    removeEmployee(employeeID) {
        return this.connection.query("DELETE FROM employee WHERE id = ?", employeeID)
    }
    createRole(role) {
        return this.connection.query("INSERT INTO role SET ?", role)
    }
    removeRole(roleID) {
        return this.connection.query("DELETE FROM role WHERE id = ?", roleID)
    }
    createDepartment(department) {
        return this.connection.query("INSERT INTO department SET ?", department)
    }
    removeDepartment(departmentID) {
        return this.connection.query("DELETE FROM department WHERE id=?", departmentID)
    }
    updateEmployeeRole(employeeID,roleID) {
        return this.connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [roleID, employeeID])
    }
    findAllRoles() {
        return this.connection.query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id")
    }
    findAllDepartments() {
        return this.connection.query("SELECT department.id, department.name, SUM(role.salary) AS budget FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id GROUP BY department.id, department.name")
    }
    findAllEmployees() {
        return this.connection.query()
    }
}