<?php
header("Content-Type:appliction/json");
$a=[
     ["lebal"=>"部门1","value"=>"190"],
     ["lebal"=> "部门2","value"=>"120"],
     ["lebal"=>"部门3","value"=>"140"],
     ["lebal"=>"部门4","value"=>"220"]
   ];
  echo json_encode($a);