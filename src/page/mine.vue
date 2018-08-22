<template>
    <div id="mine">
        <header>
            <i class="minemsg"></i>
            <div class="btn">
                <p>在这里,找到属于你的不一样</p>
                <el-button>登陆/注册</el-button>
            </div>
            <div class="toptip">
                <li>
                    <p>0</p>
                    <p>关注</p>
                </li>
                <li>
                    <p>0</p>
                    <p>粉丝</p>
                </li>
            </div>
        </header>
        <div class="main">
            <el-row>
                <el-col :span="8" v-for="(item,i) in mineNav" :key="i" class="maincol">
                    <i :class="item.class" class="iconfont"></i>
                    <p>{{item.tip}}</p>
                </el-col>
            </el-row>
        </div>
        <div class="setbox">
            <li>
                <i class="iconfont icon-yijianfankui"></i>
                <span>意见反馈</span>
                <i class="iconfont icon-icon"></i>
            </li>
            <li>
                <i class="iconfont icon-shezhi"></i>
                <span>设置</span>
                <i class="iconfont icon-icon"></i>
            </li>
        </div>
    </div>
</template>
<script>
    import iconfont from "../../static/aliicon/iconfont.css";
    export default {
        name: "mine",
        data() {
            return {
                mineNav: []
            };
        },
        created() {
            this.getmineNav("", data => {
                this.getmineNav.data;
            });
        },
        methods: {
            getmineNav: function() {
                var that = this;
                that.$axios.get("../../static/mock/minenav.json").then(function(res) {
                    that.mineNav = res.data.list;
                });
            }
        }
    };
</script>
<style lang="less" scoped>
    #mine {
        header {
            border-bottom: 0.63rem solid #f0f0f0;
            background: url("../../static/img/minelogo.png") no-repeat center;
            height: 17.81rem;
            padding-top: 20px;
            .minemsg {
                display: inline-block;
                width: 1.63rem;
                height: 1.63rem;
                background: url("../../static/img/xx.png") no-repeat center;
                position: absolute;
                right: 10px;
            }
            .btn {
                padding-top: 5.63rem;
                text-align: center;
                p {
                    text-align: center;
                    color: #8d8d8e;
                    padding-bottom: 1.13rem;
                }
                .el-button {
                    border: 2px solid #8b8c8c;
                    background-color: #1a1b1c;
                }
            }
            .toptip {
                overflow: hidden;
                margin-top: 3.13rem;
                li {
                    float: left;
                    padding-left: 1.06rem;
                    p {
                        color: #fff;
                        &:last-child {
                            color: #8e8e8f;
                        }
                    }
                }
            }
        }
        .main {
            border-bottom: 0.63rem solid #f0f0f0;
            .el-row {
                .el-col {
                    text-align: center !important;
                    color: #6c6c6c;
                    height: 6.13rem;
                    border: 1px solid #dadada;
                    padding: 1.5rem 0;
                    p {
                        padding-top: 0.81rem;
                    }
                }
            }
        }
        .setbox {
            li {
                overflow: hidden;
                padding: 1.25rem;
                border-top: 1px solid #cdcdcd;
                &:last-child{
                    border-bottom:1px solid #cdcdcd;
                }
                i {
                    &:last-child {
                        float: right;
                    }
                }
            }
        }
    }
</style>
