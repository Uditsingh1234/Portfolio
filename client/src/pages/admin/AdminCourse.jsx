import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, message, Modal } from 'antd';
import { HideLoading, ShowLoading, ReloadData } from '../../redux/rootSlice';
import axios from 'axios';
import { set } from 'mongoose';
// import { Course } from '../../../../models/portfolioModel';

function AdminCourse() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { courses } = portfolioData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    const [type, setType] = React.useState("add");

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            let response;
            if (selectedItemForEdit) {
                response = await axios.put("http://localhost:5000/api/portfolio/update-course", {
                    ...values,
                    _id: selectedItemForEdit._id,
                });
            } else {
                response = await axios.post("http://localhost:5000/api/portfolio/add-course", values);
            }

            dispatch(HideLoading());

            if (response.data.success) {
                message.success(response.data.message);
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
                dispatch(HideLoading());
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

            // Use DELETE method and pass _id in the data object
            const response = await axios.delete("http://localhost:5000/api/portfolio/delete-course", {
                data: { _id: item._id } // The _id is passed here
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
                <button className="bg-primary px-5 py-2 text-white" onClick={() => {
                    setSelectedItemForEdit(null);
                    setShowAddEditModal(true);
                }}>Add Experience</button>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1">
                {courses.map((course, index) => (
                    <div key={index} className='shadow border-2 p-5 border-gray-400 flex flex-col gap-3 '>
                        <h1 className='text-primary text-xl font-bold'>{course.title}</h1>
                        <hr />
                        {/* <h1>Image: {course.image}</h1> */}
                        {/* <h1>Course link: {course.link}</h1> */}
                        <img src={course.image} alt="" className='rounded h-60 w-full' />
                        <h1>{course.description}</h1>
                        <div className="flex justify-end gap-5 mt-5">
                            <button className='bg-red-500 text-white px-5 py-2' onClick={() => {
                                onDelete(course);

                            }}>Delete</button>
                            <button className='bg-primary text-white px-5 py-2' onClick={() => {
                                setSelectedItemForEdit(course);
                                setShowAddEditModal(true);
                                setType("edit");
                            }}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>

            {
                (type === "add" || selectedItemForEdit) && (
                    <Modal
                        visible={showAddEditModal}
                        title={selectedItemForEdit ? "Edit course" : "Add course"}
                        footer={null}
                        onCancel={() => {
                            setShowAddEditModal(false)
                            setSelectedItemForEdit(null);
                        }}
                    >
                        <Form
                            layout='vertical'
                            onFinish={onFinish}
                            initialValues={selectedItemForEdit || {}} // Ensuring initial values are set properly
                        >
                            <Form.Item name="title" label="Title">
                                <input type="text" placeholder="Title" />
                            </Form.Item>
                            <Form.Item name="image" label="Image URL">
                                <input placeholder="Image URL" />
                            </Form.Item>
                            <Form.Item name="link" label="Course Link">
                                <input placeholder="Course Link" />
                            </Form.Item>
                            <Form.Item name="description" label="Description">
                                <textarea placeholder="Description" />
                            </Form.Item>

                            <div className="flex justify-end">
                                <button className='border-primary text-primary px-5 py-2' onClick={() => {
                                    setShowAddEditModal(false);
                                    setSelectedItemForEdit(null);
                                }}>Cancel</button>
                                <button className='bg-primary text-white px-5 py-2'>
                                    {selectedItemForEdit ? "Update" : "Add"}
                                </button>
                            </div>
                        </Form>
                    </Modal>
                )
            }
        </div>
    );
}

export default AdminCourse;
