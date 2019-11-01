<template>
  <div>
      <el-button type="primary" @click="dialogFormVisible = true">新增轮播图</el-button>
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="选择图片" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="/api/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :headers="{authorization:token}"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="活动标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="起止时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.times"
            type="datetimerange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['12:00:00']"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="活动链接" :label-width="formLabelWidth">
          <el-input v-model="form.link" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { addCarousel } from "@/api";
import { mapActions } from "vuex";
export default {
data() {
    return {
      dialogFormVisible: false,
      form: {
        title: "",
        times:[],
        link:'',
        pic_url:''
      },
      formLabelWidth: "120px",
      imageUrl: "",
      token:""
    };
  },
  created(){
      this.token = sessionStorage.token
  },
  methods: {
    ...mapActions(['_addCarousel']),
    handleSubmit(){
      this.dialogFormVisible = false
      const {title,link,times,pic_url} = this.form
      const start_time = this.form.times[0]
      const end_time = this.form.times[1]
      this._addCarousel({title,link,start_time,end_time,pic_url})
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.form.pic_url = res.url
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>