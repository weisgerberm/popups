<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'Popups',
    'description' => 'Adds a popup-content element to open automatically as modal on a page',
    'category' => 'fe',
    'author' => 'Mark Weisgerber',
    'author_email' => 'mark.weisgerber@outlook.de',
    'state' => 'alpha',
    'clearCacheOnLoad' => 0,
    'version' => '1.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '10.4.0-11.99.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];
