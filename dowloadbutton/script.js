$(document).ready(function() {
    $(".Download").eq(0).ElasticProgress({
        align: "center",
        fontFamily: "Roboto",
        colorFg: "#cfd0fa",
        colorBg: "#2e5cf2",
        bleedTop: 110,
        bleedBottom: 940,
        buttonSize: 120,
        labelTilt:70,
        arrowDirection: "down",
        onClick: function() {
            $(this).ElasticProgress("open");
        },
        onOpen: function() {
            fakeLoading($(this))
        },
        onCancel: function() {
            $(this).ElasticProgress("close");
        },
        onComlete: function() {
            let $obj = $(this)

            $obj.ElasticProgress("close");
        }
    });


    function fakeLoading($obj, speed, failAt) {
        if (typeof speed == "undefined") speed = 2;
        if (typeof failAt == "undefined") failAt = -1;
        let v = 0;
        let l = function() {
            if (failAt > -1) {
                if (v >=failAt) {
                    if (typeof $obj.jquery != "undefined")
                        $obj.ElasticProgress("fail");
                } else {
                    $obj.fail();
                }
                return;
            }
        }
        v += Math.pow(Math.random(), 2) * 0.1 * speed;

        if (typeof $obj.jquery != "undefined") {
            $obj.ElasticProgress("setValue", v);
        } else {
            $obj.setValue(v);
        }
        if (v < 1) {
            TweenMax.delayedCall(0.05 + (Math.random() * 0))
        }
    };
    l();
});