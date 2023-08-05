let download = require('download')

const dowloadfile = ()=>{
    download('direct:https://gitlab.com/flippidippi/download-git-repo-fixture/repository/archive.zip', 'test/tmp', function (err) {
        console.log(err ? 'Error' : 'Success')
    });
}




