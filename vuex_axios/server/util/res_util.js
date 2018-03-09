var res_util = {
    json_val: {
        code:'00',
        msg:'정상',
        result:''
    },
    setError (code, msg) {
        this.code = code;
        this.msg = msg;
    }
} 


module.exports = res_util