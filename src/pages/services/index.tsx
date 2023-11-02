import { useEffect, useState } from "react";
import { Sidebar, MenuItem, Menu } from "react-pro-sidebar";
import {
  LeftOutlined,
  RightOutlined,
  LockOutlined,
  SmileOutlined,
} from "@ant-design/icons";

import {
  Card,
  Image,
  Button,
  notification,
  Form,
  Input,
  message,
  Checkbox,
} from "antd";

import profilePhoto from "../../assets/images/profile-photo.jpg";
import useScreenSize from "../../utils";

import "./style.scss";
import request from "../../server/request";
import Loader from "../../utils/Loader";
import { useNavigate } from "react-router-dom";

type FieldType = {
  title?: string;
  message?: string;
  user?: string;
  whom?: string;
  upgrade?: boolean;
};

const UserServices = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const screenSize = useScreenSize();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    screenSize > 750 ? setIsCollapsed(false) : setIsCollapsed(true);
  }, [screenSize]);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: "Reminder",
      description: "You have to be a client to be able to see those pages",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  const onFinish = async (values: FieldType) => {
    try {
      values.whom = "6540ec19ad767e0018d609de";
      await request.post("messages", values);
      message.success("Message sent successfully");
      navigate("/user/home");
    } catch (err) {
      message.error("Error. Please try again or contact IT department");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="service">
          <div className="container service__container">
            <Sidebar
              collapsed={isCollapsed}
              className={`sidebar ${isCollapsed ? "smallVersion " : null}`}
            >
              <Menu>
                <h3 className="sidebar-title">
                  {isCollapsed ? "Content" : "Services"}
                </h3>
                <MenuItem component={<a href="#skills"></a>}>
                  Skills <LockOutlined />
                </MenuItem>
                <MenuItem component={<a href="#experience"></a>}>
                  Experiences <LockOutlined />
                </MenuItem>
                <MenuItem component={<a href="#education"></a>}>
                  Education <LockOutlined />
                </MenuItem>
                <MenuItem component={<a href="#contact"></a>}>Contact</MenuItem>
                <MenuItem
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="sidebar-item"
                >
                  {isCollapsed ? (
                    <RightOutlined className="icon" />
                  ) : (
                    <LeftOutlined className="icon" />
                  )}
                </MenuItem>
              </Menu>
            </Sidebar>
            <div className="service__main">
              <div id="skills" className="service__skills">
                <h2 className="service__row__title">
                  Add skills to attract employers
                </h2>
                <div className="service__row">
                  <div className="service__card">
                    <h2>Demo 1</h2>
                    <Card
                      title="John Doe"
                      style={{
                        width: "100%",
                      }}
                      extra={
                        <Image className="profile-photo" src={profilePhoto} />
                      }
                    >
                      <div className="card-content">
                        <h3>JavaScript</h3>
                        <p>React, Vuew and Typescript</p>
                        {contextHolder}
                        <Button onClick={openNotification} type="dashed">
                          See projects <LockOutlined />
                        </Button>
                      </div>
                      <div className="card-content">
                        <h3>Python</h3>
                        <p>Django, Flask and REST API</p>
                        {contextHolder}
                        <Button onClick={openNotification} type="dashed">
                          See projects <LockOutlined />
                        </Button>
                      </div>
                      <div className="card-content">
                        <h3>C#</h3>
                        <p>Unity, .Net and others</p>
                        {contextHolder}
                        <Button onClick={openNotification} type="dashed">
                          See projects <LockOutlined />
                        </Button>
                      </div>
                      <p></p>
                    </Card>
                  </div>

                  <div className="service__card">
                    <h2>Demo 2</h2>
                    <Card
                      title="Harry Maguire"
                      style={{
                        width: "100%",
                      }}
                      extra={
                        <Image className="profile-photo" src={profilePhoto} />
                      }
                    >
                      <div className="card-content">
                        <h3>HTML5</h3>
                        <p>SEO, semantig tags and clean code</p>
                        {contextHolder}
                        <Button onClick={openNotification} type="dashed">
                          See projects <LockOutlined />
                        </Button>
                      </div>
                      <div className="card-content">
                        <h3>CSS6</h3>
                        <p>SASS, Tailwindcss and Bootstrap</p>
                        {contextHolder}
                        <Button onClick={openNotification} type="dashed">
                          See projects <LockOutlined />
                        </Button>
                      </div>
                      <div className="card-content">
                        <h3>WordPress</h3>
                        <p>Unity, .Net and others</p>
                        {contextHolder}
                        <Button onClick={openNotification} type="dashed">
                          See projects <LockOutlined />
                        </Button>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
              <div id="experience" className="service__experiences">
                <div className="service__skills">
                  <h2 className="service__row__title">
                    Add your professional work experience
                  </h2>
                  <div className="service__row">
                    <div className="service__card">
                      <h2>Demo 1</h2>
                      <Card
                        title="John Doe"
                        style={{
                          width: "100%",
                        }}
                        extra={
                          <Image className="profile-photo" src={profilePhoto} />
                        }
                      >
                        <div className="card-content">
                          <h3>Google</h3>
                          <p>Project Manager</p>
                          <p>May, 2020</p>
                        </div>
                        <div className="card-content">
                          <h3>Bloomberg</h3>
                          <p>Senior Cloud Engineer</p>
                          <p>October, 2022</p>
                        </div>
                        <div className="card-content">
                          <h3>Meta</h3>
                          <p>SEO Specialist</p>
                          <p>Present</p>
                        </div>
                        <Button>
                          See more <LockOutlined />
                        </Button>
                      </Card>
                    </div>

                    <div className="service__card">
                      <h2>Demo 2</h2>
                      <Card
                        title="Harry Maguire"
                        style={{
                          width: "100%",
                        }}
                        extra={
                          <Image className="profile-photo" src={profilePhoto} />
                        }
                      >
                        <div className="card-content">
                          <h3>ITech</h3>
                          <p>Junior frontend developer</p>
                          <p>February, 2022</p>
                        </div>
                        <div className="card-content">
                          <h3>Tech solutions</h3>
                          <p>Middle frontend developer</p>
                          <p>May, 2023</p>
                        </div>
                        <div className="card-content">
                          <h3>WeSolve</h3>
                          <p>Middle | Project Manager</p>
                          <p>Present</p>
                        </div>
                        <Button>
                          See more <LockOutlined />
                        </Button>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
              <div id="education" className="service__education">
                <div className="service__skills">
                  <h2 className="service__row__title">
                    Meet alumni from your university
                  </h2>
                  <div className="service__row">
                    <div className="service__card">
                      <h2>Demo 1</h2>
                      <Card
                        title="John Doe"
                        style={{
                          width: "100%",
                        }}
                        extra={
                          <Image className="profile-photo" src={profilePhoto} />
                        }
                      >
                        <div className="card-content">
                          <h3>University of California</h3>
                          <p>Computer Science</p>
                          <p>Bachelor's degree</p>
                        </div>
                        <div className="card-content">
                          <h3>Stanford University</h3>
                          <p>MBA</p>
                          <p>Master's degree</p>
                        </div>
                        <div className="card-content">
                          <h3>Harvard University</h3>
                          <p>Cyber Security</p>
                          <p>PhD</p>
                        </div>
                        <Button>
                          See more <LockOutlined />
                        </Button>
                      </Card>
                    </div>

                    <div className="service__card">
                      <h2>Demo 2</h2>
                      <Card
                        title="Harry Maguire"
                        style={{
                          width: "100%",
                        }}
                        extra={
                          <Image className="profile-photo" src={profilePhoto} />
                        }
                      >
                        <div className="card-content">
                          <h3>University of Riga</h3>
                          <p>Business Management</p>
                          <p>Bachelor's degree</p>
                        </div>
                        <div className="card-content">
                          <h3>Polish-Japanese Academy</h3>
                          <p>Web development</p>
                          <p>Bootcamp</p>
                        </div>
                        <div className="card-content">
                          <h3>University of Manchester</h3>
                          <p>Information Systems</p>
                          <p>Master's degree</p>
                        </div>
                        <Button>
                          See more <LockOutlined />
                        </Button>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
              <div id="contact" className="service__contact">
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: "30px",
                    marginBottom: "30px",
                  }}
                >
                  Do you want to become a client ? Let's us know !
                </h2>
                <Form
                  name="basic"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  style={{
                    maxWidth: "60%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "100px",
                  }}
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item<FieldType>
                    label="Title"
                    name="title"
                    rules={[
                      {
                        required: true,
                        message: "Please input your title of your message",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item<FieldType>
                    label="Email/Phone"
                    name="user"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email or phone number!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item<FieldType>
                    label="Message"
                    name="message"
                    rules={[
                      { required: true, message: "Please input your message!" },
                    ]}
                  >
                    <Input.TextArea showCount maxLength={100} />
                  </Form.Item>

                  <Form.Item<FieldType>
                    name="upgrade"
                    valuePropName="checked"
                    wrapperCol={{ offset: 0, span: 24 }}
                  >
                    <Checkbox>Upgrade to client</Checkbox>
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                    <Button
                      style={{ width: "100%" }}
                      type="primary"
                      htmlType="submit"
                    >
                      Send request
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UserServices;
