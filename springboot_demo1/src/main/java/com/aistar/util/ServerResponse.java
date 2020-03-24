package com.aistar.util;

public class ServerResponse {
    private int status;
    private String message;
    private Object data;


    //查询
    public  static ServerResponse getDataSuccess(Object data){
        ServerResponse response  = new ServerResponse(1,"查询数据成功");
        response.setData(data);
        return response;
    }

    public  static ServerResponse getDataFailed(Object data){
        ServerResponse response  = new ServerResponse(0,"查询数据失败",data);
        return response;
    }



    public static ServerResponse addSuccess(){
        return new ServerResponse(1,"添加数据成功",MessageUtil.ADD_SUCCESS);
    }
    public static ServerResponse addFailed(){
        return new ServerResponse(0,"添加数据失败",MessageUtil.ADD_FAIL);
    }

    public static ServerResponse deleteSuccess(){
        return new ServerResponse(1,"删除数据成功",MessageUtil.DELETE_SUCCESS);
    }

    public static ServerResponse deleteFailed(){
        return new ServerResponse(0,"删除数据失败",MessageUtil.DELETE_FAIL);
    }

    public static ServerResponse updateSuccess(){
        return new ServerResponse(1,"修改数据成功",MessageUtil.UPDATE_SUCCESS);
    }

    public static ServerResponse updateFailed(){
        return new ServerResponse(0,"修改数据失败",MessageUtil.UPDATE_FAIL);
    }


    public static ServerResponse noRegist(){
        return new ServerResponse(0,"用户尚未注册",MessageUtil.NO_REGIST);
    }
    public static ServerResponse hasRegist(){
        return new ServerResponse(1,"用户已注册",MessageUtil.HAS_REGISTED);
    }


    public static ServerResponse noLogin(){
        return new ServerResponse(0,"用户尚未注册",MessageUtil.NO_LOGIN);
    }

    public static ServerResponse hasLogin(){
        return new ServerResponse(1,"用户已注册",MessageUtil.HAS_LOGIN);
    }




    //get,set

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    //constructor
    public ServerResponse(){}
    public ServerResponse(int status, String message) {
        this.status = status;
        this.message = message;

    }
    public ServerResponse(int status, String message, Object data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    @Override
    public String toString() {
        return "ServerResponse{" +
                "status=" + status +
                ", message='" + message + '\'' +
                ", data=" + data +
                '}';
    }
}
