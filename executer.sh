#!/bin/bash


if [ "$1" = 'Rust' ];then
		echo "Rust from executor"
    cd ~/programming/rust
    cargo new "$2"
    cd ~/programming/rust/$2
    nvim .

elif [ "$1" = 'Vite' ];then
    echo "Vite from executor"
    cd ~/programming/Webdev/React/
    bun create vite@latest
    ls --sort=time | awk 'NR==1{print;exit}'
    cd "$(ls --sort=time | awk 'NR==1{print;exit}')"
    bun install
    nvim .


elif [ "$1" = 'C' ];then
    cd ~/programming/c/
    mkdir "$2"
    cd "$2"
    touch "$2.c"
    nvim .

elif [ "$1" = 'C++' ];then
    cd ~/programming/cpp
    mkdir "$2"
    cd "$2"
    touch "$2.cpp"
    nvim .

elif [ "$1" = 'Python' ];then
    cd ~/programming/Python
    mkdir "$2"
    cd "$2"
    touch "$2.py"
    nvim .
		
elif [ "$1" = 'Bun' ];then
    cd ~/programming/Webdev/node
    mkdir "$2"
    cd "$2"
    bun init       
    nvim .

elif [ "$1" = 'Java' ];then
    cd ~/programming/Java
    mkdir "$2"
    cd "$2"
    touch "$2.java"
    nvim .

elif [ "$1" = 'Go' ];then
	cd ~/programming/go
	mkdir "$2"
	cd "$2"
	go mod init "github.com/Swetabh333/$2" 
	nvim .

else
    echo "Failed"
fi
