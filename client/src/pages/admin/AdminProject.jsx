import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, message, Modal } from 'antd';
import { HideLoading, ShowLoading, ReloadData } from '../../redux/rootSlice';
import axios from 'axios';

function AdminProject() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState("add");

  const onFinish = async (values) => {
    try {
      // console.log(values);
      const tempTechnologies = values.technologies.split(",");
      values.technologies = tempTechnologies;

      dispatch(ShowLoading());

      let response;
      if (selectedItemForEdit) {
        response = await axios.put("http://localhost:5000/api/portfolio/update-project", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("http://localhost:5000/api/portfolio/add-project", values);
      }

      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.delete(`${import.meta.env.VITE_API_RENDER_LINK}/api/portfolio/delete-project`, {
        data: { _id: item._id }
      });

      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
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
      <div className='flex justify-end'>
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add Project
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5 sm:grid-cols-1">
        {projects.map((project, index) => (
          <div key={index} className='shadow border-2 p-5 border-gray-400 flex flex-col gap-5'>
            <h1 className='text-primary text-xl font-bold'>{project.title}</h1>
            <hr />
            <img src={project.image} alt="" className='h-60 w-full' />
            <h1>{project.description1}</h1>
            <h1>{project.description2}</h1>
            <div className="flex justify-end gap-5 mt-5">
              <button
                className='bg-red-500 text-white px-5 py-2'
                onClick={() => {
                  onDelete(project);
                }}
              >
                Delete
              </button>
              <button
                className='bg-primary text-white px-5 py-2'
                onClick={() => {
                  setSelectedItemForEdit(project);
                  setShowAddEditModal(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddEditModal && (
        <Modal
          visible={showAddEditModal}
          title={selectedItemForEdit ? "Edit Project" : "Add Project"}
          footer={null}
          onCancel={() => {
            setShowAddEditModal(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout='vertical'
            onFinish={onFinish}
            initialValues={
              selectedItemForEdit
                ? {
                  ...selectedItemForEdit,
                  technologies: selectedItemForEdit?.technologies?.join(","),
                }
                : {} // Initialize empty object if no item is selected
            }
          >
            <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input the title!' }]}>
              <input type="text" placeholder="Title" />
            </Form.Item>

            <Form.Item name="image" label="Image Url" rules={[{ required: true, message: 'Please input the image URL!' }]}>
              <input type="text" placeholder="Image" />
            </Form.Item>

            <Form.Item name="technologies" label="Technologies">
              <input placeholder="Technologies (comma separated)" />
            </Form.Item>

            <Form.Item name="url" label="Link" rules={[{ required: true, message: 'Please input the project link!' }]}>
              <input placeholder="Link" />
            </Form.Item>

            <Form.Item name="githubrepo" label="Git-Hub Repo Link" rules={[{ required: true, message: 'Please input the project Github link!' }]}>
              <input placeholder="Git-Hub Link" />
            </Form.Item>

            <Form.Item name="description1" label="Description 1" rules={[{ required: true, message: 'Please input the first description!' }]}>
              <textarea placeholder="Description" />
            </Form.Item>

            <Form.Item name="description2" label="Description 2" rules={[{ required: true, message: 'Please input the second description!' }]}>
              <textarea placeholder="Description" />
            </Form.Item>

            <div className="flex justify-end">
              <button
                className='border-primary text-primary px-5 py-2'
                onClick={() => {
                  setShowAddEditModal(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button className='bg-primary text-white px-5 py-2'>
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminProject;
