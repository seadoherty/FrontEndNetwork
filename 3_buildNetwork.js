class Network {
    constructor() {
        //--Use timestamp for unique ID of both nodes and edges
        this.timestampId = Date.now();

        //--Variables for adding a New Department
        this.newDepartment = document.getElementById("department").value;

        //--Variables for existing Department selected
        this.existingDepartment = document.getElementById("deptselect").value;

        //--Variables for first name,last name and profile pic       
        this.firstname = document.getElementById("fname").value;
        this.lastname = document.getElementById("lname").value;
    }

    //---Add the department
    addDepartment() {
        data.nodes.add({
            id: this.timestampId,
            label: this.newDepartment,
            shadow: true
        });

        //---Add department as new option in dropdown
        var select = document.getElementById("deptselect");
        select.options[select.options.length] = new Option(this.newDepartment, this.timestampId);

        document.getElementById("department").value = "";
    }

    //---Connect Person to the Department selected
    addPerson() {
        //--Sets Path to image
        this.path = "images/";

        //---Adjusts javascript default path by removing prepended "C:\fakepath\"
        this.str = document.getElementById("profilepic").value;
        this.imageFileName = this.str.substr(12, this.str.length);

        //---Sets variable of profile pic file with correct path
        this.profilepic = this.path + this.imageFileName;

        data.edges.add({
            id: this.timestampId,
            from: this.existingDepartment,
            to: this.timestampId,
            color: "black",
            width: 3,
            shadow: true
        });

        data.nodes.add({
            id: this.timestampId,
            label: this.firstname + " " + this.lastname,
            shape: "circularImage",
            image: this.profilepic,
            shadow: true
        });

        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("profilepic").value = "";
    }
}