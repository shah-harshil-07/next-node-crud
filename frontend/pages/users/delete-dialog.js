import React from "react";
import deleteDialogCSS from '../../styles/employees/DeleteDialog.module.css';

const deleteDialog = ({ userName, closeDeleteDialog, confirmDeleteUser }) => {
    return (
        <div id="id01" className={deleteDialogCSS['modal']}>
            <div className={deleteDialogCSS['modal-content']}>
                <header className={`${deleteDialogCSS['container']} ${deleteDialogCSS['teal']}`}>
                    <div className={`row ${deleteDialogCSS['header-box']}`}>
                        <div className="col-sm-11"><h3>Delete User</h3></div>

                        <div className={`col-sm-1 ${deleteDialogCSS['close-div']}`} onClick={() => closeDeleteDialog()}>
                            <span className={deleteDialogCSS['close-btn']}>&times;</span>
                        </div>
                    </div>
                </header>

                <div className={deleteDialogCSS['container-body']}>
                    <p>{`Are you sure you want to delete ${userName}?`}</p>
                </div>

                <footer className={deleteDialogCSS['modal-footer']}>
                    <div className={`row ${deleteDialogCSS['button-container']}`}>
                        <button
                            className={`btn btn-primary col-sm-4 ${deleteDialogCSS['custom-btn']}`}
                            onClick={() => closeDeleteDialog()}
                        >
                            Cancel
                        </button>

                        <div className="col-sm-1"></div>

                        <button
                            onClick={() => confirmDeleteUser()}
                            className={`btn btn-primary col-sm-4 ${deleteDialogCSS['custom-btn']}`}
                        >
                            Delete
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default deleteDialog;
