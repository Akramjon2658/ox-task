import {Button, Form, Input} from 'antd';
import './auth.css';
import {AuthAPI} from "../../api/request/authAPI";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {setTokenToLocalStorage} from "../../utils";

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const onFinish = (values: any) => {
        setLoading(true);
        AuthAPI.check(values)
            .then(r => {
                if (r.status === 200) {
                    setTokenToLocalStorage(r.data.token)
                    navigate('/')
                } else {
                    setError(r.data)
                }
            })
            .catch(e => setError(e.response.data?.message))
            .finally(() => setLoading(false))
    };

    return (
        <div className={'login'}>
            <Form
                name="login"
                onFinish={onFinish}
                layout={'vertical'}
                initialValues={{
                    _username: 'user_task',
                    _password: 'user_task'
                }}
            >
                <Form.Item
                    label="Login"
                    name="_username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Parol"
                    name="_password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                {error && <div className={'error'}>{error}</div>}
                <Form.Item className={'submit-button-wrapper'}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;