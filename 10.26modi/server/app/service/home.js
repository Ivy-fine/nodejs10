const { Service } = require("egg");
class HomeService extends Service {
    async getBlogList() {
        //博客列表
        const $sql =
            "select bid,title,avatar,username,time from blogs,user where userId=id";
        return this.app.mysql.query($sql);
    }
    async getCommentList({ id }) {
        //评论列表
        const $sql = `select avatar,username,text,ctime from comments,user where blogId=${id} and cuserId=id`;
        return this.app.mysql.query($sql);
    }
    async getBlogById({ id }) {
        //通过id获取博客详情
        const $sql = `select title,time,content,avatar,username from blogs,user where userId=id and bid=${id}`;
        return this.app.mysql.query($sql);
    }
    async addBlog({ title, time, content, userId }) {
        //新增博客
        const $sql = `insert into blogs (title,time,content,userId) values (?,?,?,?)`;
        const $params = [title, time, content, userId];
        return this.app.mysql.query($sql, $params);
    }
    async addComment({ bid, text, cuserId, ctime }) {
        //新增评论
        const $sql = `insert into comments (blogId,text,cuserId,ctime) values (?,?,?,?)`;
        const $params = [bid, text, cuserId, ctime];
        return this.app.mysql.query($sql, $params);
    }
    async getSearch({ keywords }) {
        const $sql = `select * from blogs where title like '%${keywords}%'`;
        return this.app.mysql.query($sql);
    }
}

module.exports = HomeService;
