<?php
 
use craft\helpers\App;
 
return [
    // Asset version
    'assetVersion' => App::env('REVISION') ?: md5(microtime()),
];