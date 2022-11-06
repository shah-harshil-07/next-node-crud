import React, { useEffect, useState } from 'react';
import { useToast } from '../../helpers/ToasterService';
import { useRouter } from 'next/router';
import addEditForm from '../../styles/employees/AddEdit.module.css';
import UserService from '../api/UserService';

const addEditUser = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [id, setId] = useState("");
    const { showSuccess, showError } = useToast();
    const router = useRouter();

    useEffect(() => {
        const _id = router?.query?.id;
        if (_id) {
            setId(_id);
            getUserData(_id);
        }
    }, []);

    const getUserData = async id => {
        const response = await UserService.show(id);
        if (response.meta.status) {
            const _userData = response.data;
            if (_userData?._id) {
                delete _userData._id;
            }
            setUserData({..._userData});
        }
    }

    const onInputChange = (data, field) => {
        setUserData({...userData, [field]: data});
        setErrors({...errors, [field]: ''});
    }

    const onHandleValidation = () => {
        let formIsValid = true;
        let _errors = errors;
        const nameRegex = new RegExp("[^a-zA-Z\\s]");
        const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;

        if (!userData.name) {
            _errors['name'] = "Name field is required.";
            formIsValid = false;
        }

        if (userData.name && nameRegex.test(userData.name)) {
            _errors['name'] = "Name field must contain only text.";
            formIsValid = false;
        }

        if (!userData.email) {
            _errors['email'] = "Email field is required.";
            formIsValid = false;
        }

        if (userData.email && !emailRegex.test(userData.email)) {
            _errors['email'] = "Email field must contain valid email address.";
            formIsValid = false;
        }

        if (!userData.password) {
            _errors['password'] = "Password field is required.";
            formIsValid = false;
        }

        if (userData.password && !passwordRegex.test(userData.password)) {
            _errors['password'] = "password must have atleast 8 characters, one uppercase letter, one lowercase letter, one number and one special character.";
            formIsValid = false;
        }

        setErrors({..._errors});
        return formIsValid;
    }

    const onSubmit = e => {
        e.preventDefault();
        if (onHandleValidation()) {
            addUpdateUserData();
        }
    }

    const addUpdateUserData = async () => {
        try {
            let response = null;
            if (id) {
                response = await UserService.update(id, userData);
            } else {
                response = await UserService.add(userData);
            }

            if (response.meta.status) {
                showSuccess(response.meta.message);
                router.push('/users');
            } else if (response?.result === "no login")  {
                router.push('/');
            } else {
                showError(response.meta.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={addEditForm['container-contact100']}>
            <div className={addEditForm['wrap-contact100']}>
                <form className={addEditForm['contact100-form']}>
                    <span className={addEditForm['contact100-form-title']}> {id ? 'UPDATE' : 'ADD'} USER </span>

                    <div className={`${addEditForm['wrap-input100']} ${addEditForm['rs1-wrap-input100']} ${addEditForm['alert-validate']}`}>
                        <input
                            className={addEditForm['input100']}
                            value={userData.name}
                            onChange={e => onInputChange(e.target.value, 'name')}
                            type="text"
                        />
                        <span className={addEditForm['label-input100']}>Name</span>
                        { errors['name'] && (<span className='text-danger'>{errors['name']}</span>) }
                    </div>

                    <div className={`${addEditForm['wrap-input100']} ${addEditForm['rs1-wrap-input100']} ${addEditForm['alert-validate']}`}>
                        <input
                            className={addEditForm['input100']}
                            value={userData.email}
                            onChange={e => onInputChange(e.target.value, 'email')}
                            type="text"
                        />
                        <span className={addEditForm['label-input100']}>Email</span>
                        { errors['email'] && (<span className='text-danger'>{errors['email']}</span>) }
                    </div>

                    <div className={`${addEditForm['wrap-input100']} ${addEditForm['password-field']}`}>
                        <input
                            className={addEditForm['input100']}
                            value={userData.password}
                            onChange={e => onInputChange(e.target.value, 'password')}
                            type="text"
                        />
                        <span className={addEditForm['label-input100']}>Password</span>
                        { errors['password'] && (<span className='text-danger'>{errors['password']}</span>) }
                    </div>

                    <div className={addEditForm['container-contact100-form-btn']}>
                        <div className={addEditForm['wrap-contact100-form-btn']}>
                            <div className={addEditForm['contact100-form-bgbtn']}></div>
                            <button
                                className={`${addEditForm['contact100-form-btn']} rounded`}
                                type={'submit'}
                                onClick={e => onSubmit(e)}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default addEditUser;