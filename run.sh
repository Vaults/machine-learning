#!/usr/bin/env bash
function node-run(){
    node "$(npm bin)/$@"
}
node-run browserify main.js -o work.js
node-run http-server -p 1337