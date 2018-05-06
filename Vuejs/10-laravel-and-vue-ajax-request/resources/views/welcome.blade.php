<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel and Vue</title>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap.min.css') }}">
        <!-- Styles -->
    </head>
    <body>
        <div class="container">
            <div class="content">
                <tasks list="{{ $tasks }}"></tasks>
            </div>
        </div>
        <template id="tasks-template">
            <h1>My Tasks</h1>
            <ul class="list-group">
                <li class="list-group-item" v-for="task in list">@{{ task.body }} </li>
            </ul>
        </template>
    </body>
    <script src="{{ asset('js/jquery-3.2.1.min.js') }}" type="text/javascript" charset="utf-8"></script>
    <script src="{{ asset('js/vue.js') }}" type="text/javascript" charset="utf-8"></script>
    <script src="{{ asset('js/main.js') }}" type="text/javascript" charset="utf-8"></script>
</html>
