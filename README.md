# CodeIgniter Sunrise

CodeIgniter Sunrise is ran with a blend of [CodeIgniter Bootstrap](https://github.com/sjlu/CodeIgniter-Bootstrap) and [Sunrise](https://github.com/sjlu/sunrise/). It implements CodeIgniter with several useful frontend tools like a LESS compiler and a JS minifier.

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

## Usage

To compile LESS and JS, all you need to do is run Grunt in the root directory.

    grunt

## License

MIT.
