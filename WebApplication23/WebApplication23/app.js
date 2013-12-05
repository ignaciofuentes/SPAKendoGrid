var router = new kendo.Router();
var layout = new kendo.Layout("<section id='content'></section>");
var model = kendo.observable({
    go: function () {
        router.navigate("details");
    }
});
var details = new kendo.View('details');
var gridView = new kendo.View('gridView', { model: model, init: createGrid });

router.route("details", function () {
    layout.render($("#app"));
    layout.showIn("#content", details);
});

router.route("/", function () {
    layout.render($("#app"));
    layout.showIn("#content", gridView);

});

function createGrid() {
    var dataSource = [
        { name: "John", city: "Atlanta" },
        { name: "Mike", city: "Boston" },
        { name: "James", city: "Atlanta" }
    ];

    $("#grid").kendoGrid(
    {
        filterable: true,
        sortable: true,
        dataSource: dataSource,
        columns: [
                    "name", "city"
        ]
    });
}