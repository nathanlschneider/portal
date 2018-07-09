
<!DOCTYPE html>
<!-- Template by Quackit.com -->
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <title>IT HelpDesk Portal</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS: You can use this stylesheet to override any Bootstrap styles and/or apply your own styles -->
    <link href="css/custom.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src='http://mhg-heat-web/HEAT/Modules/HEATAPI/HEATApiClient?clientId=PORTAL&clientKey==8FRPgaPuPhuGwxK9mwfVX4PHVP0t24PwpgxL3ou3lw='></script>

</head>

<body>

    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <!-- Logo and responsive toggle -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">IT HelpDesk Portal</a>
            </div>
            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="nav navbar-nav">
                    <li class="active">
                        <a href="#">Tickets</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Knowledge Base</a>
                    </li>
                    <li>
                        <a href="#">lipsum</a>
                    </li>
                    <li>
                        <a href="#">lipsum</a>
                        </li>
                                 </ul>
                <!-- Log In Form -->

</form>

</div>
<!-- /.navbar-collapse -->
</div>
<!-- /.container -->
</nav>

<div class="jumbotron feature">
    <div class="container">
    </div>
</div>

<div class="container-fluid">
    <!-- Left Column -->
    <!--/Left Column-->
    <!-- Center Column -->
    <div class="col-sm-6">
        <!-- Alert -->
        <!-- Articles -->
        <div class="row">
            <article class="col-xs-12">
                <div class="media">
                    <div class="media-left">
                        <a href="#">
                            <img class="media-object" src="images/cameo.png" alt="">
                        </a>
                    </div>
                    <div class="media-body">
                        <h2 class="media-heading"><a href="#">Current Tickets</a></h2>
                                                <div id="myItems"></div>

                        <div id="newIncident"></div>

<script>
HEATAPI.NavigationCommand.CreateNewIncident("", false, function (data) {document.getElementById('newIncident').innerHTML = '<input id="subtick" TYPE="button" class="btn btn-default" value="Submit a ticket" onclick="submit_ticket()" />';});
</script>

<script>
    HEATAPI.MyItems.GetMyItemsList(10, function (data) {

        var html = "";
        for (var i in data.data) {
            html += "<li><a href='" + data.data[i].link + "' target='_blank'>"
                + data.data[i].summary + "</a></li>";
        };
        document.getElementById('myItems').innerHTML
            = "<ul>" + html + "</ul>";
    });
</script>
<ul class="list-inline">
    <!--<li><a href="#"><span class="glyphicon glyphicon-comment"></span> 2 Comments</a></li>
							<li><a href="#"><span class="glyphicon glyphicon-share"></span> 8 Shares</a></li> -->
</ul>
</div>
</div>
</article>
</div>

</div>
<!--/Center Column-->
<!-- Right Column -->
<!--/Right Column -->

</div>
<!--/container-fluid-->

<footer>
    <div class="footer-blurb">
        <div class="container">
            <div class="row">
                <div class="col-sm-3 footer-blurb-item">

                    <div class="row">
                    </div>

                </div>

            </div>
            <!-- /.row -->
        </div>
    </div>

    <div class="small-print">
        <div class="container">
            <p><a href="#">Terms &amp; Conditions</a> | <a href="#">Privacy Policy</a> | <a href="#">Contact</a></p>
            <p>Copyright &copy; Meritage Hospitality Group, Inc. 2017 </p>
        </div>
    </div>
</footer>


<!-- jQuery -->
<script src="js/jquery-1.11.3.min.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="js/bootstrap.min.js"></script>

<!-- IE10 viewport bug workaround -->
<script src="js/ie10-viewport-bug-workaround.js"></script>

<!-- Placeholder Images -->
<script src="js/holder.min.js"></script>

</body>

</html>