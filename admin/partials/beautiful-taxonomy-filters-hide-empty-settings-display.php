<?php

/**
 * The setting to show a clear all link
 *
 * This file is used to setup a settings field
 *
 * @link       http://tigerton.se
 * @since      1.0.0
 *
 * @package    Beautiful_Taxonomy_Filters
 * @subpackage Beautiful_Taxonomy_Filters/admin/partials
 */


$hide_empty = (get_option('beautiful_taxonomy_filters_hide_empty') ? get_option('beautiful_taxonomy_filters_hide_empty') : false); 
?>
<input type="checkbox" name="beautiful_taxonomy_filters_hide_empty" value="1" <?php if($hide_empty){ echo 'checked="checked"'; } ?> />

