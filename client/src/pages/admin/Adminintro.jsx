import React from 'react';
import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';
import axios from 'axios';
import { message } from 'antd';

function AdminIntro() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const initialValues = portfolioData?.intros || {};

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      // Sending _id from portfolioData.intros._id instead of portfolioData.intros.id
      const response = await axios.post(`${import.meta.env.VITE_API_RENDER_LINK}/api/portfolio/update-intro`, { 
        ...values, 
        _id: portfolioData.intros._id // Change to _id
      });
      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout='vertical'
        initialValues={initialValues}
      >
        <Form.Item name="welcomeText" label="Welcome Text">
          <Input placeholder='Welcome Text' />
        </Form.Item>

        <Form.Item name="firstName" label="First Name">
          <Input placeholder='First Name' />
        </Form.Item>

        <Form.Item name="lastName" label="Last Name">
          <Input placeholder='Last Name' />
        </Form.Item>

        <Form.Item name="caption" label="Caption">
          <Input placeholder='Caption' />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <TextArea placeholder='Description' />
        </Form.Item>

        <div className="flex justify-end w-full">
          <button className='px-10 py-2 bg-primary text-white rounded-lg' type='submit'>
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;
