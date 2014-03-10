#!/bin/bash

# Must have a project name
if [ "$#" -ne 1 ]; then
  echo "Usage: ./sunrise.sh <project_name>"
  exit 1
fi

if [ -d "$1" ]; then
  echo "ERROR: Directory already exists."
  exit 1
fi

# Get sunrise
wget https://github.com/sjlu/CodeIgniter-Sunrise/archive/master.zip -O sunrise.zip
unzip sunrise.zip
rm sunrise.zip
mv CodeIgniter-Sunrise-master $1
cd $1

# Install deps
./build.sh