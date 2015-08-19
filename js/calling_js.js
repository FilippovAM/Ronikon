$(document).ready(function(){

        $(function() {
            $("#demo").collapse();
        });



        new jQueryCollapse($("#show-hide-example"), {
            open: function() {
                this.slideDown(250);
            },
            close: function() {
                this.slideUp(250);
            }
        });



        $('#home a[href="#sample"]').click(function () {
            $('#home').removeClass('active');
            $('#sample').addClass('active');
            $('#location').removeClass('active');
            $('#consultation').removeClass('active');
            $('.wrapper_xs .header_xs').toggleClass('header_inner');
            $('.wrapper_xs .header_xs .header_xs_button').css('display', 'block');
        });


        $('#home a[href="#sample"]').click(function (){
            var curPos=$(document).scrollTop();
            var scrollTime=curPos/1.73;
            $("body,html").animate({"scrollTop":0},scrollTime);
        });


        $('#home a[href="#location"]').click(function () {
            $('#home').removeClass('active');
            $('#sample').removeClass('active');
            $('#location').addClass('active');
            $('#consultation').removeClass('active');
            $('.wrapper_xs .header_xs').toggleClass('header_inner');
            $('.wrapper_xs .header_xs .header_xs_button').css('display', 'block');
            initialize();
        });



        $('#home a[href="#consultation"]').click(function () {
            $('#home').removeClass('active');
            $('#sample').removeClass('active');
            $('#location').removeClass('active');
            $('#consultation').addClass('active');
            $('.wrapper_xs .header_xs').toggleClass('header_inner');
            $('.wrapper_xs .header_xs .header_xs_button').css('display', 'block');
        });



        $('.home_xs').click(function(){
            $('#home').addClass('active');
            $('#sample').removeClass('active');
            $('#location').removeClass('active');
            $('.wrapper_xs .header_xs').removeClass('header_inner');
            $('.wrapper_xs .header_xs .header_xs_button').css('display', 'none');
        });

    function initialize() {
        var latlng = new google.maps.LatLng(52.277457, 104.356091);
        var settings = {
            zoom: 16,
            scrollwheel: false,
            center: latlng,
            disableDefaultUI: true,
            mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
            navigationControl: true,
            mapTypeControl: true,
            streetViewControl: true,
            zoomControl: true,
            zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map_canvas"),
            settings);

        var styles = [
            {
                stylers: [
                    { hue: "#959595" },
                    { saturation: -100 }
                ]
            }
        ];

        map.setOptions({styles: styles});

        var companyPos = new google.maps.LatLng(52.277457, 104.356091);
        var companyMarker = new google.maps.Marker({
            position: companyPos,
            map: map,
            title:"Ронникон"
        });

        var contentString = '<div id="content_map_info">'+
            '<div class="content_map_info_body">'+
            '<div class="content_map_info_tittle">РОНИКОН</div>'+
            '<div>г.Иркутск, ул.Ширямова 2-а</div>'+
            '<div>Тел: +7(495)988-4-999</div>'+
            '<div class="content_map_info_email"><div>Email: </div><a href="mailto:ronikon@mail.ru"> ronikon@mail.ru</a></div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        google.maps.event.addListener(companyMarker, 'click', function() {
            infowindow.open(map,companyMarker);
        });

    }

});