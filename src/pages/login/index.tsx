import { Button, Form, Input, message } from "antd";

// const onFinish = async (values: FieldType) => {
//   try {
//     const response = await request.post("auth/me", values);
//     localStorage.setItem(TOKEN, response.token);
//     localStorage.setItem(USER, user.role);
//   } catch (err) {
//     message.error("Error! Something went wrong. Please try again");
//   }
// };

type FieldType = {
  username?: string;
  password?: string;
};

import "./style.scss";
import request from "../../server/request";
// import { TOKEN, USER } from "../../constants";

const LoginPage = () => {
  const onFinish = async (values: FieldType) => {
    try {
      await request.post("auth/login", values);
    } catch (err) {
      message.error("Error ! Something went wrong");
    }
  };
  return (
    <section id="login-user">
      <div className="user-login">
        <Form
          name="user-login"
          className="user-login-form"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 500 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};
export default LoginPage;
