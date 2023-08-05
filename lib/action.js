const inquirer=require('inquirer')
const download = require('download-git-repo')

const action = (project, args) => {

    inquirer.prompt([
        {
            type:'list',
            name:"framwork",
            choices:['express','koa','egg'],
            message:'请选择框架'
        }
    ]).then(res=>{

        download('git@github.com:ruanyf/weekly.git', 'test/tmp', { clone: true },function (err) {
            console.log(err ? err : 'Success')
        });

    })

}
module.exports = action

// foramworkUrl:{
//     express:'git@gitee.com:beiyaoyaoyao/express-template.git',
//         koa:'git@gitee.com:beiyaoyaoyao/koa-template.git',
//         egg:'git@gitee.com:beiyaoyaoyao/egg-template.git'
// }