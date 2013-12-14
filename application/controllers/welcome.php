<?php

class Welcome extends CI_Controller {

  function index() {
    $this->load->view('include/header');
    $this->load->view('welcome');
    $this->load->view('include/footer');
  }

}
