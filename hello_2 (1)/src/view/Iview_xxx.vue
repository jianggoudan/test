<template>
    <div style="background:#eeeeee;">
        <!-- 头部空位 -->
        <Row type="flex" justify="center">
            <Col span="18" style="height:150px;"></Col>
        </Row>

        <!-- 主体部分 -->
        <Row type="flex" justify="center">
            <Col span="18" style="height:600px;">
                <Layout>
                    <Content style="display:flex;justify-content:center;background:#eeeeee">
                        <Card class="Card">
                            <br>
                            <h1 style="text-align: center;font-size:32px;">welcome</h1>
                            <br>
                            <div style="background-color:#dddddd;height:2px;"></div>
                            <br>
                            <Form class="Form" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                                <FormItem label="user name" prop="name">
                                    <Input v-model="formValidate.name" placeholder="input user name"></Input>
                                </FormItem>
                                <FormItem label="password" prop="password">
                                    <Input type="password" v-model="formValidate.password" placeholder="input password" password ></Input>
                                </FormItem>

                                <FormItem prop="g">
                                    <RadioGroup v-model="formValidate.g">
                                        
                                    </RadioGroup>
                                </FormItem>

                                <FormItem v-show="formValidate.g=='b'" label="IP地址" prop="ip">
                                    <Input v-model="formValidate.ip" ></Input>
                                </FormItem>
                                <FormItem >
                                    <Button type="primary" @click="handleSubmit('formValidate')" size='large'>Submit</Button>
                                    <Button @click="handleReset('formValidate')" style="margin-left: 8px" size='large'>Reset</Button>
                                </FormItem>
                            </Form>
                        </Card>
                    </Content>
                </Layout>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    password: '',
                    g: 'a',
                    ip: 'http://192.168.101.55:8888/'
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'user name can not be empty', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'password cannot be empty', trigger: 'blur' },
                    ],
                    ip: [
                        { required: true, message: '后端IP地址不能为空', trigger: 'blur' },
                    ],
                    g: [
                        { required: true, message: '', trigger: 'change' }
                    ],
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        // this.$Message.success(`用户名：${this.formValidate.name}，密码：${this.formValidate.password}`);
                        // this.$router.push("/iview_index");
                        if (this.formValidate.g=='a')
                        {
                            this.$Message.success(`user name：${this.formValidate.name}，password：${this.formValidate.password}`);
                            this.$router.push("/iview_index");
                        }else
                        {
                            this.$Message.success(`发送后端get：${this.formValidate.ip}${this.formValidate.name}`);
                            this.$router.push("/iview_index");
                        }
                    } else {
                        this.$Message.error('格式错误，请检查！');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>

<style lang="scss" scoped>
.Card{ // 原生css
    border-radius:30px;
    width: 370px;
    // justify-content: center; // 这样会使得Card里面的元素居中
    box-shadow: 5px 5px 5px 5px #cccccc; 
}
.Form{
    padding: 5%;
}
</style>
