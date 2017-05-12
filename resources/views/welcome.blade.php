<html>
    <head>
        <meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel 5.4 + Vue + Vee</title>

        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/plugins.css') }}" rel="stylesheet">
    </head>
    <body>
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
					<div id="app">
						<form-account-create></form-account-create>
					</div>
				</div>
			</div>
		</div>
        <script>
            window.Laravel = {!! json_encode([
                'csrfToken' => csrf_token(),
            ]) !!};
        </script>
		<script src="{{ asset('js/app.js') }}"></script>
		<script src="{{ asset('js/plugins.js') }}"></script>
    </body>
</html>