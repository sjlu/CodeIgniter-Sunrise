# CodeIgniter Sunrise

CodeIgniter Sunrise is inspired by [CodeIgniter Bootstrap](https://github.com/sjlu/CodeIgniter-Bootstrap) and [Sunrise](https://github.com/sjlu/sunrise/). It has the intention of providing you a bootstrapped framework for you to work in without any setup. It includes a LESS compiler and JS concatenator run by [Grunt](Gruntfile.js) and serveral libraries installed through [Bower](bower.json).

## Install

* Get a copy of the repo and extract it.

        wget https://github.com/sjlu/CodeIgniter-Sunrise/archive/master.zip -O sunrise.zip
        unzip sunrise.zip
        mv CodeIgniter-Sunrise-master sunrise
   
* Install the following tools.

        npm install -g grunt
        npm install -g bower

* Run the build script.

        ./build.sh

You can also use this script to instantiate a new project.

    curl https://raw.github.com/sjlu/CodeIgniter-Sunrise/master/install.sh | bash -s <project_name>

## Usage

To compile LESS and JS, all you need to do is run Grunt in the root directory.

    grunt

## License

MIT.
