'use strict';
const SUCCESS_CODE = 20011011;
const FAIL_CODE = 50111011;
const NOT_EXIST_CODE = 40411011;

class ResultModel {
    constructor() {
        this.msg = '';
        this.statusCode = 0;
        this.data = null;
		this.size =0;
    }

    setSuccseeCode() {
        this.statusCode = SUCCESS_CODE;
    }

    setFailureCode() {
        this.statusCode = FAIL_CODE;
    }

    setMsg(msg) {
        this.msg = msg;
    }

    setData(data) {
        this.data = data;
    }
	setSize(size){
		this.size = size;
	}
}

module.exports = ResultModel;