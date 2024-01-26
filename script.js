function calculateEstimate() {
    // Get values from the form
    var floorType = document.getElementById("floorType").value;
    var area = parseFloat(document.getElementById("area").value);

    // Perform your estimation calculation based on floor type and area
    var costPerSquareFoot;

    switch (floorType) {
        case "vinyl":
            costPerSquareFoot = 1.70; 
            break;
        case "laminate":
            costPerSquareFoot = 2.0; 
            break;
        case "hardwood":
            costPerSquareFoot = 4.0; 
            break;
        default:
            costPerSquareFoot = 0;
    }

    var estimatedCost = costPerSquareFoot * area;

    // Display the estimated cost to the user
    document.getElementById("estimatedCost").innerHTML = "Estimated Cost: $" + estimatedCost.toFixed(2);
}