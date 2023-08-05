#! /usr/bin/env node
const {program} = require('commander')
const options = require('../lib/options')
options(program)
const action = require('../lib/action')
const inquirer = require("inquirer");
const download = require("download-git-repo");
program.command('create <project> [other...]')
    .alias('crt')
    .description('项目创建')
    .action((project, args)=>{inquirer.prompt([
            {
                type:'list',
                name:"framwork",
                choices:['express','koa','egg'],
                message:'请选择框架'
            }
        ]).then(res=>{
            download('https://github.com/ruanyf/weekly.git', 'test/tmp', { clone: true },function (err) {
                console.log(err ? err : 'Success')
            });
        })}

    )

program.parse(process.argv)