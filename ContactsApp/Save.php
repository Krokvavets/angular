<?
// ����������� ������ $_POST � json ��������
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

//���� � ��� ����
$file = "test.dat"

// ���� ����� ���, �� �������� ���

if( !is_file($file)) {
	$fp = fopen($file, "w"); // ("r" - ��������� "w" - ��������� "a" - ��������� � ������), �� ������� ����
	fwrite($fp, $json); // ���������� json � ��� ����
	fclose ($fp); // ��������� ����
}
?>
	