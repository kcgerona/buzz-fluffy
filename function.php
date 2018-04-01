<?php

function set_active($get, $current)
{
    return $get == $current ? "active" : "";
}
