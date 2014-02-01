<?php

class Welcome extends CI_Controller {

  function index() {
    $this->load->view('header');
    $this->load->view('pages/welcome');
    $this->load->view('footer');
  }

}
