<?
// преобразуем массив $_POST в json сущности
$arr = [
    [
        'name' => 'test',
        'type' => 'test'
    ],
    [
        'name' => 'test',
        'type' => 'test'
    ],
    [
        'name' => 'test',
        'type' => 'test'
    ],
];
$json = json_encode($arr);

//путь и сам файл
$file = "test.dat"

// если файла нет, то создадим его

if( !is_file($file)) {
	$fp = fopen($file, "w"); // ("r" - считывать "w" - создавать "a" - добовлять к тексту), мы создаем файл
	fwrite($fp, $json); // записываем json в наш файл
	fclose ($fp); // закрываем файл
}
?>
	