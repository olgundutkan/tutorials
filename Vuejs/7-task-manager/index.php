<!DOCTYPE html>
<html>
<head>
	<title>Olgun DUTKAN | Vue Task Manager</title>
	<link rel="stylesheet" type="text/css" href="../assets/css/main.css">
	<style type="text/css">
		.complate{ text-decoration: line-through; }
	</style>
</head>
<body>
	<div id="app">
		<ul>
			<li :class="{ 'complate': task.complated }" v-for="task in tasks" @click="toggleComplatedFor(task)"> {{ task.body }}</li>
		</ul>
	</div>
	<script src="../assets/js/vue.js" type="text/javascript" charset="utf-8"></script>
	<script src="./main.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>