# CodeIgniter Sunrise

CodeIgniter Sunrise is ran with a blend of [CodeIgniter Bootstrap](https://github.com/sjlu/CodeIgniter-Bootstrap) and [Sunrise](https://github.com/sjlu/sunrise/). It implements CodeIgniter with several useful front-end tools like a LESS compiler and a JS minifier.

## How to use

First clone the repo and the submodules.

    git clone git@github.com:sjlu/CodeIgniter-Sunrise.git sunrise
    cd sunrise
    git submodule update --init
   
Make sure you have Node.js installed. I like to use [Homebrew](http://mxcl.github.com/homebrew/) for Mac to install Node.js and npm.
   
Next, install Grunt.

    npm install -g grunt
   
Then, in the project directory, we need to grab the grunt dependencies.

    npm install
   
Good to go! Now all you need to do is run `grunt` anywhere in your directory and your LESS and JS files will be compiled every time you save.
