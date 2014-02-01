<?php
/**
 * This function takes a directory and maps its content
 * out into an Array. An easier form of doing a CMS
 * without needing to build big tools.
 */
function dir2array($directory, $map = null) {
  $CI =& get_instance();
  $CI->load->helpers(array('directory', 'file', 'url', 'typography'));

  if (!$map || !is_array($map)) {
    $map = directory_map($directory);
  }

  $text_extensions = array('txt');
  $html_extensions = array('htm', 'html');
  $url_extensions = array('url');

  $data = array();
  foreach ($map as $key => $item) {
    // respect numeric order, 11 should not be in front of 2
    $key_split = explode("--", $key);
    $skey = $key;
    // recurse
    if (is_array($item)) {
      if (count($key_split) > 1) {
        if (is_numeric($key_split[0])) {
          $skey = $key_split[0];
        }
      }
      $data[$skey] = dir2array($directory . '/' . $key, $item);
    // parse
    } else {
      $info = pathinfo($item);
      $ext = $info['extension'];
      $name = $info['filename'];

      if (in_array($ext, $text_extensions) || in_array($ext, $html_extensions)) {
        $text = read_file($directory . '/' . $item);
        if (in_array($ext, $text_extensions)) {
          $text = auto_typography($text);
        }
        $data[$name] = $text;
      } else if (in_array($ext, $url_extensions)) {
        $url = explode("\n", $project['link']);
        if (count($url) > 1) {
          $data[$name] = array(
            'text' => $url[0],
            'url' => $url[1]
          );
        } else {
          $data[$name] = array('url' => $url[0]);
        }
      } else {
        $data[$info['filename']] = base_url($directory . '/' . $item);
      }
    }
  }

  ksort($data);
  return $data;
}
